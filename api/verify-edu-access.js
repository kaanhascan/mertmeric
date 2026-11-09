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
            return res.status(200).json({ ok: true, driveUrl: data.drive_url });
        } else {
            return res.status(403).json({ ok: false, error: data?.error || "not_found" });
        }
    } catch (err) {
        return res.status(502).json({ ok: false, error: "server_error" });
    }
};
