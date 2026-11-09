function extractDriveFolderId(input) {
    const s = String(input || '').trim();
    if (!s) return '';
    const m1 = s.match(/\/folders\/([a-zA-Z0-9_-]{15,})/);
    if (m1) return m1[1];
    const m2 = s.match(/[?&]id=([a-zA-Z0-9_-]{15,})/);
    if (m2) return m2[1];
    const m3 = s.match(/^([a-zA-Z0-9_-]{20,})$/);
    if (m3) return m3[1];
    return '';
}

module.exports = async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(204).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ ok: false, error: "Method Not Allowed" });
    }

    let body = req.body;
    if (typeof body === 'string') {
        try {
            body = JSON.parse(body);
        } catch (_) {
            body = {};
        }
    }

    const rawEmail = body && body.email;
    const cleanEmail = String(rawEmail || '').trim().toLowerCase();

    if (!cleanEmail || !cleanEmail.includes('@') || cleanEmail.length < 5) {
        return res.status(400).json({ ok: false, error: "invalid_email" });
    }

    const SB_URL = "https://gjbvypvyikrwicdfhler.supabase.co";
    const SB_KEY = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqYnZ5cHZ5aWtyd2ljZGZobGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwMjI1MDksImV4cCI6MjEwODU5ODUwOX0.vVEDvyPbZauodNMPG8c_14yJiNqyIBTPmViKiYQJgsM";

    try {
        try {
            const setRes = await fetch(`${SB_URL}/rest/v1/site_settings?id=eq.1&select=dock_icons`, {
                headers: {
                    apikey: SB_KEY,
                    Authorization: `Bearer ${SB_KEY}`
                }
            });
            if (setRes.ok) {
                const rows = await setRes.json();
                const ec = rows && rows[0] && rows[0].dock_icons && rows[0].dock_icons._edu_config;
                const scriptUrl = String((ec && ec.apps_script_url) || '').trim();
                const cfgDriveUrl = String((ec && ec.drive_url) || '').trim();
                const folderId = extractDriveFolderId(cfgDriveUrl);

                if (scriptUrl && scriptUrl.startsWith('https://script.google.com/') && folderId) {
                    const sep = scriptUrl.includes('?') ? '&' : '?';
                    const verifyUrl = `${scriptUrl}${sep}folderId=${encodeURIComponent(folderId)}&email=${encodeURIComponent(cleanEmail)}`;
                    const gasRes = await fetch(verifyUrl, { method: 'GET', redirect: 'follow' });
                    if (gasRes.ok) {
                        const gasData = await gasRes.json().catch(() => null);
                        if (gasData && gasData.ok && gasData.allowed) {
                            const finalDriveUrl = cfgDriveUrl || gasData.driveUrl || `https://drive.google.com/drive/folders/${folderId}`;
                            return res.status(200).json({ ok: true, driveUrl: finalDriveUrl, source: 'google_drive_live' });
                        }
                    }
                }
            }
        } catch (_) {
        }
        const response = await fetch(`${SB_URL}/rest/v1/rpc/verify_edu_access`, {
            method: "POST",
            headers: {
                apikey: SB_KEY,
                Authorization: `Bearer ${SB_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ check_email: cleanEmail })
        });

        if (!response.ok) {
            const errTxt = await response.text();
            return res.status(500).json({ ok: false, error: "rpc_failed", detail: errTxt });
        }

        const data = await response.json();
        if (data && data.success) {
            return res.status(200).json({ ok: true, driveUrl: data.drive_url, source: 'supabase' });
        } else {
            return res.status(403).json({ ok: false, error: data?.error || "not_found" });
        }
    } catch (err) {
        return res.status(502).json({ ok: false, error: "server_error" });
    }
};
