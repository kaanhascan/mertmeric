const SUPABASE_CONFIG = {
    url: "https://gjbvypvyikrwicdfhler.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqYnZ5cHZ5aWtyd2ljZGZobGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwMjI1MDksImV4cCI6MjEwODU5ODUwOX0.vVEDvyPbZauodNMPG8c_14yJiNqyIBTPmViKiYQJgsM",
    bucket: "media"
};

function getProxiedMediaUrl(url) {
    if (!url || typeof url !== 'string') return url;
    const prefix = `${SUPABASE_CONFIG.url}/storage/v1/object/public/${SUPABASE_CONFIG.bucket}/`;
    const isLocal = typeof window !== 'undefined' && window.location && (
        window.location.protocol === 'file:' ||
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'
    );
    const domainPrefix = 'https://mertmeric.music/storage/';
    let path = url;
    if (path.startsWith(prefix)) {
        path = '/storage/' + path.slice(prefix.length);
    } else if (path.startsWith(domainPrefix)) {
        path = '/storage/' + path.slice(domainPrefix.length);
    }
    if (isLocal && path.startsWith('/storage/')) {
        return 'https://mertmeric.music' + path;
    }
    return path;
}

const SITE = {
    brand: "MERTMERIC",
    name: "MERTMERIC",
    locale: "en-US",
    hour12: true,
    lang: localStorage.getItem('site_lang') === 'en' ? 'en' : 'tr',
    unlockHint: "Swipe up to unlock",
    tracksTitle: "tracks",
    longBioBtnText: "Uzun Biyografi ↗",
    longBioBtnTextEn: "Full Biography ↗",
    bioBackText: "‹ Geri Dön",
    bioBadgeText: "BIOGRAPHY",
    bioFooterLabel: "Bookings & Management",
    logoImage: "",
    lockImage: "lockimgcomp.png",
    bgVideo: "",
    bgGif: "",
    shortBio: { tr: [], en: [] },
    longBio: { tr: [], en: [] },
    tracks: [],
    media: [],
    albums: [],
    email: "",
    links: {
        instagram: "",
        soundcloud: "",
        spotify: "",
        youtube: "",
        uncompressed: ""
    },
    dockIcons: {
        instagram: "",
        soundcloud: "",
        spotify: "",
        youtube: "",
        photos: "",
        contact: ""
    },
    eduConfig: {
        enabled: true,
        applications_open: true,
        portal_open: true,
        apps_script_url: "",
        drive_url: "",
        closed_msg_tr: "Bu dönem için eğitim başvurularımız tamamlanmıştır. Yeni dönem duyuruları için takipte kalın veya doğrudan iletişime geçin.",
        closed_msg_en: "Applications for this term are now closed. Follow for updates or contact us directly.",
        btn_tr: "DJ Eğitimi ↗",
        btn_en: "DJ Academy ↗",
        badge_tr: "Prodüksiyon Akademisi",
        badge_en: "Production Academy",
        title_tr: "DJ & Prodüksiyon Eğitimi Başvuru Formu",
        title_en: "DJ & Production Academy Application",
        desc_tr: "Birebir DJ ve prodüksiyon eğitimleri için aşağıdaki formu doldurarak başvurunuzu iletebilirsiniz. Başvurunuz incelendikten sonra sizinle iletişime geçilecektir.",
        desc_en: "Fill out the form below to apply for 1-on-1 DJ and music production coaching. We will get back to you after reviewing your application.",
        submit_tr: "Başvuruyu Gönder ↗",
        submit_en: "Submit Application ↗",
        questions: [
            { id: "q_name", label_tr: "Adınız Soyadınız", label_en: "Full Name", placeholder_tr: "Adınız ve soyadınız", placeholder_en: "Your full name", type: "text", options_tr: "", options_en: "", required: true },
            { id: "q_contact", label_tr: "Telefon Numaranız (WhatsApp)", label_en: "Phone Number (WhatsApp)", placeholder_tr: "05XX XXX XX XX", placeholder_en: "+90 5XX XXX XX XX", type: "tel", options_tr: "", options_en: "", required: true },
            { id: "q_ig", label_tr: "Instagram Kullanıcı Adınız", label_en: "Instagram Username", placeholder_tr: "@kullaniciadi", placeholder_en: "@username", type: "text", options_tr: "", options_en: "", required: true },
            { id: "q_level", label_tr: "Mevcut Seviyeniz / İlgilendiğiniz Alan", label_en: "Current Experience Level / Track", placeholder_tr: "", placeholder_en: "", type: "select", options_tr: "Sıfırdan Başlangıç, Orta Seviye DJ, İleri Seviye / Prodüksiyon", options_en: "Beginner (From Scratch), Intermediate DJ, Advanced / Production", required: true },
            { id: "q_note", label_tr: "Hedefleriniz & Eklemek İstedikleriniz", label_en: "Your Goals & Additional Notes", placeholder_tr: "Eğitimden beklentilerinizi, müzik tarzınızı veya sormak istediklerinizi yazabilirsiniz...", placeholder_en: "Tell us about your musical goals, favorite genres, or any questions...", type: "textarea", options_tr: "", options_en: "", required: false }
        ]
    },
    eduSubmissions: [],
    eduTableMissing: false,
    eduAccess: [],
    eduDriveUrl: '',
    eduAccessTableMissing: false
};

function buildDockIconsPayload() {
    return {
        ...SITE.dockIcons,
        _uncompressed_url: SITE.links.uncompressed,
        _edu_config: SITE.eduConfig
    };
}

const ICONS = {
    photos: `<svg viewBox="0 0 64 64">
        <g transform="translate(32,32)">
            <rect x="-5" y="-24" width="10" height="19" rx="5" fill="#ff9500" opacity=".92"/>
            <rect x="-5" y="-24" width="10" height="19" rx="5" fill="#ffcc00" opacity=".92" transform="rotate(45)"/>
            <rect x="-5" y="-24" width="10" height="19" rx="5" fill="#34c759" opacity=".92" transform="rotate(90)"/>
            <rect x="-5" y="-24" width="10" height="19" rx="5" fill="#5ac8fa" opacity=".92" transform="rotate(135)"/>
            <rect x="-5" y="-24" width="10" height="19" rx="5" fill="#007aff" opacity=".92" transform="rotate(180)"/>
            <rect x="-5" y="-24" width="10" height="19" rx="5" fill="#af52de" opacity=".92" transform="rotate(225)"/>
            <rect x="-5" y="-24" width="10" height="19" rx="5" fill="#ff2d55" opacity=".92" transform="rotate(270)"/>
            <rect x="-5" y="-24" width="10" height="19" rx="5" fill="#ff3b30" opacity=".92" transform="rotate(315)"/>
        </g>
    </svg>`,
    contact: `<svg viewBox="0 0 64 64">
        <rect x="8" y="15" width="48" height="34" rx="6" fill="url(#mgrad)"/>
        <path d="M10 17l22 16 22-16" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 47l15-13M54 47L39 34" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="2.2" stroke-linecap="round"/>
        <defs>
            <linearGradient id="mgrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#38bdf8"/>
                <stop offset="100%" stop-color="#0284c7"/>
            </linearGradient>
        </defs>
    </svg>`,
    instagram: `<svg viewBox="0 0 64 64">
        <defs>
            <linearGradient id="igrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#feda75"/>
                <stop offset="30%" stop-color="#fa7e1e"/>
                <stop offset="60%" stop-color="#d62976"/>
                <stop offset="100%" stop-color="#4f5bd5"/>
            </linearGradient>
        </defs>
        <rect x="12" y="12" width="40" height="40" rx="11" fill="none" stroke="url(#igrad)" stroke-width="4"/>
        <circle cx="32" cy="32" r="9.5" fill="none" stroke="url(#igrad)" stroke-width="4"/>
        <circle cx="43.5" cy="20.5" r="2.6" fill="#d62976"/>
    </svg>`,
    soundcloud: `<svg viewBox="0 0 64 64">
        <rect x="6" y="12" width="52" height="40" rx="10" fill="#ff5500"/>
        <path d="M32 41h14.5a6.5 6.5 0 00.9-12.9A10.5 10.5 0 0027 26v15h5zm-5 0V27.5m-4 13.5V30m-4 11V32.5m-4 8.5V35" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`,
    spotify: `<svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="23" fill="#1db954"/>
        <path d="M20 26.5c7.5-2.2 16.5-1.8 23.5 1.6M21.5 33c6.2-1.8 13.8-1.4 19.6 1.4M23 39.2c5-1.3 11.2-1 15.8 1.1" fill="none" stroke="#000" stroke-width="3.2" stroke-linecap="round"/>
    </svg>`,
    youtube: `<svg viewBox="0 0 64 64">
        <rect x="9" y="16" width="46" height="32" rx="9" fill="#ff0000"/>
        <polygon points="27,24 27,40 41,32" fill="#fff"/>
    </svg>`
};

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function safeUrl(u) {
    u = String(u || '').trim();
    if (!u) return '';
    if (!/^https?:\/\//i.test(u)) u = 'https://' + u;
    try { return new URL(u).href; } catch (_) { return ''; }
}

const TRACK_PLATFORM_ICONS = {
    youtube: getProxiedMediaUrl("/storage/icons/1793126833240_e9hlhb.png"),
    spotify: getProxiedMediaUrl("/storage/icons/1793126788498_vznety.png"),
    soundcloud: getProxiedMediaUrl("/storage/icons/1793126781236_6v33is.png")
};

const memoryImageCache = new Map();
function preloadImageInMemory(src) {
    if (!src || memoryImageCache.has(src)) return;
    const img = new Image();
    img.decoding = 'async';
    img.src = src;
    memoryImageCache.set(src, img);
}
Object.values(TRACK_PLATFORM_ICONS).forEach(preloadImageInMemory);

function parseTrackLinks(raw) {
    const res = { youtube: '', spotify: '', soundcloud: '' };
    if (!raw || typeof raw !== 'string') return res;
    const trimmed = raw.trim();
    if (!trimmed) return res;
    if (trimmed.startsWith('{')) {
        try {
            const parsed = JSON.parse(trimmed);
            if (parsed && typeof parsed === 'object') {
                res.youtube = String(parsed.youtube || '').trim();
                res.spotify = String(parsed.spotify || '').trim();
                res.soundcloud = String(parsed.soundcloud || '').trim();
                return res;
            }
        } catch (_) { }
    }
    const lower = trimmed.toLowerCase();
    if (lower.includes('youtu.be') || lower.includes('youtube.com')) res.youtube = trimmed;
    else if (lower.includes('spotify.com')) res.spotify = trimmed;
    else if (lower.includes('soundcloud.com')) res.soundcloud = trimmed;
    return res;
}

function serializeTrackLinks(linksObj) {
    const youtube = String(linksObj?.youtube || '').trim();
    const spotify = String(linksObj?.spotify || '').trim();
    const soundcloud = String(linksObj?.soundcloud || '').trim();
    if (!youtube && !spotify && !soundcloud) return null;
    return JSON.stringify({ youtube, spotify, soundcloud });
}

function makeLiquidMap(w, h, r, bezel) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    const img = ctx.createImageData(w, h);
    const hx = w / 2, hy = h / 2;
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const px = x + .5 - hx, py = y + .5 - hy;
            const qx = Math.abs(px) - (hx - r), qy = Math.abs(py) - (hy - r);
            const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
            const dist = -(outside + Math.min(Math.max(qx, qy), 0) - r);
            let nx = 0, ny = 0;
            if (qx > 0 && qy > 0) {
                const l = Math.hypot(qx, qy) || 1;
                nx = qx / l * Math.sign(px); ny = qy / l * Math.sign(py);
            } else if (qx > qy) nx = Math.sign(px);
            else ny = Math.sign(py);
            const t = Math.min(Math.max(dist / bezel, 0), 1);
            const m = Math.pow(1 - t, 2.2);
            const i = (y * w + x) * 4;
            img.data[i] = 128 - nx * m * 127;
            img.data[i + 1] = 128 - ny * m * 127;
            img.data[i + 2] = 128;
            img.data[i + 3] = 255;
        }
    }
    ctx.putImageData(img, 0, 0);
    return c.toDataURL();
}

function updateLiquidCard() {
    const card = $('#tracksBox');
    const fe = $('#lgCardMap');
    if (!card || !fe) return;
    const w = card.offsetWidth, h = card.offsetHeight;
    if (!w || !h) return;
    const r = parseFloat(getComputedStyle(card).borderTopLeftRadius) || 44;
    const dataUrl = makeLiquidMap(w, h, r, 34);
    fe.setAttribute('width', w);
    fe.setAttribute('height', h);
    fe.setAttribute('href', dataUrl);
    fe.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', dataUrl);
}

function detectMediaType(src, mime) {
    if (mime && mime.startsWith('video/')) return 'video';
    if (mime && mime.startsWith('image/')) return 'photo';
    const s = String(src || '').replace(/\\/g, '/').toLowerCase();
    if (/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(s)) return 'video';
    return 'photo';
}

function applySettingsObject(s) {
    if (!s) return;
    SITE.lockImage = "lockimgcomp.png";
    SITE.logoImage = getProxiedMediaUrl(s.logo_image) || SITE.logoImage || '';

    const cloudBg = getProxiedMediaUrl(s.bg_gif || s.bg_video || '');
    if (cloudBg) {
        if (detectMediaType(cloudBg) === 'video') {
            SITE.bgVideo = cloudBg;
            SITE.bgGif = '';
        } else {
            SITE.bgGif = cloudBg;
            SITE.bgVideo = '';
        }
    }

    if (typeof s.brand === 'string' && s.brand) SITE.brand = s.brand;
    if (typeof s.name === 'string' && s.name) SITE.name = s.name;
    if (typeof s.unlock_hint === 'string') SITE.unlockHint = s.unlock_hint;
    if (typeof s.tracks_title === 'string' && s.tracks_title) SITE.tracksTitle = s.tracks_title;
    if (typeof s.long_bio_btn_text === 'string' && s.long_bio_btn_text) SITE.longBioBtnText = s.long_bio_btn_text;
    if (typeof s.bio_back_text === 'string' && s.bio_back_text) SITE.bioBackText = s.bio_back_text;
    if (typeof s.bio_badge_text === 'string' && s.bio_badge_text) SITE.bioBadgeText = s.bio_badge_text;
    if (typeof s.bio_footer_label === 'string' && s.bio_footer_label) SITE.bioFooterLabel = s.bio_footer_label;
    if (Array.isArray(s.short_bio) && s.short_bio.length) {
        SITE.shortBio.tr = s.short_bio;
    } else if (s.short_bio && typeof s.short_bio === 'object') {
        if (Array.isArray(s.short_bio.tr) && s.short_bio.tr.length) SITE.shortBio.tr = s.short_bio.tr;
        if (Array.isArray(s.short_bio.en) && s.short_bio.en.length) SITE.shortBio.en = s.short_bio.en;
    }

    if (Array.isArray(s.long_bio) && s.long_bio.length) {
        SITE.longBio.tr = s.long_bio;
    } else if (s.long_bio && typeof s.long_bio === 'object') {
        if (Array.isArray(s.long_bio.tr) && s.long_bio.tr.length) SITE.longBio.tr = s.long_bio.tr;
        if (Array.isArray(s.long_bio.en) && s.long_bio.en.length) SITE.longBio.en = s.long_bio.en;
    }
    if (typeof s.email === 'string' && s.email) SITE.email = s.email;
    if (typeof s.instagram_url === 'string' && s.instagram_url) SITE.links.instagram = s.instagram_url;
    if (typeof s.soundcloud_url === 'string' && s.soundcloud_url) SITE.links.soundcloud = s.soundcloud_url;
    if (typeof s.spotify_url === 'string' && s.spotify_url) SITE.links.spotify = s.spotify_url;
    if (typeof s.youtube_url === 'string' && s.youtube_url) SITE.links.youtube = s.youtube_url;
    if (typeof s.uncompressed_url === 'string') SITE.links.uncompressed = s.uncompressed_url;
    if (s.dock_icons && typeof s.dock_icons === 'object') {
        ['instagram', 'soundcloud', 'spotify', 'youtube', 'photos', 'contact'].forEach(k => {
            if (typeof s.dock_icons[k] === 'string') SITE.dockIcons[k] = getProxiedMediaUrl(s.dock_icons[k]);
        });
        if (typeof s.dock_icons._uncompressed_url === 'string') {
            SITE.links.uncompressed = s.dock_icons._uncompressed_url;
        }
        if (s.dock_icons._edu_config && typeof s.dock_icons._edu_config === 'object') {
            const ec = s.dock_icons._edu_config;
            SITE.eduConfig = {
                ...SITE.eduConfig,
                ...ec,
                badge_tr: (!ec.badge_tr || ec.badge_tr === 'DJ ACADEMY') ? 'Prodüksiyon Akademisi' : ec.badge_tr,
                badge_en: (!ec.badge_en || ec.badge_en === 'DJ ACADEMY') ? 'Production Academy' : ec.badge_en,
                questions: Array.isArray(ec.questions) ? ec.questions : SITE.eduConfig.questions
            };
        }
    }
}

let settingsLoadedOnce = false;
let tracksLoadedOnce = false;

function applyTracksArray(tracksData) {
    if (!Array.isArray(tracksData)) return;
    SITE.tracks = tracksData.map(t => ({
        ...t,
        audio: getProxiedMediaUrl(t.audio),
        cover: getProxiedMediaUrl(t.cover)
    }));
    SITE.tracks.forEach(t => preloadImageInMemory(t.cover));
}

try {
    localStorage.removeItem('mert_site_cache_v1');
    localStorage.removeItem('mert_cloud_texts_v1');
    const cachedSettings = JSON.parse(localStorage.getItem('mert_cloud_settings_v2') || 'null');
    if (cachedSettings) {
        applySettingsObject(cachedSettings);
        settingsLoadedOnce = true;
        preloadImageInMemory(SITE.logoImage);
        Object.values(SITE.dockIcons).forEach(preloadImageInMemory);
    }
    const cachedTracks = JSON.parse(localStorage.getItem('mert_cloud_tracks_v1') || 'null');
    if (Array.isArray(cachedTracks) && cachedTracks.length) {
        applyTracksArray(cachedTracks);
        tracksLoadedOnce = true;
    }
} catch (_) { }

const sb = window.supabase
    ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey)
    : null;

let adminSession = null;
let adminTab = (typeof location !== 'undefined' && location.pathname.includes('egitim')) ? 'edu' : ((typeof location !== 'undefined' && location.pathname.includes('bio')) ? 'texts' : 'media');

async function syncFromSupabase() {
    if (!sb) return;
    try {
        const earlySettings = window.__earlySettingsPromise;
        const earlyTracks = window.__earlyTracksPromise;
        window.__earlySettingsPromise = null;
        window.__earlyTracksPromise = null;

        const [settingsRes, tracksRes] = await Promise.all([
            earlySettings
                ? earlySettings.then(data => ({ data }))
                : sb.from('site_settings').select('*').eq('id', 1).maybeSingle(),
            earlyTracks
                ? earlyTracks.then(data => ({ data }))
                : sb.from('tracks').select('*').order('sort_order', { ascending: true }).order('created_at', { ascending: false })
        ]);

        const settingsData = settingsRes?.data;
        if (settingsData) {
            applySettingsObject(settingsData);
            settingsLoadedOnce = true;
            preloadImageInMemory(SITE.logoImage);
            Object.values(SITE.dockIcons).forEach(preloadImageInMemory);
            try {
                localStorage.setItem('mert_cloud_settings_v2', JSON.stringify(settingsData));
            } catch (_) { }
        }

        const tracksData = tracksRes?.data;
        if (Array.isArray(tracksData)) {
            applyTracksArray(tracksData);
            tracksLoadedOnce = true;
            try {
                localStorage.setItem('mert_cloud_tracks_v1', JSON.stringify(tracksData));
            } catch (_) { }
        }

        applyMedia();
        buildDock();

        const [
            { data: albumsData },
            { data: mediaData },
            { data: sessionRes }
        ] = await Promise.all([
            sb.from('albums').select('*').order('created_at', { ascending: true }),
            sb.from('media_items').select('*').order('created_at', { ascending: false }),
            sb.auth.getSession()
        ]);

        adminSession = sessionRes?.session || null;

        if (Array.isArray(albumsData)) SITE.albums = albumsData.map(a => ({ ...a, cover: getProxiedMediaUrl(a.cover) }));
        if (Array.isArray(mediaData)) SITE.media = mediaData.map(m => ({ ...m, src: getProxiedMediaUrl(m.src) }));

        if (adminSession) {
            const [subRes, accessRes, vaultRes] = await Promise.all([
                sb.from('edu_submissions').select('*').order('created_at', { ascending: false }),
                sb.from('edu_access').select('*').order('created_at', { ascending: false }),
                sb.from('edu_vault').select('drive_url').eq('id', 1).maybeSingle()
            ]);

            if (subRes.error) {
                if (subRes.error.code === '42P01' || subRes.error.code === 'PGRST205' || String(subRes.error.message || '').includes('edu_submissions')) {
                    SITE.eduTableMissing = true;
                }
            } else if (Array.isArray(subRes.data)) {
                SITE.eduTableMissing = false;
                SITE.eduSubmissions = subRes.data;
            }

            if (accessRes.error) {
                if (accessRes.error.code === '42P01' || accessRes.error.code === 'PGRST205' || String(accessRes.error.message || '').includes('edu_access')) {
                    SITE.eduAccessTableMissing = true;
                }
            } else if (Array.isArray(accessRes.data)) {
                SITE.eduAccessTableMissing = false;
                SITE.eduAccess = accessRes.data;
            }

            if (vaultRes && vaultRes.data && typeof vaultRes.data.drive_url === 'string') {
                SITE.eduDriveUrl = vaultRes.data.drive_url;
            }
        }

        refreshOpenWindows();
    } catch (_) { }
}

async function uploadFileToSupabase(file, folder = 'uploads') {
    const ext = (file.name.split('.').pop() || 'bin').toLowerCase();
    const path = `${folder}/${Date.now()}_${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await sb.storage.from(SUPABASE_CONFIG.bucket).upload(path, file, {
        cacheControl: '31536000, immutable',
        upsert: false
    });
    if (error) throw error;
    const { data } = sb.storage.from(SUPABASE_CONFIG.bucket).getPublicUrl(path);
    return { publicUrl: data.publicUrl, storagePath: path };
}

function getVideoFileDuration(file) {
    return new Promise(resolve => {
        if (!file.type.startsWith('video/')) return resolve('');
        const v = document.createElement('video');
        v.preload = 'metadata';
        v.onloadedmetadata = () => {
            URL.revokeObjectURL(v.src);
            resolve(formatDuration(v.duration));
        };
        v.onerror = () => resolve('');
        v.src = URL.createObjectURL(file);
    });
}

function refreshOpenWindows() {
    ['photos', 'contact', 'admin'].forEach(k => {
        const w = document.querySelector(`.w[data-k="${k}"]`);
        if (w && APPS[k]) {
            const sc = w.querySelector('.adm-scroll');
            const prevScroll = sc ? sc.scrollTop : 0;
            w.querySelector('.body').innerHTML = APPS[k].render();
            if (APPS[k].bind) APPS[k].bind(w);
            const scNew = w.querySelector('.adm-scroll');
            if (scNew && prevScroll) scNew.scrollTop = prevScroll;
        }
    });
}

function formatDuration(sec) {
    if (!sec || !isFinite(sec) || sec < 0) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

let lockImgLoaded = false;
let lockImgLoadingSrc = '';

function ensureLockImagePriority(src, onReady) {
    if (!src) {
        lockImgLoaded = true;
        if (onReady) onReady();
        return;
    }
    if (lockImgLoaded && lockImgLoadingSrc === src) {
        if (onReady) onReady();
        return;
    }
    lockImgLoadingSrc = src;
    lockImgLoaded = false;

    let preloadLink = document.getElementById('lockPreloadLink');
    if (!preloadLink) {
        preloadLink = document.createElement('link');
        preloadLink.id = 'lockPreloadLink';
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.setAttribute('fetchpriority', 'high');
        document.head.appendChild(preloadLink);
    }
    if (preloadLink.getAttribute('href') !== src) {
        preloadLink.setAttribute('href', src);
    }

    const img = new Image();
    img.fetchPriority = 'high';
    img.decoding = 'async';
    let done = false;
    const finish = () => {
        if (done) return;
        done = true;
        lockImgLoaded = true;
        if (onReady) onReady();
    };
    img.onload = finish;
    img.onerror = finish;
    setTimeout(finish, 2500);
    img.src = src;
}

const bgBlobCache = new Map();
let activeBgTarget = '';

function applyDesktopBg() {
    const v = $('#bgv');
    const g = $('#bggif');
    if (!v || !g) return;
    const bgSrc = SITE.bgGif || SITE.bgVideo;

    if (!bgSrc) {
        activeBgTarget = '';
        g.style.display = 'none';
        v.style.display = 'none';
        v.pause();
    } else if (SITE.bgGif || detectMediaType(bgSrc) === 'photo') {
        activeBgTarget = bgSrc;
        if (g.getAttribute('src') !== bgSrc) g.src = bgSrc;
        g.style.display = 'block';
        v.style.display = 'none';
        v.pause();
    } else {
        v.style.display = 'block';
        g.style.display = 'none';
        if (activeBgTarget !== bgSrc) {
            activeBgTarget = bgSrc;
            const cachedBlobUrl = bgBlobCache.get(bgSrc);
            if (cachedBlobUrl) {
                if (v.getAttribute('src') !== cachedBlobUrl) v.src = cachedBlobUrl;
                if (unlocked) v.play().catch(() => { });
            } else {
                fetch(bgSrc)
                    .then(r => {
                        if (!r.ok) throw new Error('status ' + r.status);
                        return r.blob();
                    })
                    .then(blob => {
                        const blobUrl = URL.createObjectURL(blob);
                        bgBlobCache.set(bgSrc, blobUrl);
                        if (activeBgTarget === bgSrc) {
                            v.src = blobUrl;
                            if (unlocked) v.play().catch(() => { });
                        }
                    })
                    .catch(() => {
                        if (activeBgTarget === bgSrc) {
                            if (v.getAttribute('src') !== bgSrc) v.src = bgSrc;
                            if (unlocked) v.play().catch(() => { });
                        }
                    });
            }
        } else if (unlocked && v.paused && v.getAttribute('src')) {
            v.play().catch(() => { });
        }
    }
}

function applyMedia() {
    document.title = SITE.name;
    const bnEl = $('#bn');
    if (bnEl) bnEl.textContent = SITE.brand;

    const hintSpan = $('#hint span');
    if (hintSpan) hintSpan.textContent = SITE.unlockHint;

    document.documentElement.style.setProperty(
        '--lw',
        SITE.lockImage ? `url("${SITE.lockImage}")` : 'none'
    );

    if (!unlocked && SITE.lockImage) {
        ensureLockImagePriority(SITE.lockImage, applyDesktopBg);
    } else {
        applyDesktopBg();
    }

    const logoImg = $('#hubLogoImg');
    const logoWrap = $('#logoImgWrap');
    const logoTxt = $('#hubLogoText');
    if (logoImg && logoTxt) {
        if (SITE.logoImage) {
            if (logoImg.getAttribute('src') !== SITE.logoImage) logoImg.src = SITE.logoImage;
            logoImg.style.display = 'block';
            if (logoWrap) {
                logoWrap.style.display = 'inline-flex';
                logoWrap.style.setProperty('--logo-mask', `url("${SITE.logoImage}")`);
            }
            logoTxt.style.display = 'none';
        } else {
            logoImg.style.display = 'none';
            if (logoWrap) logoWrap.style.display = 'none';
            logoTxt.style.display = settingsLoadedOnce ? 'block' : 'none';
            logoTxt.textContent = SITE.name;
        }
    }

    const bioMain = $('#bioMainBox');
    if (bioMain) {
        const list = SITE.shortBio[SITE.lang] || SITE.shortBio.tr;
        bioMain.innerHTML = list.map(p => `<p>${esc(p).replace(/MERTMERIC/g, '<span class="bio-brand">MERTMERIC</span>')}</p>`).join('');
    }

    document.querySelectorAll('#hubLangSwitch .lang-flag-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === SITE.lang);
    });

    const trkLbl = $('#tracksBox .sub-box-label');
    if (trkLbl) trkLbl.textContent = SITE.tracksTitle;

    const bioBtn = $('#bioLinkTxt') || $('#bioLinkBox');
    if (bioBtn) {
        bioBtn.textContent = SITE.lang === 'en' ? SITE.longBioBtnTextEn : SITE.longBioBtnText;
    }

    const eduBox = $('#eduLinkBox');
    const eduTxt = $('#eduLinkTxt');
    if (eduBox) {
        const showEdu = !SITE.eduConfig || SITE.eduConfig.enabled !== false;
        eduBox.style.display = showEdu ? 'inline-flex' : 'none';
        if (eduTxt && SITE.eduConfig) {
            eduTxt.textContent = SITE.lang === 'en'
                ? (SITE.eduConfig.btn_en || 'DJ Academy ↗')
                : (SITE.eduConfig.btn_tr || 'DJ Eğitimi ↗');
        }
    }

    renderTrackWidget();
    requestAnimationFrame(updateViewportScale);

    if (typeof window.applyEduSettings === 'function' || typeof window.applyBioSettings === 'function') {
        let baseObj = {};
        try {
            baseObj = JSON.parse(localStorage.getItem('mert_cloud_settings_v2') || '{}') || {};
        } catch (_) { }
        const liveSettings = {
            ...baseObj,
            brand: SITE.brand,
            name: SITE.name,
            logo_image: SITE.logoImage,
            bg_video: SITE.bgVideo,
            bg_gif: SITE.bgGif,
            bio_back_text: SITE.bioBackText,
            bio_badge_text: SITE.bioBadgeText,
            bio_footer_label: SITE.bioFooterLabel,
            short_bio: SITE.shortBio,
            long_bio: SITE.longBio,
            email: SITE.email,
            instagram_url: SITE.links.instagram,
            soundcloud_url: SITE.links.soundcloud,
            spotify_url: SITE.links.spotify,
            youtube_url: SITE.links.youtube,
            dock_icons: buildDockIconsPayload()
        };
        if (typeof window.applyEduSettings === 'function') window.applyEduSettings(liveSettings);
        if (typeof window.applyBioSettings === 'function') window.applyBioSettings(liveSettings);
    }
}

document.querySelectorAll('#hubLangSwitch .lang-flag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        SITE.lang = btn.dataset.lang === 'en' ? 'en' : 'tr';
        try { localStorage.setItem('site_lang', SITE.lang); } catch (_) { }
        applyMedia();
    });
});

let currentTrackIdx = 0;
let trackVolume = 0.5;
let trackAudio = new Audio();
trackAudio.preload = 'none';
trackAudio.volume = trackVolume;
let isTrackPlaying = false;

trackAudio.addEventListener('timeupdate', () => {
    if (trackAudio.currentTime >= 30) {
        trackAudio.pause();
        trackAudio.currentTime = 0;
        isTrackPlaying = false;
        updateTrackPlayUI();
    }
    const t = Math.min(30, trackAudio.currentTime);
    const range = $('#trkRange');
    const timeEl = $('#trkTime');
    const remEl = $('#trkRem');
    if (range) { range.value = t; range.style.setProperty('--p', (t / 30 * 100) + '%'); }
    if (timeEl) timeEl.textContent = formatDuration(t);
    if (remEl) remEl.textContent = '-' + formatDuration(30 - t);
});

trackAudio.addEventListener('ended', () => {
    isTrackPlaying = false;
    trackAudio.currentTime = 0;
    updateTrackPlayUI();
});

function updateTrackPlayUI() {
    const btn = $('#trkPlayBtn');
    if (!btn) return;
    btn.innerHTML = isTrackPlaying
        ? `<svg viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>`
        : `<svg viewBox="0 0 24 24"><polygon points="7,5 19,12 7,19"/></svg>`;
}

function renderTrackWidget() {
    const wrap = $('#trackPlayer');
    if (!wrap) return;

    if (!SITE.tracks.length) {
        if (tracksLoadedOnce) {
            wrap.innerHTML = `<div style="font-size:12px;color:rgba(255,255,255,.5)">Henüz parça eklenmedi.</div>`;
        }
        return;
    }

    currentTrackIdx = (currentTrackIdx + SITE.tracks.length) % SITE.tracks.length;
    const trk = SITE.tracks[currentTrackIdx];

    if (trackAudio.dataset.trkId !== trk.id) {
        trackAudio.pause();
        trackAudio.src = trk.audio;
        trackAudio.volume = trackVolume;
        trackAudio.dataset.trkId = trk.id;
        isTrackPlaying = false;
    }

    const cur = Math.min(30, trackAudio.currentTime || 0);
    const links = parseTrackLinks(trk.link);
    const activePlatforms = [
        { key: 'youtube', label: 'YouTube', href: safeUrl(links.youtube), icon: SITE.dockIcons.youtube || TRACK_PLATFORM_ICONS.youtube },
        { key: 'spotify', label: 'Spotify', href: safeUrl(links.spotify), icon: SITE.dockIcons.spotify || TRACK_PLATFORM_ICONS.spotify },
        { key: 'soundcloud', label: 'SoundCloud', href: safeUrl(links.soundcloud), icon: SITE.dockIcons.soundcloud || TRACK_PLATFORM_ICONS.soundcloud }
    ].filter(p => Boolean(p.href));
    wrap.innerHTML = `
        <div class="trk-main">
            <img class="trk-cover" src="${esc(trk.cover)}" alt="${esc(trk.title)}">
            <div class="trk-meta">
                <div class="trk-title" title="${esc(trk.title)}">${esc(trk.title)}</div>
                <div class="trk-sub">30s Preview</div>
            </div>
        </div>
        <div class="trk-prog">
            <div class="trk-times">
                <span id="trkTime">${formatDuration(cur)}</span>
                <span id="trkRem">-${formatDuration(30 - cur)}</span>
            </div>
            <input type="range" class="trk-range" id="trkRange" min="0" max="30" step="0.1" value="${cur}" style="--p:${cur / 30 * 100}%">
        </div>

        <div class="trk-controls">
            <div class="trk-vol-wrap" title="Volume">
                <svg class="trk-vol-ic" viewBox="0 0 24 24">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
                <input type="range" class="trk-vol-range" id="trkVolRange" min="0" max="1" step="0.01" value="${trackVolume}">
            </div>
            <div class="trk-ctrl-mid">
                <button type="button" class="trk-ctl" id="trkPrev" aria-label="Previous track">
                    <svg viewBox="0 0 24 24"><rect x="5" y="5" width="3" height="14" rx="1"/><path d="M19 5.5v13a1 1 0 0 1-1.6.8l-9-6.5a1 1 0 0 1 0-1.6l9-6.5A1 1 0 0 1 19 5.5z"/></svg>
                </button>
                <button type="button" class="trk-ctl trk-play" id="trkPlayBtn" aria-label="Play or Pause"></button>
                <button type="button" class="trk-ctl" id="trkNext" aria-label="Next track">
                    <svg viewBox="0 0 24 24"><rect x="16" y="5" width="3" height="14" rx="1"/><path d="M5 5.5v13a1 1 0 0 0 1.6.8l9-6.5a1 1 0 0 0 0-1.6l-9-6.5A1 1 0 0 0 5 5.5z"/></svg>
                </button>
            </div>
            <div class="trk-links" aria-label="Track platform links">
                ${activePlatforms.map(p => `<a class="trk-plat-btn" data-plat="${p.key}" href="${esc(p.href)}" target="_blank" rel="noopener" title="${p.label}" aria-label="${p.label}"><img src="${esc(p.icon)}" alt="${p.label}"></a>`).join('')}
            </div>
        </div>
    `;

    updateTrackPlayUI();

    $('#trkPlayBtn').onclick = () => {
        if (isTrackPlaying) {
            trackAudio.pause();
            isTrackPlaying = false;
            updateTrackPlayUI();
        } else {
            if (trackAudio.currentTime >= 30) trackAudio.currentTime = 0;
            trackAudio.volume = trackVolume;
            trackAudio.play().then(() => {
                isTrackPlaying = true;
                updateTrackPlayUI();
            }).catch(() => { });
        }
    };

    $('#trkPrev').onclick = () => {
        currentTrackIdx = (currentTrackIdx - 1 + SITE.tracks.length) % SITE.tracks.length;
        renderTrackWidget();
    };
    $('#trkNext').onclick = () => {
        currentTrackIdx = (currentTrackIdx + 1) % SITE.tracks.length;
        renderTrackWidget();
    };

    $('#trkRange').oninput = e => {
        const v = Math.min(30, Number(e.target.value));
        trackAudio.currentTime = v;
        e.target.style.setProperty('--p', (v / 30 * 100) + '%');
    };

    $('#trkVolRange').oninput = e => {
        trackVolume = Number(e.target.value);
        trackAudio.volume = trackVolume;
    };
}

function tick() {
    const d = new Date();
    const L = SITE.locale;
    const t = d.toLocaleTimeString(L, { hour: 'numeric', minute: '2-digit', hour12: SITE.hour12 });
    const lt = $('#ltime');
    const ld = $('#ldate');
    const bt = $('#bt');
    if (lt) lt.textContent = t;
    if (ld) ld.textContent = d.toLocaleDateString(L, { weekday: 'long', month: 'long', day: 'numeric' });
    if (bt) bt.textContent = d.toLocaleDateString(L, { weekday: 'short', month: 'short', day: 'numeric' }) + "  " + t;
}

const lock = $('#lock');
let y0 = null, unlocked = !lock;

function unlock() {
    if (unlocked) return;
    unlocked = true;
    if (lock) {
        lock.classList.add('gone');
        lock.setAttribute('aria-hidden', 'true');
    }
    applyDesktopBg();
    const v = $('#bgv');
    if (v && v.style.display !== 'none') v.play().catch(() => { });
}

if (lock) {
    lock.addEventListener('click', unlock);
    lock.addEventListener('pointerdown', e => { y0 = e.clientY; });
    lock.addEventListener('pointermove', e => {
        if (y0 !== null && y0 - e.clientY > 30) {
            y0 = null;
            unlock();
        }
    });
    lock.addEventListener('pointerup', e => {
        if (y0 !== null && y0 - e.clientY > 30) unlock();
        y0 = null;
    });
    lock.addEventListener('touchstart', e => {
        if (e.touches && e.touches[0]) y0 = e.touches[0].clientY;
    }, { passive: true });
    lock.addEventListener('touchmove', e => {
        if (y0 !== null && e.touches && e.touches[0] && y0 - e.touches[0].clientY > 30) {
            y0 = null;
            unlock();
        }
    }, { passive: true });
    lock.addEventListener('touchend', () => { y0 = null; }, { passive: true });

    if (location.hash === '#hub') {
        lock.style.transition = 'none';
        unlock();
        history.replaceState(null, '', location.pathname + location.search);
    }
}

let photosTab = 'library';
let activeAlbumId = null;
let viewerActive = false;
let viewerIndex = 0;

function getActiveMediaList() {
    if (photosTab === 'albums' && activeAlbumId !== null) {
        return SITE.media.filter(m => m.album === activeAlbumId);
    }
    return SITE.media;
}

function renderMediaTile(item, idx) {
    const isTileVid = item.type === 'video' || (!item.type && detectMediaType(item.src) === 'video');
    const durBadge = isTileVid ? (item.duration ? `<span class="vid-dur">${esc(item.duration)}</span>` : `<span class="vid-dur" data-auto-dur></span>`) : '';


    if (isTileVid) {
        return `
            <div class="lib-item" data-idx="${idx}">
                <video src="${esc(item.src)}" muted loop playsinline preload="metadata"></video>
                ${durBadge}
            </div>
        `;
    }
    return `
        <div class="lib-item" data-idx="${idx}">
            <img src="${esc(item.src)}" alt="Media ${idx + 1}" loading="lazy">
            ${durBadge}
        </div>
    `;
}

function renderPhotosDetailViewer() {
    const list = getActiveMediaList();
    if (!list.length) {
        viewerActive = false;
        return '';
    }
    viewerIndex = (viewerIndex + list.length) % list.length;
    const item = list[viewerIndex];
    const isVid = item.type === 'video' || (!item.type && detectMediaType(item.src) === 'video');
    const remDefault = item.duration ? `-${item.duration}` : '-0:00';

    return `
        <div class="pview">
            <button class="pview-done" id="pviewDone">Done</button>

            <div class="pview-stage">
                ${isVid
            ? `<video class="pview-ambient" src="${esc(item.src)}" muted playsinline></video>
                       <video class="pview-main" id="pviewVid" src="${esc(item.src)}" autoplay loop playsinline></video>`
            : `<img class="pview-ambient" src="${esc(item.src)}" alt="">
                       <img class="pview-main" src="${esc(item.src)}" alt="Preview">`
        }
                <div class="pview-zone prev" id="pviewPrev" title="Previous"></div>
                <div class="pview-zone next" id="pviewNext" title="Next"></div>
            </div>

            <div class="pview-scrub" style="display:${isVid ? 'flex' : 'none'}">
                <span class="pview-time" id="pviewCur">0:00</span>
                <input type="range" class="pview-range" id="pviewRange" min="0" max="100" step="0.1" value="0">
                <span class="pview-time rem" id="pviewRem">${esc(remDefault)}</span>
            </div>

            <div class="pview-strip" id="pviewStrip">
                ${list.map((m, idx) => `
                    <div class="pview-thumb ${idx === viewerIndex ? 'active' : ''}" data-idx="${idx}">
                        ${m.type === 'video'
                ? `<video src="${esc(m.src)}" muted playsinline preload="metadata"></video>`
                : `<img src="${esc(m.src)}" alt="" loading="lazy">`
            }
                    </div>
                `).join('')}
            </div>

            <div class="pview-actions">
                <button class="pview-act" id="actShare" title="Share">
                    <svg viewBox="0 0 24 24">
                        <path d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                </button>
                <button class="pview-act ${item.liked ? 'liked' : ''}" id="actLike" title="Favorite">
                    <svg viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                </button>
                <button class="pview-act" id="actInfo" title="Info">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                </button>
                <button class="pview-act" id="actAdjust" title="Adjustments">
                    <svg viewBox="0 0 24 24">
                        <line x1="4" y1="8" x2="20" y2="8" />
                        <circle cx="9" cy="8" r="2.5" fill="#000" />
                        <line x1="4" y1="16" x2="20" y2="16" />
                        <circle cx="15" cy="16" r="2.5" fill="#000" />
                    </svg>
                </button>
                <button class="pview-act" id="actTrash" title="Close Viewer">
                    <svg viewBox="0 0 24 24">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                    </svg>
                </button>
            </div>
        </div>
    `;
}

const APPS = {
    photos: {
        title: 'Photos',
        w: 760,
        render: () => {
            if (viewerActive) return renderPhotosDetailViewer();

            let headerHtml = '';
            let bodyHtml = '';

            if (photosTab === 'library') {
                headerHtml = `<h2>Library</h2>`;
                bodyHtml = `
                    <div class="lib-grid">
                        ${SITE.media.map((item, idx) => renderMediaTile(item, idx)).join('')}
                    </div>
                `;
            } else if (photosTab === 'albums' && activeAlbumId !== null) {
                const albumItems = getActiveMediaList();
                headerHtml = `
                    <div style="display:flex;align-items:center;gap:14px">
                        <button class="photos-back" id="backToAlbums">‹ Albums</button>
                        <h2>${esc(activeAlbumId)}</h2>
                    </div>
                `;
                bodyHtml = `
                    <div class="lib-grid">
                        ${albumItems.map((item, idx) => renderMediaTile(item, idx)).join('')}
                    </div>
                `;
            } else {
                headerHtml = `<h2>Albums</h2>`;
                const pinnedItem = SITE.media.find(m => m.pinned) || SITE.media[0];
                const pinnedCover = pinnedItem ? pinnedItem.src : '';
                const pinnedIsVid = pinnedItem && pinnedItem.type === 'video';

                bodyHtml = `
                    <div class="alb-sec-title">MEMORIES</div>
                    <div class="alb-grid">
                        ${SITE.albums.map(alb => {
                    const count = SITE.media.filter(m => m.album === alb.id).length;
                    const isVidCover = detectMediaType(alb.cover) === 'video';
                    return `
                                <div class="alb-card" data-album="${esc(alb.id)}">
                                    ${isVidCover
                            ? `<video src="${esc(alb.cover)}" muted loop playsinline preload="metadata"></video>`
                            : `<img src="${esc(alb.cover)}" alt="${esc(alb.title)}" loading="lazy">`
                        }
                                    <div class="alb-info">
                                        <b>${esc(alb.title)}</b>
                                        <small>${count} items</small>
                                    </div>
                                </div>
                            `;
                }).join('')}
                    </div>
                    ${pinnedItem ? `
                        <div class="alb-sec-title">PINNED</div>
                        <div class="pinned-wrap">
                            <div class="alb-card" id="pinnedCard">
                                ${pinnedIsVid
                            ? `<video src="${esc(pinnedCover)}" autoplay muted loop playsinline></video>`
                            : `<img src="${esc(pinnedCover)}" alt="Pinned" loading="lazy">`
                        }
                            </div>
                        </div>
                    ` : ''}
                `;
            }

            const uncompressedHtml = `<a href="${esc(SITE.links.uncompressed || '#')}" ${SITE.links.uncompressed ? 'target="_blank" rel="noopener"' : ''} class="photos-uncompressed-btn">Uncompressed ↗</a>`;

            return `
                <div class="photos-top">${headerHtml}${uncompressedHtml}</div>
                <div class="photos-scroll">${bodyHtml}</div>
                <div class="photos-tabs">
                    <button class="ptab ${photosTab === 'library' ? 'active' : ''}" data-tab="library">
                        <svg viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                            <circle cx="8.5" cy="9.5" r="1.5" />
                            <path d="M21 15l-5-5L5 20" />
                        </svg>
                        <span>Library</span>
                    </button>
                    <button class="ptab ${photosTab === 'albums' ? 'active' : ''}" data-tab="albums">
                        <svg viewBox="0 0 24 24">
                            <rect x="3" y="3" width="7" height="7" rx="1.5" />
                            <rect x="14" y="3" width="7" height="7" rx="1.5" />
                            <rect x="3" y="14" width="7" height="7" rx="1.5" />
                            <rect x="14" y="14" width="7" height="7" rx="1.5" />
                        </svg>
                        <span>Albums</span>
                    </button>
                </div>
            `;
        },
        bind: (w) => {
            const refresh = () => {
                w.querySelector('.body').innerHTML = APPS.photos.render();
                APPS.photos.bind(w);
            };

            if (viewerActive) {
                const list = getActiveMediaList();
                const item = list[viewerIndex];

                const strip = w.querySelector('#pviewStrip');
                const activeThumb = w.querySelector('.pview-thumb.active');
                if (strip && activeThumb) {
                    const offset = activeThumb.getBoundingClientRect().left - strip.getBoundingClientRect().left;
                    const targetScroll = strip.scrollLeft + offset - (strip.clientWidth / 2) + (activeThumb.clientWidth / 2);
                    strip.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
                }

                w.querySelector('#pviewDone').onclick = () => {
                    viewerActive = false;
                    refresh();
                };

                w.querySelector('#pviewPrev').onclick = () => {
                    viewerIndex = (viewerIndex - 1 + list.length) % list.length;
                    refresh();
                };

                w.querySelector('#pviewNext').onclick = () => {
                    viewerIndex = (viewerIndex + 1) % list.length;
                    refresh();
                };

                w.querySelectorAll('.pview-thumb').forEach(th => {
                    th.onclick = () => {
                        viewerIndex = Number(th.dataset.idx);
                        refresh();
                    };
                });

                const vid = w.querySelector('#pviewVid');
                const range = w.querySelector('#pviewRange');
                const curEl = w.querySelector('#pviewCur');
                const remEl = w.querySelector('#pviewRem');

                if (vid && range) {
                    vid.addEventListener('timeupdate', () => {
                        if (!vid.duration) return;
                        range.value = (vid.currentTime / vid.duration) * 100;
                        curEl.textContent = formatDuration(vid.currentTime);
                        remEl.textContent = '-' + formatDuration(Math.max(0, vid.duration - vid.currentTime));
                    });
                    range.addEventListener('input', () => {
                        if (vid.duration) {
                            vid.currentTime = (Number(range.value) / 100) * vid.duration;
                        }
                    });
                }

                const likeBtn = w.querySelector('#actLike');
                if (likeBtn && item) {
                    likeBtn.onclick = () => {
                        item.liked = !item.liked;
                        likeBtn.classList.toggle('liked', item.liked);
                    };
                }
                const shareBtn = w.querySelector('#actShare');
                if (shareBtn && item) {
                    shareBtn.onclick = () => {
                        navigator.clipboard?.writeText(item.src);
                    };
                }
                const trashBtn = w.querySelector('#actTrash');
                if (trashBtn) {
                    trashBtn.onclick = () => {
                        viewerActive = false;
                        refresh();
                    };
                }
                return;
            }

            w.querySelectorAll('.ptab').forEach(btn => {
                btn.onclick = () => {
                    photosTab = btn.dataset.tab;
                    activeAlbumId = null;
                    viewerActive = false;
                    refresh();
                };
            });

            const backBtn = w.querySelector('#backToAlbums');
            if (backBtn) {
                backBtn.onclick = () => {
                    activeAlbumId = null;
                    refresh();
                };
            }

            w.querySelectorAll('.alb-card[data-album]').forEach(card => {
                card.onclick = () => {
                    activeAlbumId = card.dataset.album;
                    viewerActive = false;
                    refresh();
                };
            });

            const pinnedCard = w.querySelector('#pinnedCard');
            if (pinnedCard) {
                pinnedCard.onclick = () => {
                    photosTab = 'library';
                    activeAlbumId = null;
                    viewerIndex = Math.max(0, SITE.media.findIndex(m => m.pinned));
                    viewerActive = true;
                    refresh();
                };
            }

            w.querySelectorAll('.lib-item').forEach(tile => {
                const idx = Number(tile.dataset.idx);
                tile.onclick = () => {
                    viewerIndex = idx;
                    viewerActive = true;
                    refresh();
                };

                const vid = tile.querySelector('video');
                if (vid) {
                    const autoDur = tile.querySelector('[data-auto-dur]');
                    if (autoDur) {
                        vid.addEventListener('loadedmetadata', () => {
                            autoDur.textContent = formatDuration(vid.duration);
                        });
                    }
                    tile.addEventListener('pointerenter', () => vid.play().catch(() => { }));
                    tile.addEventListener('pointerleave', () => { vid.pause(); vid.currentTime = 0; });
                }
            });
        }
    },

    contact: {
        title: 'Contact — Bookings',
        w: 420,
        render: () => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:9px;background:rgba(255,255,255,.07);margin-bottom:12px">
                <div>
                    <small style="color:rgba(255,255,255,.55);display:block;font-size:11px">For Bookings</small>
                    <b style="font-size:13.5px">${esc(SITE.email)}</b>
                </div>
                <button class="btn-pill" id="copyMailBtn">Copy</button>
            </div>
            <form id="mailForm" class="form-group">
                <input class="inp" id="mailSub" placeholder="Subject / Booking Inquiry" required>
                <textarea class="inp" id="mailBody" rows="4" placeholder="Write your message here..." required></textarea>
                <div style="display:flex;justify-content:flex-end;gap:8px">
                    <button type="submit" class="btn-pill active">Send Email ↗</button>
                </div>
            </form>
        `,
        bind: (w) => {
            const copyBtn = w.querySelector('#copyMailBtn');
            copyBtn.onclick = () => {
                navigator.clipboard?.writeText(SITE.email);
                copyBtn.textContent = 'Copied ✓';
                setTimeout(() => copyBtn.textContent = 'Copy', 2000);
            };
            w.querySelector('#mailForm').onsubmit = e => {
                e.preventDefault();
                const sub = encodeURIComponent(w.querySelector('#mailSub').value);
                const body = encodeURIComponent(w.querySelector('#mailBody').value);
                window.location.href = `mailto:${SITE.email}?subject=${sub}&body=${body}`;
            };
        }
    },

    admin: {
        title: 'Cloud Admin Panel',
        w: 720,
        render: () => {
            if (!adminSession) {
                return `
                    <form id="adminLoginForm" class="form-group" style="padding:10px 4px">
                        <h3 style="font-size:16px">Supabase Admin Sign In</h3>
                        <p style="font-size:12.5px;color:rgba(255,255,255,.65)">Sign in with your Supabase Admin Email & Password.</p>
                        <input type="email" class="inp" id="admEmailInp" placeholder="Admin Email" required>
                        <input type="password" class="inp" id="admPassInp" placeholder="Password" required>
                        <div id="admLoginErr" style="color:#ff453a;font-size:12px;display:none"></div>
                        <div style="display:flex;justify-content:flex-end;margin-top:6px">
                            <button type="submit" class="btn-pill active" id="admLoginBtn">Sign In</button>
                        </div>
                    </form>
                `;
            }

            let tabBody = '';
            if (adminTab === 'media') {
                tabBody = `
                    <div class="adm-sec">
                        <h4>Upload Photos or Videos to Cloud</h4>
                        <div class="adm-row">
                            <select class="inp" id="admAlbumSelect" style="flex:1">
                                ${SITE.albums.map(a => `<option value="${esc(a.id)}">${esc(a.title)}</option>`).join('')}
                            </select>
                            <label class="btn-pill active" style="cursor:pointer;white-space:nowrap">
                                + Select & Upload Files
                                <input type="file" id="admMediaFiles" accept="image/*,video/*" multiple style="display:none">
                            </label>
                        </div>
                        <div class="adm-row" style="font-size:12px;color:rgba(255,255,255,.8);margin-top:4px">
                            <label style="display:flex;align-items:center;gap:5px;cursor:pointer">
                                <input type="checkbox" id="admSetPinned"> Set as Pinned (PINNED)
                            </label>
                            <label style="display:flex;align-items:center;gap:5px;cursor:pointer;margin-left:12px">
                                <input type="checkbox" id="admSetCover"> Set as Album Cover
                            </label>
                        </div>
                        <div class="adm-status" id="admUploadStatus"></div>
                    </div>

                    <div class="adm-sec">
                        <h4>Create New Album</h4>
                        <div class="adm-row">
                            <input class="inp" id="admNewAlbTitle" placeholder="Album Name" style="flex:1">
                            <label class="btn-pill" style="cursor:pointer;white-space:nowrap">
                                Cover Image
                                <input type="file" id="admNewAlbCoverFile" accept="image/*,video/*" style="display:none">
                            </label>
                            <button type="button" class="btn-pill active" id="admCreateAlbBtn">Create</button>
                        </div>
                    </div>

                    <div class="adm-sec">
                        <h4>"Uncompressed" Link</h4>
                        <div class="adm-row">
                            <input class="inp" id="admMediaUncompUrl" value="${esc(SITE.links.uncompressed)}" placeholder="https://drive.google.com/..." style="flex:1">
                            <button type="button" class="btn-pill active" id="admSaveUncompBtn">Save Link</button>
                        </div>
                    </div>

                    <div class="adm-sec">
                        <h4>Cloud Media (${SITE.media.length} items)</h4>
                        <div class="adm-media-list">
                            ${SITE.media.map((m, idx) => `
                                <div class="adm-item">
                                    <div style="display:flex;align-items:center;gap:10px;min-width:0">
                                        ${m.type === 'video'
                        ? `<video src="${esc(m.src)}" muted playsinline preload="metadata"></video>`
                        : `<img src="${esc(m.src)}" alt="">`
                    }
                                        <div style="min-width:0">
                                            <b style="display:block;font-size:12px;color:#fff">${esc(m.album)} ${m.pinned ? '· 📌 Pinned' : ''}</b>
                                            <small style="color:rgba(255,255,255,.5);display:block">
                                                ${esc(m.type.toUpperCase())} ${m.duration ? '· ' + esc(m.duration) : ''}
                                            </small>
                                        </div>
                                    </div>
                                    <div style="display:flex;gap:6px;flex:none">
                                        <button class="btn-pill adm-pin-btn" data-idx="${idx}" title="Set as Pinned" style="padding:4px 8px;font-size:11px">📌</button>
                                        <button class="adm-del adm-del-media" data-idx="${idx}">Delete</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            } else if (adminTab === 'tracks') {
                tabBody = `
                    <div class="adm-sec">
                        <h4>Add 30s Track Preview</h4>
                        <div class="form-group">
                            <input class="inp" id="admTrkTitle" placeholder="Track Name (e.g. MERTMERIC — ID)">
                            <div class="adm-row">
                                <input class="inp" id="admTrkYt" placeholder="YouTube linki" style="flex:1">
                                <input class="inp" id="admTrkSp" placeholder="Spotify linki" style="flex:1">
                                <input class="inp" id="admTrkSc" placeholder="SoundCloud linki" style="flex:1">
                            </div>
                            <div class="adm-row">
                                <label class="btn-pill" style="cursor:pointer;flex:1;text-align:center">
                                    <span id="admCovBtnTxt">Select Cover Photo</span>
                                    <input type="file" id="admTrkCoverFile" accept="image/*" style="display:none">
                                </label>
                                <label class="btn-pill" style="cursor:pointer;flex:1;text-align:center">
                                    <span id="admAudBtnTxt">Select Audio (MP3/WAV)</span>
                                    <input type="file" id="admTrkAudioFile" accept="audio/*" style="display:none">
                                </label>
                                <button type="button" class="btn-pill active" id="admAddTrkBtn">Upload & Add</button>
                            </div>
                        </div>
                        <div class="adm-status" id="admTrkStatus"></div>
                    </div>
                    <div class="adm-sec">
                        <h4>Tracks (${SITE.tracks.length})</h4>
                        <div class="adm-track-list">
                            ${SITE.tracks.map((t, idx) => {
                    const tLinks = parseTrackLinks(t.link);
                    return `
                                <div class="adm-item" style="flex-wrap:wrap">
                                    <div style="display:flex;align-items:center;gap:10px;min-width:0;flex:1">
                                        <span style="font-size:11px;color:rgba(255,255,255,.5);width:16px">${idx + 1}</span>
                                        <img src="${esc(t.cover)}" alt="">
                                        <b style="font-size:12.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(t.title)}</b>
                                    </div>
                                    <div style="display:flex;gap:6px;flex:none">
                                        <button class="btn-pill adm-trk-up" data-idx="${idx}" ${idx === 0 ? 'disabled style="opacity:.35"' : ''}>↑</button>
                                        <button class="btn-pill adm-trk-down" data-idx="${idx}" ${idx === SITE.tracks.length - 1 ? 'disabled style="opacity:.35"' : ''}>↓</button>
                                        <button class="adm-del adm-del-trk" data-idx="${idx}">Delete</button>
                                    </div>
                                    <div class="adm-row" style="width:100%;margin:6px 0 0;flex-wrap:wrap">
                                        <input class="inp" data-trk-yt="${idx}" value="${esc(tLinks.youtube)}" placeholder="YouTube linki" style="flex:1;min-width:120px">
                                        <input class="inp" data-trk-sp="${idx}" value="${esc(tLinks.spotify)}" placeholder="Spotify linki" style="flex:1;min-width:120px">
                                        <input class="inp" data-trk-sc="${idx}" value="${esc(tLinks.soundcloud)}" placeholder="SoundCloud linki" style="flex:1;min-width:120px">
                                        <button class="btn-pill active adm-trk-savelink" data-idx="${idx}">Kaydet</button>
                                    </div>
                                </div>
                            `;
                }).join('')}
                        </div>
                    </div>
                `;
            } else if (adminTab === 'appearance') {
                const dockKeys = [
                    { k: 'instagram', label: 'Instagram' },
                    { k: 'soundcloud', label: 'SoundCloud' },
                    { k: 'spotify', label: 'Spotify' },
                    { k: 'youtube', label: 'YouTube' },
                    { k: 'photos', label: 'Photos' },
                    { k: 'contact', label: 'Contact' }
                ];
                tabBody = `
                    <div class="adm-scroll">
                        <div class="adm-sec">
                            <h4>1. Top Box Logo Image</h4>
                            <div class="adm-row">
                                <input class="inp" id="admLogoUrl" value="${esc(SITE.logoImage)}" placeholder="Logo Image URL (Leave empty for text logo)" style="flex:1">
                                <label class="btn-pill active" style="cursor:pointer">
                                    Upload Logo
                                    <input type="file" id="admLogoFile" accept="image/*" style="display:none">
                                </label>
                            </div>
                        </div>

                        <div class="adm-sec">
                            <h4>2. Lock Screen Photo</h4>
                            <div class="adm-row">
                                <input class="inp" id="admLockUrl" value="${esc(SITE.lockImage)}" style="flex:1">
                                <label class="btn-pill active" style="cursor:pointer">
                                    Upload Photo
                                    <input type="file" id="admLockFile" accept="image/*" style="display:none">
                                </label>
                            </div>
                        </div>

                        <div class="adm-sec">
                            <h4>3. Desktop Background Video / GIF</h4>
                            <div class="adm-row">
                                <input class="inp" id="admBgUrl" value="${esc(SITE.bgGif || SITE.bgVideo)}" style="flex:1">
                                <label class="btn-pill active" style="cursor:pointer">
                                    Upload Video/GIF
                                    <input type="file" id="admBgFile" accept="video/*,image/gif,image/*" style="display:none">
                                </label>
                            </div>
                        </div>

                        <div class="adm-sec">
                            <h4>4. Alt Bar (Dock) İkonları (Boş bırakılırsa varsayılan ikon kullanılır)</h4>
                            ${dockKeys.map(d => `
                                <div class="adm-row" style="margin-bottom:6px">
                                    <span style="width:82px;font-size:12px;color:rgba(255,255,255,.8)">${d.label}</span>
                                    <input class="inp" data-dock-inp="${d.k}" value="${esc(SITE.dockIcons[d.k] || '')}" placeholder="Varsayılan SVG İkon" style="flex:1">
                                    <label class="btn-pill active" style="cursor:pointer;white-space:nowrap">
                                        Yükle
                                        <input type="file" data-dock-file="${d.k}" accept="image/*" style="display:none">
                                    </label>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="adm-status" id="admWallStatus"></div>
                    <div style="display:flex;justify-content:flex-end;margin-top:8px">
                        <button type="button" class="btn-pill active" id="admSaveWallBtn">Save Settings</button>
                    </div>
                `;
            } else if (adminTab === 'texts') {
                tabBody = `
                    <div class="adm-scroll">
                        <div class="adm-sec">
                            <h4>1. Genel & Kilit Ekranı</h4>
                            <div class="form-group">
                                <label style="font-size:11.5px;color:rgba(255,255,255,.65)">Site Başlığı / Text Logo</label>
                                <input class="inp" id="admTxtName" value="${esc(SITE.name)}">
                                <div class="adm-row">
                                    <div style="flex:1">
                                        <label style="font-size:11.5px;color:rgba(255,255,255,.65);display:block;margin-bottom:4px">Sol Üst Bar Yazısı</label>
                                        <input class="inp" id="admTxtBrand" value="${esc(SITE.brand)}">
                                    </div>
                                    <div style="flex:1">
                                        <label style="font-size:11.5px;color:rgba(255,255,255,.65);display:block;margin-bottom:4px">Kilit Ekranı Alt Yazısı</label>
                                        <input class="inp" id="admTxtHint" value="${esc(SITE.unlockHint)}">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="adm-sec">
                            <h4>2. Ana Sayfa Yazıları</h4>
                            <div class="form-group">
                                <label style="font-size:11.5px;color:rgba(255,255,255,.65)">Kısa Biyografi — Türkçe (Her satır ayrı paragraf)</label>
                                <textarea class="inp" id="admTxtShortBioTr" rows="3">${esc(SITE.shortBio.tr.join('\n\n'))}</textarea>
                                <label style="font-size:11.5px;color:rgba(255,255,255,.65)">Kısa Biyografi — İngilizce (Her satır ayrı paragraf)</label>
                                <textarea class="inp" id="admTxtShortBioEn" rows="3">${esc(SITE.shortBio.en.join('\n\n'))}</textarea>
                                <div class="adm-row">
                                    <div style="flex:1">
                                        <label style="font-size:11.5px;color:rgba(255,255,255,.65);display:block;margin-bottom:4px">Tracks Kutusu Başlığı</label>
                                        <input class="inp" id="admTxtTrkTitle" value="${esc(SITE.tracksTitle)}">
                                    </div>
                                    <div style="flex:1">
                                        <label style="font-size:11.5px;color:rgba(255,255,255,.65);display:block;margin-bottom:4px">Uzun Biyografi Butonu (TR)</label>
                                        <input class="inp" id="admTxtBioBtn" value="${esc(SITE.longBioBtnText)}">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="adm-sec">
                            <h4>3. Uzun Biyografi Sayfası (bio.html)</h4>
                            <div class="form-group">
                                <label style="font-size:11.5px;color:rgba(255,255,255,.65)">Uzun Biyografi — Türkçe (Her satır ayrı paragraf)</label>
                                <textarea class="inp" id="admTxtLongBioTr" rows="6">${esc(SITE.longBio.tr.join('\n\n'))}</textarea>
                                <label style="font-size:11.5px;color:rgba(255,255,255,.65)">Uzun Biyografi — İngilizce (Her satır ayrı paragraf)</label>
                                <textarea class="inp" id="admTxtLongBioEn" rows="6">${esc(SITE.longBio.en.join('\n\n'))}</textarea>
                                <div class="adm-row">
                                    <div style="flex:1">
                                        <label style="font-size:11.5px;color:rgba(255,255,255,.65);display:block;margin-bottom:4px">Geri Dön Butonu (TR)</label>
                                        <input class="inp" id="admTxtBioBack" value="${esc(SITE.bioBackText)}">
                                    </div>
                                    <div style="flex:1">
                                        <label style="font-size:11.5px;color:rgba(255,255,255,.65);display:block;margin-bottom:4px">Sağ Üst Rozet</label>
                                        <input class="inp" id="admTxtBioBadge" value="${esc(SITE.bioBadgeText)}">
                                    </div>
                                    <div style="flex:1">
                                        <label style="font-size:11.5px;color:rgba(255,255,255,.65);display:block;margin-bottom:4px">Alt Başlık (Bookings)</label>
                                        <input class="inp" id="admTxtBioFoot" value="${esc(SITE.bioFooterLabel)}">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="adm-sec">
                            <h4>4. İletişim & Sosyal Medya Linkleri</h4>
                            <div class="form-group">
                                <label style="font-size:11.5px;color:rgba(255,255,255,.65)">Booking E-posta Adresi</label>
                                <input class="inp" id="admTxtEmail" value="${esc(SITE.email)}">
                                <label style="font-size:11.5px;color:rgba(255,255,255,.65)">Instagram URL</label>
                                <input class="inp" id="admTxtIg" value="${esc(SITE.links.instagram)}">
                                <label style="font-size:11.5px;color:rgba(255,255,255,.65)">SoundCloud URL</label>
                                <input class="inp" id="admTxtSc" value="${esc(SITE.links.soundcloud)}">
                                <label style="font-size:11.5px;color:rgba(255,255,255,.65)">Spotify URL</label>
                                <input class="inp" id="admTxtSp" value="${esc(SITE.links.spotify)}">
                                <label style="font-size:11.5px;color:rgba(255,255,255,.65)">YouTube URL</label>
                                <input class="inp" id="admTxtYt" value="${esc(SITE.links.youtube)}">
                                <label style="font-size:11.5px;color:rgba(255,255,255,.65)">Photos "Uncompressed" Link URL</label>
                                <input class="inp" id="admTxtUncomp" value="${esc(SITE.links.uncompressed)}" placeholder="https://drive.google.com/...">
                            </div>
                        </div>
                    </div>

                    <div class="adm-status" id="admTxtStatus"></div>
                    <div style="display:flex;justify-content:flex-end;margin-top:8px">
                        <button type="button" class="btn-pill active" id="admSaveTxtBtn">Save All Texts & Links</button>
                    </div>
                `;
            } else if (adminTab === 'edu') {
                const ec = SITE.eduConfig || {};
                const qs = Array.isArray(ec.questions) ? ec.questions : [];
                const subs = Array.isArray(SITE.eduSubmissions) ? SITE.eduSubmissions : [];
                tabBody = `
                    <div class="adm-scroll">
                        <div class="adm-sec">
                            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
                                <h4 style="margin:0">1. Gelen Eğitim Başvuruları (${subs.length})</h4>
                                <button type="button" class="btn-pill" id="admRefreshSubsBtn" style="padding:4px 10px;font-size:11px">↻ Yenile</button>
                            </div>
                            ${SITE.eduTableMissing ? `
                                <div style="padding:10px;border-radius:10px;background:rgba(255,149,0,.14);border:1px solid rgba(255,149,0,.45);font-size:11.5px;line-height:1.5;margin-bottom:8px">
                                    <b style="color:#ffcc00;display:block;margin-bottom:4px">⚠️ Başvuru Tablosu Kurulumu Gerekiyor (10 Saniye)</b>
                                    Başvuruların kaydedilmesi için Supabase Dashboard → <b>SQL Editor</b> ekranına aşağıdaki kodu yapıştırıp <b>Run</b> butonuna basın:
                                    <div style="margin-top:6px;display:flex;gap:6px">
                                        <button type="button" class="btn-pill active" id="admCopySqlBtn" style="font-size:11px;padding:4px 10px">SQL Kodunu Kopyala</button>
                                    </div>
                                </div>
                            ` : ''}
                            <div class="adm-sub-list">
                                ${subs.length === 0 ? `<div style="font-size:12px;color:rgba(255,255,255,.5);padding:8px 0">Henüz başvuru gelmedi.</div>` : subs.map((sub, sIdx) => {
                    const dt = sub.created_at ? new Date(sub.created_at).toLocaleString('tr-TR') : '';
                    const ansList = Array.isArray(sub.answers) ? sub.answers : [];
                    return `
                                        <div class="adm-sub-card ${!sub.is_read ? 'unread' : ''}">
                                            <div class="adm-sub-top">
                                                <div style="font-size:11.5px;color:rgba(255,255,255,.75)">
                                                    📅 ${esc(dt)}
                                                    ${!sub.is_read ? `<span class="adm-badge-new">YENİ</span>` : ''}
                                                </div>
                                                <div style="display:flex;gap:6px">
                                                    ${!sub.is_read ? `<button type="button" class="btn-pill adm-sub-read" data-idx="${sIdx}" style="padding:3px 8px;font-size:10.5px">Okundu ✓</button>` : ''}
                                                    <button type="button" class="adm-del adm-sub-del" data-idx="${sIdx}" style="padding:3px 8px;font-size:10.5px">Sil</button>
                                                </div>
                                            </div>
                                            <div class="adm-sub-ans">
                                                ${ansList.map(a => `<div><b>${esc(a.question || '')}:</b> <span>${esc(a.answer || '—')}</span></div>`).join('')}
                                            </div>
                                        </div>
                                    `;
                }).join('')}
                            </div>
                        </div>

                        <div class="adm-sec">
                            <h4>2. Eğitim Butonu & Başvuru Durumu Ayarları</h4>

                            <div style="padding:14px 16px;border-radius:14px;background:${ec.applications_open !== false ? 'rgba(48,209,88,.08)' : 'rgba(255,69,58,.08)'};border:1px solid ${ec.applications_open !== false ? 'rgba(48,209,88,.35)' : 'rgba(255,69,58,.35)'};margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;transition:all .2s ease">
                                <div>
                                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                                        <b style="font-size:13px;color:#fff">Başvuru Formu Durumu:</b>
                                        <span id="admFormStatusPill" class="adm-badge-pill ${ec.applications_open !== false ? 'open' : 'closed'}">
                                            ${ec.applications_open !== false ? '● BAŞVURULAR AÇIK' : '○ BAŞVURULAR KAPALI'}
                                        </span>
                                    </div>
                                    <span style="font-size:11.5px;color:rgba(255,255,255,.72)">
                                        ${ec.applications_open !== false ? 'Eğitim sayfasındaki başvuru formu şu an AÇIK' : 'Eğitim sayfasındaki başvuru formu şu an KAPALI'}
                                    </span>
                                </div>
                                <button type="button" class="btn-pill ${ec.applications_open !== false ? '' : 'active'}" id="admToggleFormStatusBtn" style="padding:8px 16px;font-size:12px;font-weight:700;cursor:pointer">
                                    ${ec.applications_open !== false ? '⛔ Başvuruları Kapat' : '✅ Başvuruları Tekrar Aç'}
                                </button>
                            </div>

                            <div style="padding:14px 16px;border-radius:14px;background:${ec.portal_open !== false ? 'rgba(10,132,255,.08)' : 'rgba(255,69,58,.08)'};border:1px solid ${ec.portal_open !== false ? 'rgba(10,132,255,.35)' : 'rgba(255,69,58,.35)'};margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;transition:all .2s ease">
                                <div>
                                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                                        <b style="font-size:13px;color:#fff">Eğitim Arşivi (Drive) Kartı:</b>
                                        <span class="adm-badge-pill ${ec.portal_open !== false ? 'open' : 'closed'}">
                                            ${ec.portal_open !== false ? '● ARŞİV GİRİŞİ AÇIK' : '○ ARŞİV GİRİŞİ GİZLİ'}
                                        </span>
                                    </div>
                                    <span style="font-size:11.5px;color:rgba(255,255,255,.72)">
                                        ${ec.portal_open !== false ? 'Kayıtlı öğrenciler için Drive Arşivi kutusu şu an GÖRÜNÜR' : 'Kayıtlı öğrenciler için Drive Arşivi kutusu şu an GİZLİ'}
                                    </span>
                                </div>
                                <button type="button" class="btn-pill adm-toggle-portal-btn ${ec.portal_open !== false ? '' : 'active'}" style="padding:8px 16px;font-size:12px;font-weight:700;cursor:pointer">
                                    ${ec.portal_open !== false ? '⛔ Arşiv Kısmını Kapat' : '✅ Arşiv Kısmını Aç'}
                                </button>
                            </div>

                            <div class="form-group">
                                <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#fff;cursor:pointer;margin-bottom:8px">
                                    <input type="checkbox" id="admEduEnabled" ${ec.enabled !== false ? 'checked' : ''}>
                                    Ana Sayfada Eğitim Başvuru Butonunu Göster
                                </label>
                                <div class="adm-row">
                                    <div style="flex:1">
                                        <label style="font-size:11px;color:rgba(255,255,255,.65);display:block;margin-bottom:3px">Başvurular Kapalı Açıklaması (TR)</label>
                                        <input class="inp" id="admEduClosedMsgTr" value="${esc(ec.closed_msg_tr || 'Bu dönem için eğitim başvurularımız tamamlanmıştır. Yeni dönem duyuruları için takipte kalın veya doğrudan iletişime geçin.')}">
                                    </div>
                                    <div style="flex:1">
                                        <label style="font-size:11px;color:rgba(255,255,255,.65);display:block;margin-bottom:3px">Başvurular Kapalı Açıklaması (EN)</label>
                                        <input class="inp" id="admEduClosedMsgEn" value="${esc(ec.closed_msg_en || 'Applications for this term are now closed. Follow for updates or contact us directly.')}">
                                    </div>
                                </div>
                                <div class="adm-row">
                                    <div style="flex:1">
                                        <label style="font-size:11px;color:rgba(255,255,255,.65);display:block;margin-bottom:3px">Ana Sayfa Buton Yazısı (TR)</label>
                                        <input class="inp" id="admEduBtnTr" value="${esc(ec.btn_tr || 'DJ Eğitimi ↗')}">
                                    </div>
                                    <div style="flex:1">
                                        <label style="font-size:11px;color:rgba(255,255,255,.65);display:block;margin-bottom:3px">Ana Sayfa Buton Yazısı (EN)</label>
                                        <input class="inp" id="admEduBtnEn" value="${esc(ec.btn_en || 'DJ Academy ↗')}">
                                    </div>
                                </div>
                                <div class="adm-row">
                                    <div style="flex:1">
                                        <label style="font-size:11px;color:rgba(255,255,255,.65);display:block;margin-bottom:3px">Sağ Üst Rozet Yazısı (TR)</label>
                                        <input class="inp" id="admEduBadgeTr" value="${esc(ec.badge_tr || 'Prodüksiyon Akademisi')}">
                                    </div>
                                    <div style="flex:1">
                                        <label style="font-size:11px;color:rgba(255,255,255,.65);display:block;margin-bottom:3px">Sağ Üst Rozet Yazısı (EN)</label>
                                        <input class="inp" id="admEduBadgeEn" value="${esc(ec.badge_en || 'Production Academy')}">
                                    </div>
                                </div>
                                <div style="display:none"><div>
                                    </div>
                                </div>
                                <div class="adm-row">
                                    <div style="flex:1">
                                        <label style="font-size:11px;color:rgba(255,255,255,.65);display:block;margin-bottom:3px">Form Başlığı (TR)</label>
                                        <input class="inp" id="admEduTitleTr" value="${esc(ec.title_tr || '')}">
                                    </div>
                                    <div style="flex:1">
                                        <label style="font-size:11px;color:rgba(255,255,255,.65);display:block;margin-bottom:3px">Form Başlığı (EN)</label>
                                        <input class="inp" id="admEduTitleEn" value="${esc(ec.title_en || '')}">
                                    </div>
                                </div>
                                <label style="font-size:11px;color:rgba(255,255,255,.65)">Form Açıklaması (TR)</label>
                                <textarea class="inp" id="admEduDescTr" rows="2">${esc(ec.desc_tr || '')}</textarea>
                                <label style="font-size:11px;color:rgba(255,255,255,.65)">Form Açıklaması (EN)</label>
                                <textarea class="inp" id="admEduDescEn" rows="2">${esc(ec.desc_en || '')}</textarea>
                            </div>
                        </div>

                        <div class="adm-sec">
                            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
                                <h4 style="margin:0">3. Form Soruları (${qs.length})</h4>
                                <button type="button" class="btn-pill active" id="admAddEduQBtn" style="padding:5px 12px;font-size:11.5px">+ Yeni Soru Ekle</button>
                            </div>
                            <div id="admEduQuestionsWrap">
                                ${qs.map((q, qIdx) => `
                                    <div class="adm-q-card" data-qidx="${qIdx}">
                                        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                            <b style="font-size:12px;color:#60a5fa">Soru #${qIdx + 1}</b>
                                            <div style="display:flex;align-items:center;gap:6px">
                                                <label style="font-size:11px;color:rgba(255,255,255,.8);display:flex;align-items:center;gap:4px;cursor:pointer;margin-right:4px">
                                                    <input type="checkbox" data-q-req="${qIdx}" ${q.required ? 'checked' : ''}> Zorunlu
                                                </label>
                                                <button type="button" class="btn-pill adm-q-up" data-qidx="${qIdx}" style="padding:3px 7px;font-size:11px" ${qIdx === 0 ? 'disabled style="opacity:.35;padding:3px 7px;font-size:11px"' : ''}>↑</button>
                                                <button type="button" class="btn-pill adm-q-down" data-qidx="${qIdx}" style="padding:3px 7px;font-size:11px" ${qIdx === qs.length - 1 ? 'disabled style="opacity:.35;padding:3px 7px;font-size:11px"' : ''}>↓</button>
                                                <button type="button" class="adm-del adm-q-del" data-qidx="${qIdx}" style="padding:3px 8px;font-size:11px">Sil</button>
                                            </div>
                                        </div>
                                        <div class="adm-row">
                                            <input class="inp" data-q-lbl-tr="${qIdx}" value="${esc(q.label_tr || '')}" placeholder="Soru Başlığı (TR)" style="flex:1">
                                            <input class="inp" data-q-lbl-en="${qIdx}" value="${esc(q.label_en || '')}" placeholder="Question Label (EN)" style="flex:1">
                                        </div>
                                        <div class="adm-row">
                                            <select class="inp" data-q-type="${qIdx}" style="flex:1">
                                                <option value="text" ${q.type === 'text' ? 'selected' : ''}>Kısa Yazı (Metin)</option>
                                                <option value="tel" ${q.type === 'tel' ? 'selected' : ''}>Telefon / WhatsApp</option>
                                                <option value="email" ${q.type === 'email' ? 'selected' : ''}>E-posta</option>
                                                <option value="select" ${q.type === 'select' ? 'selected' : ''}>Çoktan Seçmeli (Seçenekli)</option>
                                                <option value="textarea" ${q.type === 'textarea' ? 'selected' : ''}>Uzun Yazı (Paragraf)</option>
                                            </select>
                                            <input class="inp" data-q-ph-tr="${qIdx}" value="${esc(q.placeholder_tr || '')}" placeholder="İpucu yazısı TR (isteğe bağlı)" style="flex:1">
                                            <input class="inp" data-q-ph-en="${qIdx}" value="${esc(q.placeholder_en || '')}" placeholder="Placeholder EN" style="flex:1">
                                        </div>
                                        <div class="adm-row" data-q-opt-row="${qIdx}" style="display:${q.type === 'select' ? 'flex' : 'none'}">
                                            <input class="inp" data-q-opt-tr="${qIdx}" value="${esc(q.options_tr || '')}" placeholder="Seçenekler TR (Virgülle ayırın: Başlangıç, Orta, İleri)" style="flex:1">
                                            <input class="inp" data-q-opt-en="${qIdx}" value="${esc(q.options_en || '')}" placeholder="Options EN (Comma separated)" style="flex:1">
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="adm-sec">
                            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
                                <h4 style="margin:0">4. Google Drive & Yetkili Öğrenci Erişimi (${(SITE.eduAccess || []).length})</h4>
                                <button type="button" class="btn-pill" id="admRefreshAccessBtn" style="padding:4px 10px;font-size:11px">↻ Yenile</button>
                            </div>

                            ${SITE.eduAccessTableMissing ? `
                                <div style="padding:10px;border-radius:10px;background:rgba(255,149,0,.14);border:1px solid rgba(255,149,0,.45);font-size:11.5px;line-height:1.5;margin-bottom:12px">
                                    <b style="color:#ffcc00;display:block;margin-bottom:4px">⚠️ Öğrenci Erişim Tablosu & Güvenlik Fonksiyonu Kurulumu (10 Saniye)</b>
                                    Öğrencilerin e-posta doğrulaması ve güvenli Drive erişimi için Supabase Dashboard → <b>SQL Editor</b> ekranına aşağıdaki kodu yapıştırıp <b>Run</b> butonuna basın:
                                    <div style="margin-top:6px;display:flex;gap:6px">
                                        <button type="button" class="btn-pill active" id="admCopyAccessSqlBtn" style="font-size:11px;padding:4px 10px">SQL Kodunu Kopyala</button>
                                    </div>
                                </div>
                            ` : ''}

                            <div style="padding:12px 14px;border-radius:12px;background:${ec.portal_open !== false ? 'rgba(10,132,255,.08)' : 'rgba(255,69,58,.08)'};border:1px solid ${ec.portal_open !== false ? 'rgba(10,132,255,.35)' : 'rgba(255,69,58,.35)'};margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
                                <div style="font-size:12px;color:#fff">
                                    <b>Eğitim Arşivi (Drive) Kartı:</b>
                                    <span class="adm-badge-pill ${ec.portal_open !== false ? 'open' : 'closed'}" style="margin-left:6px">
                                        ${ec.portal_open !== false ? '● AÇIK' : '○ KAPALI'}
                                    </span>
                                </div>
                                <button type="button" class="btn-pill adm-toggle-portal-btn ${ec.portal_open !== false ? '' : 'active'}" style="padding:6px 14px;font-size:11.5px;font-weight:700;cursor:pointer">
                                    ${ec.portal_open !== false ? '⛔ Arşiv Kısmını Kapat' : '✅ Arşiv Kısmını Aç'}
                                </button>
                            </div>

                            <div class="form-group" style="margin-bottom:14px">
                                <label style="font-size:11.5px;color:rgba(255,255,255,.75);display:block;margin-bottom:4px">1. Google Drive Klasör Linki (Sadece yetkili öğrencilere açılır)</label>
                                <input class="inp" id="admEduDriveUrlInp" value="${esc(SITE.eduDriveUrl || ec.drive_url || '')}" placeholder="https://drive.google.com/drive/folders/..." style="width:100%;margin-bottom:10px">

                                <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:4px;flex-wrap:wrap">
                                    <label style="font-size:11.5px;color:rgba(255,255,255,.75)">2. Google Apps Script Web App Linki (Drive İzinlerini Otomatik Çekmek İçin)</label>
                                    <button type="button" class="btn-pill" id="admToggleAppsScriptBoxBtn" style="padding:3px 10px;font-size:11px">📋 Kurulum Kodu & Rehberi</button>
                                </div>
                                <input class="inp" id="admEduAppsScriptInp" value="${esc(ec.apps_script_url || '')}" placeholder="https://script.google.com/macros/s/.../exec" style="width:100%;margin-bottom:10px">

                                <div id="admAppsScriptGuideBox" style="display:none;padding:12px;border-radius:12px;background:rgba(10,132,255,.12);border:1px solid rgba(10,132,255,.4);font-size:11.5px;line-height:1.55;margin-bottom:10px">
                                    <b style="color:#60a5fa;display:block;margin-bottom:6px">⚡ 1 Dakikada Otomatik Google Drive Bağlantısı (Sadece 1 Kere Yapılır)</b>
                                    <ol style="margin:0 0 8px 16px;padding:0;color:rgba(255,255,255,.85)">
                                        <li>Drive klasörünün sahibi olan Google hesabıyla <a href="https://script.google.com" target="_blank" rel="noopener" style="color:#60a5fa;text-decoration:underline">script.google.com</a> adresine girip <b>Yeni Proje</b> oluşturun.</li>
                                        <li>Editördeki mevcut kodu silip aşağıdaki <b>"Apps Script Kodunu Kopyala"</b> butonuyla aldığınız kodu yapıştırın ve kaydedin (Ctrl+S).</li>
                                        <li>Sağ üstten <b>Dağıt (Deploy) → Yeni dağıtım</b> seçin. Sol üstteki çark ikonundan <b>Web uygulaması</b> seçin.</li>
                                        <li><b>Şunun adına yürüt:</b> <i>Ben (Me)</i> — <b>Erişimi olanlar:</b> <i>Herkes (Anyone)</i> seçip <b>Dağıt</b> butonuna basın ve izin verin.</li>
                                        <li>Size verdiği <code>https://script.google.com/macros/s/.../exec</code> linkini yukarıdaki 2. kutuya yapıştırıp <b>Kaydet & Drive'dan Kişileri Çek</b> butonuna basın.</li>
                                    </ol>
                                    <button type="button" class="btn-pill active" id="admCopyAppsScriptCodeBtn" style="padding:5px 12px;font-size:11px">📋 Apps Script Kodunu Kopyala</button>
                                </div>

                                <div style="display:flex;gap:8px;flex-wrap:wrap">
                                    <button type="button" class="btn-pill active" id="admSaveDriveUrlBtn" style="padding:7px 14px;font-size:11.5px;font-weight:600">💾 Linkleri Kaydet & Drive'dan Kişileri Çek</button>
                                    <button type="button" class="btn-pill" id="admSyncDriveEmailsBtn" style="padding:7px 14px;font-size:11.5px">🔄 Şimdi Drive'dan Eşitle</button>
                                </div>
                                <div id="admDriveSyncMsg" style="display:none;font-size:11.5px;margin-top:8px;padding:8px 10px;border-radius:8px"></div>
                            </div>

                            <div style="padding:12px;border-radius:12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);margin-bottom:12px">
                                <b style="font-size:12px;color:#fff;display:block;margin-bottom:8px">+ Yetkili Öğrenci E-postası Ekle</b>
                                <div class="adm-row">
                                    <input class="inp" id="admNewStudentEmail" type="email" placeholder="ogrenci@gmail.com" style="flex:1">
                                    <input class="inp" id="admNewStudentNote" placeholder="Öğrenci Adı / Not (İsteğe bağlı)" style="flex:1">
                                    <button type="button" class="btn-pill active" id="admAddStudentBtn" style="white-space:nowrap;padding:0 14px;font-size:11.5px">Ekle</button>
                                </div>
                                <div id="admStudentAddErr" style="display:none;color:#ff453a;font-size:11px;margin-top:6px"></div>
                            </div>

                            <div class="adm-sub-list">
                                ${(SITE.eduAccess || []).length === 0 ? `
                                    <div style="font-size:12px;color:rgba(255,255,255,.5);padding:6px 0">Henüz yetkili öğrenci eklenmedi. Yukarıdan e-posta ekleyebilirsiniz.</div>
                                ` : (SITE.eduAccess || []).map((st, stIdx) => {
                    const dt = st.created_at ? new Date(st.created_at).toLocaleDateString('tr-TR') : '';
                    return `
                                        <div class="adm-sub-card" style="padding:8px 12px;display:flex;align-items:center;justify-content:space-between;gap:10px">
                                            <div style="display:flex;flex-direction:column;gap:2px;overflow:hidden">
                                                <div style="font-size:12.5px;color:#fff;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
                                                    ✉️ ${esc(st.email)}
                                                </div>
                                                <div style="font-size:11px;color:rgba(255,255,255,.6)">
                                                    ${st.note ? `${esc(st.note)} • ` : ''}Kayıt: ${esc(dt)}
                                                </div>
                                            </div>
                                            <button type="button" class="adm-del adm-student-del" data-id="${esc(st.id)}" data-idx="${stIdx}" style="padding:4px 8px;font-size:11px;flex-shrink:0">Sil</button>
                                        </div>
                                    `;
                }).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="adm-status" id="admEduStatus"></div>
                    <div style="display:flex;justify-content:flex-end;margin-top:8px">
                        <button type="button" class="btn-pill active" id="admSaveEduBtn">Form Ayarlarını & Soruları Kaydet</button>
                    </div>
                `;
            }

            const unreadSubs = (SITE.eduSubmissions || []).filter(x => !x.is_read).length;
            return `
                <div class="adm-tabs" style="justify-content:space-between">
                    <div style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn-pill ${adminTab === 'media' ? 'active' : ''}" data-atab="media">Photos & Albums</button>
                        <button class="btn-pill ${adminTab === 'tracks' ? 'active' : ''}" data-atab="tracks">Tracks (30s)</button>
                        <button class="btn-pill ${adminTab === 'appearance' ? 'active' : ''}" data-atab="appearance">Logo & Wallpapers</button>
                        <button class="btn-pill ${adminTab === 'texts' ? 'active' : ''}" data-atab="texts">Texts & Links</button>
                        <button class="btn-pill ${adminTab === 'edu' ? 'active' : ''}" data-atab="edu">Eğitim & Başvurular${unreadSubs ? ` (${unreadSubs})` : ''}</button>
                    </div>
                    <button class="adm-del" id="admLogoutBtn">Sign Out</button>
                </div>
                ${tabBody}
            `;
        },
        bind: (w) => {
            const refresh = () => {
                const sc = w.querySelector('.adm-scroll');
                const prevScroll = sc ? sc.scrollTop : 0;
                w.querySelector('.body').innerHTML = APPS.admin.render();
                APPS.admin.bind(w);
                const scNew = w.querySelector('.adm-scroll');
                if (scNew && prevScroll) scNew.scrollTop = prevScroll;
            };

            if (!adminSession) {
                const form = w.querySelector('#adminLoginForm');
                form.onsubmit = async e => {
                    e.preventDefault();
                    const email = w.querySelector('#admEmailInp').value.trim();
                    const password = w.querySelector('#admPassInp').value;
                    const errEl = w.querySelector('#admLoginErr');
                    const btn = w.querySelector('#admLoginBtn');
                    btn.textContent = 'Signing in...';
                    errEl.style.display = 'none';

                    const { data, error } = await sb.auth.signInWithPassword({ email, password });
                    if (error) {
                        errEl.textContent = error.message;
                        errEl.style.display = 'block';
                        btn.textContent = 'Sign In';
                    } else {
                        adminSession = data.session;
                        await syncFromSupabase();
                    }
                };
                return;
            }

            w.querySelector('#admLogoutBtn').onclick = async () => {
                await sb.auth.signOut();
                adminSession = null;
                refresh();
            };

            w.querySelectorAll('[data-atab]').forEach(btn => {
                btn.onclick = () => {
                    adminTab = btn.dataset.atab;
                    refresh();
                };
            });

            if (adminTab === 'media') {
                const ensureAlbumsInCloud = async () => {
                    for (const a of SITE.albums) {
                        await sb.from('albums').upsert({ id: a.id, title: a.title, cover: a.cover }, { onConflict: 'id' });
                    }
                };

                const fileInp = w.querySelector('#admMediaFiles');
                fileInp.onchange = async e => {
                    const files = Array.from(e.target.files);
                    if (!files.length) return;
                    const albumId = w.querySelector('#admAlbumSelect').value;
                    const setPin = w.querySelector('#admSetPinned').checked;
                    const setCov = w.querySelector('#admSetCover').checked;
                    const statusEl = w.querySelector('#admUploadStatus');

                    statusEl.textContent = `Uploading ${files.length} file(s)...`;
                    statusEl.classList.add('on');

                    try {
                        await ensureAlbumsInCloud();
                        for (let i = 0; i < files.length; i++) {
                            const f = files[i];
                            statusEl.textContent = `Uploading (${i + 1}/${files.length}): ${f.name}...`;
                            const mType = detectMediaType(f.name, f.type);
                            const dur = await getVideoFileDuration(f);
                            const { publicUrl, storagePath } = await uploadFileToSupabase(f, 'gallery');

                            if (setPin && i === 0) {
                                await sb.from('media_items').update({ pinned: false }).eq('pinned', true);
                            }

                            await sb.from('media_items').insert([{
                                src: publicUrl,
                                storage_path: storagePath,
                                type: mType,
                                album: albumId,
                                duration: dur,
                                pinned: setPin && i === 0
                            }]);

                            if (setCov && i === 0) {
                                await sb.from('albums').update({ cover: publicUrl }).eq('id', albumId);
                            }
                        }
                        await syncFromSupabase();
                    } catch (err) {
                        statusEl.textContent = 'Upload error: ' + err.message;
                    }
                };

                let newAlbCoverFile = null;
                w.querySelector('#admNewAlbCoverFile').onchange = e => {
                    newAlbCoverFile = e.target.files[0] || null;
                };
                w.querySelector('#admCreateAlbBtn').onclick = async () => {
                    const title = w.querySelector('#admNewAlbTitle').value.trim();
                    if (!title) return;
                    let coverUrl = SITE.albums[0]?.cover || '';
                    if (newAlbCoverFile) {
                        const up = await uploadFileToSupabase(newAlbCoverFile, 'covers');
                        coverUrl = up.publicUrl;
                    }
                    await sb.from('albums').upsert({ id: title, title, cover: coverUrl }, { onConflict: 'id' });
                    await syncFromSupabase();
                };

                w.querySelector('#admSaveUncompBtn').onclick = async () => {
                    const val = w.querySelector('#admMediaUncompUrl').value.trim();
                    SITE.links.uncompressed = val;
                    const btn = w.querySelector('#admSaveUncompBtn');
                    btn.textContent = 'Saving...';
                    await sb.from('site_settings').upsert({
                        id: 1,
                        dock_icons: buildDockIconsPayload()
                    }, { onConflict: 'id' });
                    await syncFromSupabase();
                    const b = w.querySelector('#admSaveUncompBtn');
                    if (b) b.textContent = 'Saved ✓';
                };

                w.querySelectorAll('.adm-pin-btn').forEach(btn => {
                    btn.onclick = async () => {
                        const item = SITE.media[Number(btn.dataset.idx)];
                        if (!item) return;
                        await sb.from('media_items').update({ pinned: false }).neq('id', item.id);
                        await sb.from('media_items').update({ pinned: true }).eq('id', item.id);
                        await syncFromSupabase();
                    };
                });

                w.querySelectorAll('.adm-del-media').forEach(btn => {
                    btn.onclick = async () => {
                        const item = SITE.media[Number(btn.dataset.idx)];
                        if (!item) return;
                        if (item.storage_path) {
                            await sb.storage.from(SUPABASE_CONFIG.bucket).remove([item.storage_path]);
                        }
                        await sb.from('media_items').delete().eq('id', item.id);
                        SITE.media.splice(Number(btn.dataset.idx), 1);
                        await syncFromSupabase();
                    };
                });

            } else if (adminTab === 'tracks') {
                let covFile = null;
                let audFile = null;
                w.querySelector('#admTrkCoverFile').onchange = e => {
                    covFile = e.target.files[0] || null;
                    w.querySelector('#admCovBtnTxt').textContent = covFile ? `✓ ${covFile.name}` : 'Select Cover Photo';
                };
                w.querySelector('#admTrkAudioFile').onchange = e => {
                    audFile = e.target.files[0] || null;
                    w.querySelector('#admAudBtnTxt').textContent = audFile ? `✓ ${audFile.name}` : 'Select Audio (MP3/WAV)';
                };

                w.querySelector('#admAddTrkBtn').onclick = async () => {
                    const title = w.querySelector('#admTrkTitle').value.trim();
                    const statusEl = w.querySelector('#admTrkStatus');
                    if (!title || !audFile || !covFile) {
                        statusEl.textContent = 'Please enter a track name, cover photo, and audio file.';
                        statusEl.classList.add('on');
                        return;
                    }
                    statusEl.textContent = 'Uploading cover & audio...';
                    statusEl.classList.add('on');
                    try {
                        const upCov = await uploadFileToSupabase(covFile, 'tracks');
                        const upAud = await uploadFileToSupabase(audFile, 'tracks');
                        const nextOrder = SITE.tracks.reduce((m, t) => Math.max(m, t.sort_order ?? 0), -1) + 1;
                        const { error } = await sb.from('tracks').insert([{
                            title,
                            link: serializeTrackLinks({
                                youtube: w.querySelector('#admTrkYt')?.value,
                                spotify: w.querySelector('#admTrkSp')?.value,
                                soundcloud: w.querySelector('#admTrkSc')?.value
                            }),
                            sort_order: nextOrder,
                            cover: upCov.publicUrl,
                            cover_path: upCov.storagePath,
                            audio: upAud.publicUrl,
                            audio_path: upAud.storagePath
                        }]);
                        if (error) throw error;
                        await syncFromSupabase();
                    } catch (err) {
                        statusEl.textContent = 'Error: ' + err.message;
                    }
                };

                const trkStatus = w.querySelector('#admTrkStatus');
                const saveOrder = async () => {
                    trkStatus.textContent = 'Sıralama kaydediliyor...';
                    trkStatus.classList.add('on');
                    const results = await Promise.all(
                        SITE.tracks.map((t, i) => sb.from('tracks').update({ sort_order: i }).eq('id', t.id))
                    );
                    const failed = results.find(r => r.error);
                    if (failed) {
                        trkStatus.textContent = 'Hata: ' + failed.error.message;
                        return;
                    }
                    await syncFromSupabase();
                };

                w.querySelectorAll('.adm-trk-up').forEach(btn => {
                    btn.onclick = async () => {
                        const i = Number(btn.dataset.idx);
                        if (i <= 0) return;
                        [SITE.tracks[i - 1], SITE.tracks[i]] = [SITE.tracks[i], SITE.tracks[i - 1]];
                        await saveOrder();
                    };
                });

                w.querySelectorAll('.adm-trk-down').forEach(btn => {
                    btn.onclick = async () => {
                        const i = Number(btn.dataset.idx);
                        if (i >= SITE.tracks.length - 1) return;
                        [SITE.tracks[i + 1], SITE.tracks[i]] = [SITE.tracks[i], SITE.tracks[i + 1]];
                        await saveOrder();
                    };
                });

                w.querySelectorAll('.adm-trk-savelink').forEach(btn => {
                    btn.onclick = async () => {
                        const idx = Number(btn.dataset.idx);
                        const trk = SITE.tracks[idx];
                        if (!trk) return;
                        const serialized = serializeTrackLinks({
                            youtube: w.querySelector(`[data-trk-yt="${idx}"]`)?.value,
                            spotify: w.querySelector(`[data-trk-sp="${idx}"]`)?.value,
                            soundcloud: w.querySelector(`[data-trk-sc="${idx}"]`)?.value
                        });
                        btn.textContent = '...';
                        const { error } = await sb.from('tracks').update({ link: serialized }).eq('id', trk.id);
                        if (error) {
                            trkStatus.textContent = 'Hata: ' + error.message;
                            trkStatus.classList.add('on');
                            btn.textContent = 'Kaydet';
                            return;
                        }
                        await syncFromSupabase();
                    };
                });

                w.querySelectorAll('.adm-del-trk').forEach(btn => {
                    btn.onclick = async () => {
                        const trk = SITE.tracks[Number(btn.dataset.idx)];
                        if (!trk) return;
                        const paths = [trk.cover_path, trk.audio_path].filter(Boolean);
                        if (paths.length) {
                            await sb.storage.from(SUPABASE_CONFIG.bucket).remove(paths);
                        }
                        if (trk.id) {
                            await sb.from('tracks').delete().eq('id', trk.id);
                        }
                        await syncFromSupabase();
                    };
                });

            } else if (adminTab === 'appearance') {
                const statusEl = w.querySelector('#admWallStatus');
                const saveSettingsToCloud = async () => {
                    statusEl.textContent = 'Saving settings...';
                    statusEl.classList.add('on');
                    applyMedia();
                    buildDock();

                    const { error } = await sb.from('site_settings').upsert({
                        id: 1,
                        logo_image: SITE.logoImage,
                        lock_image: SITE.lockImage,
                        bg_video: SITE.bgVideo,
                        bg_gif: SITE.bgGif,
                        dock_icons: buildDockIconsPayload()
                    }, { onConflict: 'id' });

                    if (error) {
                        statusEl.textContent = 'Error: ' + error.message;
                        return;
                    }

                    await syncFromSupabase();
                    const s = w.querySelector('#admWallStatus');
                    if (s) {
                        s.textContent = 'Saved ✓';
                        s.classList.add('on');
                    }
                };

                w.querySelectorAll('[data-dock-file]').forEach(inp => {
                    inp.onchange = async e => {
                        const f = e.target.files[0];
                        const key = inp.dataset.dockFile;
                        if (!f || !key) return;
                        statusEl.textContent = `Uploading ${key} icon...`;
                        statusEl.classList.add('on');
                        try {
                            const { publicUrl } = await uploadFileToSupabase(f, 'icons');
                            SITE.dockIcons[key] = publicUrl;
                            const textInp = w.querySelector(`[data-dock-inp="${key}"]`);
                            if (textInp) textInp.value = publicUrl;
                            await saveSettingsToCloud();
                        } catch (err) {
                            statusEl.textContent = 'Upload error: ' + err.message;
                        }
                    };
                });

                w.querySelector('#admLogoFile').onchange = async e => {
                    const f = e.target.files[0];
                    if (!f) return;
                    statusEl.textContent = 'Uploading logo...';
                    statusEl.classList.add('on');
                    try {
                        const { publicUrl } = await uploadFileToSupabase(f, 'wallpapers');
                        SITE.logoImage = publicUrl;
                        await saveSettingsToCloud();
                    } catch (err) {
                        statusEl.textContent = 'Upload error: ' + err.message;
                    }
                };

                w.querySelector('#admLockFile').onchange = async e => {
                    const f = e.target.files[0];
                    if (!f) return;
                    statusEl.textContent = 'Uploading lock screen photo...';
                    statusEl.classList.add('on');
                    try {
                        const { publicUrl } = await uploadFileToSupabase(f, 'wallpapers');
                        SITE.lockImage = publicUrl;
                        await saveSettingsToCloud();
                    } catch (err) {
                        statusEl.textContent = 'Upload error: ' + err.message;
                    }
                };

                w.querySelector('#admBgFile').onchange = async e => {
                    const f = e.target.files[0];
                    if (!f) return;
                    statusEl.textContent = 'Uploading desktop background...';
                    statusEl.classList.add('on');
                    try {
                        const { publicUrl } = await uploadFileToSupabase(f, 'wallpapers');
                        if (detectMediaType(f.name, f.type) === 'video') {
                            SITE.bgVideo = publicUrl;
                            SITE.bgGif = '';
                        } else {
                            SITE.bgGif = publicUrl;
                            SITE.bgVideo = '';
                        }
                        await saveSettingsToCloud();
                    } catch (err) {
                        statusEl.textContent = 'Upload error: ' + err.message;
                    }
                };

                w.querySelector('#admSaveWallBtn').onclick = async () => {
                    SITE.logoImage = w.querySelector('#admLogoUrl').value.trim();
                    SITE.lockImage = w.querySelector('#admLockUrl').value.trim();
                    const bgVal = w.querySelector('#admBgUrl').value.trim();
                    if (detectMediaType(bgVal) === 'video') {
                        SITE.bgVideo = bgVal;
                        SITE.bgGif = '';
                    } else {
                        SITE.bgGif = bgVal;
                        SITE.bgVideo = '';
                    }
                    w.querySelectorAll('[data-dock-inp]').forEach(inp => {
                        SITE.dockIcons[inp.dataset.dockInp] = inp.value.trim();
                    });
                    await saveSettingsToCloud();
                };

            } else if (adminTab === 'texts') {
                const statusEl = w.querySelector('#admTxtStatus');
                w.querySelector('#admSaveTxtBtn').onclick = async () => {
                    SITE.name = w.querySelector('#admTxtName').value.trim() || 'MERTMERIC';
                    SITE.brand = w.querySelector('#admTxtBrand').value.trim() || 'mert';
                    SITE.unlockHint = w.querySelector('#admTxtHint').value.trim();
                    SITE.tracksTitle = w.querySelector('#admTxtTrkTitle').value.trim() || 'tracks';
                    SITE.longBioBtnText = w.querySelector('#admTxtBioBtn').value.trim() || 'Uzun Biyografi ↗';
                    SITE.bioBackText = w.querySelector('#admTxtBioBack').value.trim() || '‹ Geri Dön';
                    SITE.bioBadgeText = w.querySelector('#admTxtBioBadge').value.trim() || 'BIOGRAPHY';
                    SITE.bioFooterLabel = w.querySelector('#admTxtBioFoot').value.trim() || 'Bookings & Management';

                    const shortTr = w.querySelector('#admTxtShortBioTr').value
                        .split(/\n+/)
                        .map(s => s.trim())
                        .filter(Boolean);
                    if (shortTr.length) SITE.shortBio.tr = shortTr;

                    const shortEn = w.querySelector('#admTxtShortBioEn').value
                        .split(/\n+/)
                        .map(s => s.trim())
                        .filter(Boolean);
                    if (shortEn.length) SITE.shortBio.en = shortEn;

                    const longTr = w.querySelector('#admTxtLongBioTr').value
                        .split(/\n+/)
                        .map(s => s.trim())
                        .filter(Boolean);
                    if (longTr.length) SITE.longBio.tr = longTr;

                    const longEn = w.querySelector('#admTxtLongBioEn').value
                        .split(/\n+/)
                        .map(s => s.trim())
                        .filter(Boolean);
                    if (longEn.length) SITE.longBio.en = longEn;

                    SITE.email = w.querySelector('#admTxtEmail').value.trim();
                    SITE.links.instagram = w.querySelector('#admTxtIg').value.trim();
                    SITE.links.soundcloud = w.querySelector('#admTxtSc').value.trim();
                    SITE.links.spotify = w.querySelector('#admTxtSp').value.trim();
                    SITE.links.youtube = w.querySelector('#admTxtYt').value.trim();
                    SITE.links.uncompressed = w.querySelector('#admTxtUncomp').value.trim();

                    applyMedia();
                    buildDock();

                    statusEl.textContent = 'Saving texts & links to cloud...';
                    statusEl.classList.add('on');

                    const { error } = await sb.from('site_settings').upsert({
                        id: 1,
                        brand: SITE.brand,
                        name: SITE.name,
                        unlock_hint: SITE.unlockHint,
                        tracks_title: SITE.tracksTitle,
                        long_bio_btn_text: SITE.longBioBtnText,
                        bio_back_text: SITE.bioBackText,
                        bio_badge_text: SITE.bioBadgeText,
                        bio_footer_label: SITE.bioFooterLabel,
                        short_bio: SITE.shortBio,
                        long_bio: SITE.longBio,
                        email: SITE.email,
                        instagram_url: SITE.links.instagram,
                        soundcloud_url: SITE.links.soundcloud,
                        spotify_url: SITE.links.spotify,
                        youtube_url: SITE.links.youtube,
                        dock_icons: buildDockIconsPayload()
                    }, { onConflict: 'id' });

                    if (error) {
                        statusEl.textContent = 'Error: ' + error.message;
                    } else {
                        await syncFromSupabase();
                        const s = w.querySelector('#admTxtStatus');
                        if (s) {
                            s.textContent = 'Saved ✓';
                            s.classList.add('on');
                        }
                    }
                };
            } else if (adminTab === 'edu') {
                const statusEl = w.querySelector('#admEduStatus');
                const syncDomToEduConfig = () => {
                    const ec = SITE.eduConfig;
                    ec.enabled = Boolean(w.querySelector('#admEduEnabled')?.checked);
                    ec.applications_open = SITE.eduConfig.applications_open !== false;
                    ec.portal_open = SITE.eduConfig.portal_open !== false;
                    const drvVal = w.querySelector('#admEduDriveUrlInp')?.value.trim();
                    if (typeof drvVal === 'string') {
                        ec.drive_url = drvVal;
                        SITE.eduDriveUrl = drvVal;
                    }
                    const gasVal = w.querySelector('#admEduAppsScriptInp')?.value.trim();
                    if (typeof gasVal === 'string') {
                        ec.apps_script_url = gasVal;
                    }
                    ec.closed_msg_tr = w.querySelector('#admEduClosedMsgTr')?.value.trim() || '';
                    ec.closed_msg_en = w.querySelector('#admEduClosedMsgEn')?.value.trim() || '';
                    ec.btn_tr = w.querySelector('#admEduBtnTr')?.value.trim() || 'DJ Eğitimi ↗';
                    ec.btn_en = w.querySelector('#admEduBtnEn')?.value.trim() || 'DJ Academy ↗';
                    ec.badge_tr = w.querySelector('#admEduBadgeTr')?.value.trim() || 'Prodüksiyon Akademisi';
                    ec.badge_en = w.querySelector('#admEduBadgeEn')?.value.trim() || 'Production Academy';
                    ec.title_tr = w.querySelector('#admEduTitleTr')?.value.trim() || '';
                    ec.title_en = w.querySelector('#admEduTitleEn')?.value.trim() || '';
                    ec.desc_tr = w.querySelector('#admEduDescTr')?.value.trim() || '';
                    ec.desc_en = w.querySelector('#admEduDescEn')?.value.trim() || '';
                    ec.questions.forEach((q, idx) => {
                        q.required = Boolean(w.querySelector(`[data-q-req="${idx}"]`)?.checked);
                        q.label_tr = w.querySelector(`[data-q-lbl-tr="${idx}"]`)?.value.trim() || '';
                        q.label_en = w.querySelector(`[data-q-lbl-en="${idx}"]`)?.value.trim() || '';
                        q.type = w.querySelector(`[data-q-type="${idx}"]`)?.value || 'text';
                        q.placeholder_tr = w.querySelector(`[data-q-ph-tr="${idx}"]`)?.value.trim() || '';
                        q.placeholder_en = w.querySelector(`[data-q-ph-en="${idx}"]`)?.value.trim() || '';
                        q.options_tr = w.querySelector(`[data-q-opt-tr="${idx}"]`)?.value.trim() || '';
                        q.options_en = w.querySelector(`[data-q-opt-en="${idx}"]`)?.value.trim() || '';
                    });
                };

                w.querySelectorAll('[data-q-type]').forEach(sel => {
                    sel.onchange = () => {
                        const idx = sel.dataset.qType;
                        const optRow = w.querySelector(`[data-q-opt-row="${idx}"]`);
                        if (optRow) optRow.style.display = sel.value === 'select' ? 'flex' : 'none';
                    };
                });

                const toggleFormBtn = w.querySelector('#admToggleFormStatusBtn');
                if (toggleFormBtn) {
                    toggleFormBtn.onclick = async () => {
                        syncDomToEduConfig();
                        const currentOpen = SITE.eduConfig.applications_open !== false;
                        const nextOpen = !currentOpen;
                        SITE.eduConfig.applications_open = nextOpen;

                        toggleFormBtn.textContent = 'Güncelleniyor...';
                        toggleFormBtn.disabled = true;

                        const { data: savedRow, error } = await sb.from('site_settings').upsert({
                            id: 1,
                            dock_icons: buildDockIconsPayload()
                        }, { onConflict: 'id' }).select().single();

                        if (error) {
                            SITE.eduConfig.applications_open = currentOpen;
                            alert('Hata: ' + error.message);
                            refresh();
                            return;
                        }

                        if (savedRow) {
                            applySettingsObject(savedRow);
                            try {
                                localStorage.setItem('mert_cloud_settings_v2', JSON.stringify(savedRow));
                            } catch (_) { }
                        }
                        applyMedia();
                        refresh();

                        const sEl = w.querySelector('#admEduStatus');
                        if (sEl) {
                            sEl.textContent = nextOpen
                                ? '✅ Başvuru formu AÇILDI (Eğitim sayfasında form aktif edildi)'
                                : '⛔ Başvuru formu KAPATILDI (Eğitim sayfasında form gizlendi)';
                            sEl.classList.add('on');
                        }
                    };
                }

                w.querySelectorAll('.adm-toggle-portal-btn').forEach(btn => {
                    btn.onclick = async () => {
                        syncDomToEduConfig();
                        const currentPortalOpen = SITE.eduConfig.portal_open !== false;
                        const nextPortalOpen = !currentPortalOpen;
                        SITE.eduConfig.portal_open = nextPortalOpen;

                        btn.textContent = 'Güncelleniyor...';
                        btn.disabled = true;

                        const { data: savedRow, error } = await sb.from('site_settings').upsert({
                            id: 1,
                            dock_icons: buildDockIconsPayload()
                        }, { onConflict: 'id' }).select().single();

                        if (error) {
                            SITE.eduConfig.portal_open = currentPortalOpen;
                            alert('Hata: ' + error.message);
                            refresh();
                            return;
                        }

                        if (savedRow) {
                            applySettingsObject(savedRow);
                            try {
                                localStorage.setItem('mert_cloud_settings_v2', JSON.stringify(savedRow));
                            } catch (_) { }
                        }
                        applyMedia();
                        refresh();

                        const sEl = w.querySelector('#admEduStatus');
                        if (sEl) {
                            sEl.textContent = nextPortalOpen
                                ? '✅ Eğitim Arşivi (Drive) kartı AÇILDI'
                                : '⛔ Eğitim Arşivi (Drive) kartı KAPATILDI (Sayfadan gizlendi)';
                            sEl.classList.add('on');
                        }
                    };
                });

                const addQBtn = w.querySelector('#admAddEduQBtn');
                if (addQBtn) {
                    addQBtn.onclick = () => {
                        syncDomToEduConfig();
                        SITE.eduConfig.questions.push({
                            id: 'q_' + Date.now(),
                            label_tr: 'Yeni Soru',
                            label_en: 'New Question',
                            placeholder_tr: '',
                            placeholder_en: '',
                            type: 'text',
                            options_tr: '',
                            options_en: '',
                            required: false
                        });
                        refresh();
                    };
                }

                w.querySelectorAll('.adm-q-up').forEach(btn => {
                    btn.onclick = () => {
                        syncDomToEduConfig();
                        const i = Number(btn.dataset.qidx);
                        if (i <= 0) return;
                        const qs = SITE.eduConfig.questions;
                        [qs[i - 1], qs[i]] = [qs[i], qs[i - 1]];
                        refresh();
                    };
                });

                w.querySelectorAll('.adm-q-down').forEach(btn => {
                    btn.onclick = () => {
                        syncDomToEduConfig();
                        const i = Number(btn.dataset.qidx);
                        const qs = SITE.eduConfig.questions;
                        if (i >= qs.length - 1) return;
                        [qs[i + 1], qs[i]] = [qs[i], qs[i + 1]];
                        refresh();
                    };
                });

                w.querySelectorAll('.adm-q-del').forEach(btn => {
                    btn.onclick = () => {
                        syncDomToEduConfig();
                        const i = Number(btn.dataset.qidx);
                        SITE.eduConfig.questions.splice(i, 1);
                        refresh();
                    };
                });

                const refreshSubsBtn = w.querySelector('#admRefreshSubsBtn');
                if (refreshSubsBtn) {
                    refreshSubsBtn.onclick = async () => {
                        syncDomToEduConfig();
                        refreshSubsBtn.textContent = '...';
                        const subRes = await sb.from('edu_submissions').select('*').order('created_at', { ascending: false });
                        if (!subRes.error && Array.isArray(subRes.data)) {
                            SITE.eduTableMissing = false;
                            SITE.eduSubmissions = subRes.data;
                        }
                        refresh();
                    };
                }

                const copySqlBtn = w.querySelector('#admCopySqlBtn');
                if (copySqlBtn) {
                    copySqlBtn.onclick = () => {
                        const sql = `create table if not exists public.edu_submissions (\n  id uuid primary key default gen_random_uuid(),\n  created_at timestamptz default now(),\n  answers jsonb not null default '[]'::jsonb,\n  is_read boolean default false\n);\nalter table public.edu_submissions enable row level security;\ncreate policy "Allow public insert" on public.edu_submissions for insert to anon, authenticated with check (true);\ncreate policy "Allow admin manage" on public.edu_submissions for all to authenticated using (true) with check (true);`;
                        navigator.clipboard?.writeText(sql);
                        copySqlBtn.textContent = 'SQL Kopyalandı ✓';
                        setTimeout(() => { copySqlBtn.textContent = 'SQL Kodunu Kopyala'; }, 2500);
                    };
                }

                w.querySelectorAll('.adm-sub-read').forEach(btn => {
                    btn.onclick = async () => {
                        const sub = SITE.eduSubmissions[Number(btn.dataset.idx)];
                        if (!sub) return;
                        await sb.from('edu_submissions').update({ is_read: true }).eq('id', sub.id);
                        sub.is_read = true;
                        refresh();
                    };
                });

                w.querySelectorAll('.adm-sub-del').forEach(btn => {
                    btn.onclick = async () => {
                        const idx = Number(btn.dataset.idx);
                        const sub = SITE.eduSubmissions[idx];
                        if (!sub) return;
                        await sb.from('edu_submissions').delete().eq('id', sub.id);
                        SITE.eduSubmissions.splice(idx, 1);
                        refresh();
                    };
                });

                const refreshAccessBtn = w.querySelector('#admRefreshAccessBtn');
                if (refreshAccessBtn) {
                    refreshAccessBtn.onclick = async () => {
                        refreshAccessBtn.textContent = '...';
                        const [accessRes, vaultRes] = await Promise.all([
                            sb.from('edu_access').select('*').order('created_at', { ascending: false }),
                            sb.from('edu_vault').select('drive_url').eq('id', 1).maybeSingle()
                        ]);
                        if (!accessRes.error && Array.isArray(accessRes.data)) {
                            SITE.eduAccessTableMissing = false;
                            SITE.eduAccess = accessRes.data;
                        }
                        if (vaultRes && vaultRes.data && typeof vaultRes.data.drive_url === 'string') {
                            SITE.eduDriveUrl = vaultRes.data.drive_url;
                        }
                        if (SITE.eduConfig.apps_script_url) {
                            await syncDriveEmailsNow();
                            return;
                        }
                        refresh();
                    };
                }

                const copyAccessSqlBtn = w.querySelector('#admCopyAccessSqlBtn');
                if (copyAccessSqlBtn) {
                    copyAccessSqlBtn.onclick = () => {
                        const sql = `-- 1. Yetkili Öğrenci E-postaları Tablosu\ncreate table if not exists public.edu_access (\n  id uuid primary key default gen_random_uuid(),\n  created_at timestamptz default now(),\n  email text unique not null,\n  note text default '',\n  status text default 'active'\n);\nalter table public.edu_access enable row level security;\ncreate policy "Allow admin manage edu_access" on public.edu_access for all to authenticated using (true) with check (true);\n\n-- 2. Drive Ayarları Tablosu\ncreate table if not exists public.edu_vault (\n  id int primary key default 1,\n  drive_url text not null default '',\n  updated_at timestamptz default now()\n);\ninsert into public.edu_vault (id, drive_url) values (1, '') on conflict (id) do nothing;\nalter table public.edu_vault enable row level security;\ncreate policy "Allow admin manage edu_vault" on public.edu_vault for all to authenticated using (true) with check (true);\n\n-- 3. Güvenli E-posta Doğrulama Fonksiyonu (RPC)\ncreate or replace function public.verify_edu_access(check_email text)\nreturns jsonb\nlanguage plpgsql\nsecurity definer\nas $\ndeclare\n  cleaned_email text;\n  found_row record;\n  target_url text;\nbegin\n  cleaned_email := lower(trim(coalesce(check_email, '')));\n  if cleaned_email = '' then\n    return jsonb_build_object('success', false, 'error', 'empty_email');\n  end if;\n\n  select * into found_row from public.edu_access where lower(trim(email)) = cleaned_email and status = 'active' limit 1;\n  if found_row is null then\n    return jsonb_build_object('success', false, 'error', 'not_found');\n  end if;\n\n  select drive_url into target_url from public.edu_vault where id = 1 limit 1;\n  if target_url is null or trim(target_url) = '' then\n    return jsonb_build_object('success', false, 'error', 'drive_not_configured');\n  end if;\n\n  return jsonb_build_object('success', true, 'drive_url', target_url);\nend;\n$;\ngrant execute on function public.verify_edu_access(text) to anon, authenticated;`;
                        navigator.clipboard?.writeText(sql);
                        copyAccessSqlBtn.textContent = 'SQL Kopyalandı ✓';
                        setTimeout(() => { copyAccessSqlBtn.textContent = 'SQL Kodunu Kopyala'; }, 2500);
                    };
                }

                const toggleGasBtn = w.querySelector('#admToggleAppsScriptBoxBtn');
                const gasGuideBox = w.querySelector('#admAppsScriptGuideBox');
                if (toggleGasBtn && gasGuideBox) {
                    toggleGasBtn.onclick = () => {
                        gasGuideBox.style.display = gasGuideBox.style.display === 'none' ? 'block' : 'none';
                    };
                }

                const copyGasBtn = w.querySelector('#admCopyAppsScriptCodeBtn');
                if (copyGasBtn) {
                    copyGasBtn.onclick = () => {
                        const gasCode = [
                            'function doGet(e) {',
                            '  try {',
                            '    var raw = (e && e.parameter && e.parameter.folderId) || "";',
                            '    var m1 = raw.match(/\\/folders\\/([a-zA-Z0-9_-]{15,})/);',
                            '    var m2 = raw.match(/[?&]id=([a-zA-Z0-9_-]{15,})/);',
                            '    var folderId = m1 ? m1[1] : (m2 ? m2[1] : raw.trim());',
                            '    if (!folderId) return jsonOut({ ok: false, error: "missing_folder_id" });',
                            '',
                            '    var folder = DriveApp.getFolderById(folderId);',
                            '    var emailSet = {};',
                            '    var emails = [];',
                            '    function addUser(u) {',
                            '      if (!u) return;',
                            '      try {',
                            '        var em = String(u.getEmail() || "").trim().toLowerCase();',
                            '        if (em && !emailSet[em]) { emailSet[em] = true; emails.push(em); }',
                            '      } catch (_) {}',
                            '    }',
                            '    addUser(folder.getOwner());',
                            '    var editors = folder.getEditors();',
                            '    for (var i = 0; i < editors.length; i++) addUser(editors[i]);',
                            '    var viewers = folder.getViewers();',
                            '    for (var j = 0; j < viewers.length; j++) addUser(viewers[j]);',
                            '',
                            '    var checkEmail = String((e && e.parameter && e.parameter.email) || "").trim().toLowerCase();',
                            '    if (checkEmail) {',
                            '      return jsonOut({ ok: true, allowed: Boolean(emailSet[checkEmail]), driveUrl: folder.getUrl(), total: emails.length });',
                            '    }',
                            '    return jsonOut({ ok: true, folderName: folder.getName(), driveUrl: folder.getUrl(), emails: emails });',
                            '  } catch (err) {',
                            '    return jsonOut({ ok: false, error: String((err && err.message) || err) });',
                            '  }',
                            '}',
                            '',
                            'function jsonOut(obj) {',
                            '  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);',
                            '}'
                        ].join('\n');
                        navigator.clipboard?.writeText(gasCode);
                        copyGasBtn.textContent = 'Apps Script Kodu Kopyalandı ✓';
                        setTimeout(() => { copyGasBtn.textContent = '📋 Apps Script Kodunu Kopyala'; }, 2500);
                    };
                }

                const syncDriveEmailsNow = async () => {
                    const syncMsgEl = w.querySelector('#admDriveSyncMsg');
                    const showSyncMsg = (txt, isErr) => {
                        if (!syncMsgEl) return;
                        syncMsgEl.style.display = 'block';
                        syncMsgEl.style.background = isErr ? 'rgba(255,69,58,.16)' : 'rgba(48,209,88,.16)';
                        syncMsgEl.style.border = isErr ? '1px solid rgba(255,69,58,.45)' : '1px solid rgba(48,209,88,.45)';
                        syncMsgEl.style.color = isErr ? '#ff8078' : '#32d74b';
                        syncMsgEl.textContent = txt;
                    };

                    const driveUrl = (w.querySelector('#admEduDriveUrlInp')?.value || SITE.eduDriveUrl || SITE.eduConfig.drive_url || '').trim();
                    const scriptUrl = (w.querySelector('#admEduAppsScriptInp')?.value || SITE.eduConfig.apps_script_url || '').trim();

                    if (!scriptUrl) {
                        return { synced: false, reason: 'no_script' };
                    }
                    if (!driveUrl) {
                        showSyncMsg('⚠️ Önce Google Drive klasör linkini girin.', true);
                        return { synced: false, reason: 'no_drive' };
                    }

                    const m1 = driveUrl.match(/\/folders\/([a-zA-Z0-9_-]{15,})/);
                    const m2 = driveUrl.match(/[?&]id=([a-zA-Z0-9_-]{15,})/);
                    const folderId = m1 ? m1[1] : (m2 ? m2[1] : driveUrl);

                    showSyncMsg('⏳ Google Drive klasöründeki izinli e-postalar çekiliyor...', false);

                    try {
                        const sep = scriptUrl.includes('?') ? '&' : '?';
                        const res = await fetch(`${scriptUrl}${sep}folderId=${encodeURIComponent(folderId)}&list=1`, {
                            method: 'GET',
                            redirect: 'follow'
                        });
                        if (!res.ok) throw new Error('HTTP ' + res.status);
                        const data = await res.json();
                        if (!data || !data.ok || !Array.isArray(data.emails)) {
                            throw new Error(data?.error || 'Drive klasör okunamadı');
                        }

                        const driveEmails = data.emails.map(e => String(e || '').trim().toLowerCase()).filter(e => e.includes('@'));
                        const driveSet = new Set(driveEmails);

                        const existingRes = await sb.from('edu_access').select('*');
                        const existingRows = (!existingRes.error && Array.isArray(existingRes.data)) ? existingRes.data : [];
                        const existingMap = new Map(existingRows.map(r => [String(r.email || '').trim().toLowerCase(), r]));

                        // 1. Add new emails from Google Drive
                        const toInsert = [];
                        for (const em of driveEmails) {
                            if (!existingMap.has(em)) {
                                toInsert.push({
                                    email: em,
                                    note: 'Google Drive (Otomatik)',
                                    status: 'active'
                                });
                            }
                        }
                        if (toInsert.length > 0) {
                            await sb.from('edu_access').upsert(toInsert, { onConflict: 'email' });
                        }

                        // 2. Remove auto-synced emails that were removed from Google Drive
                        const toDeleteIds = existingRows
                            .filter(r => r.note === 'Google Drive (Otomatik)' && !driveSet.has(String(r.email || '').trim().toLowerCase()))
                            .map(r => r.id);
                        if (toDeleteIds.length > 0) {
                            await sb.from('edu_access').delete().in('id', toDeleteIds);
                        }

                        const finalRes = await sb.from('edu_access').select('*').order('created_at', { ascending: false });
                        if (!finalRes.error && Array.isArray(finalRes.data)) {
                            SITE.eduAccess = finalRes.data;
                        }

                        refresh();
                        const msgAfter = w.querySelector('#admDriveSyncMsg');
                        if (msgAfter) {
                            msgAfter.style.display = 'block';
                            msgAfter.style.background = 'rgba(48,209,88,.16)';
                            msgAfter.style.border = '1px solid rgba(48,209,88,.45)';
                            msgAfter.style.color = '#32d74b';
                            msgAfter.textContent = `✅ "${data.folderName || 'Drive Klasörü'}" içinden ${driveEmails.length} yetkili e-posta otomatik çekildi ve eşitlendi!`;
                        }
                        return { synced: true, count: driveEmails.length };
                    } catch (err) {
                        showSyncMsg('❌ Drive senkronizasyon hatası: ' + err.message, true);
                        return { synced: false, error: err.message };
                    }
                };

                const syncDriveBtn = w.querySelector('#admSyncDriveEmailsBtn');
                if (syncDriveBtn) {
                    syncDriveBtn.onclick = async () => {
                        syncDriveBtn.textContent = '⏳ Çekiliyor...';
                        syncDriveBtn.disabled = true;
                        await syncDriveEmailsNow();
                        const b = w.querySelector('#admSyncDriveEmailsBtn');
                        if (b) {
                            b.textContent = '🔄 Şimdi Drive\'dan Eşitle';
                            b.disabled = false;
                        }
                    };
                }

                const saveDriveBtn = w.querySelector('#admSaveDriveUrlBtn');
                if (saveDriveBtn) {
                    saveDriveBtn.onclick = async () => {
                        syncDomToEduConfig();
                        const url = SITE.eduDriveUrl;
                        saveDriveBtn.textContent = 'Kaydediliyor...';
                        saveDriveBtn.disabled = true;

                        const [vaultRes, settingsRes] = await Promise.all([
                            sb.from('edu_vault').upsert({ id: 1, drive_url: url, updated_at: new Date().toISOString() }),
                            sb.from('site_settings').upsert({ id: 1, dock_icons: buildDockIconsPayload() }, { onConflict: 'id' }).select().single()
                        ]);

                        if (settingsRes && settingsRes.data) {
                            applySettingsObject(settingsRes.data);
                            try {
                                localStorage.setItem('mert_cloud_settings_v2', JSON.stringify(settingsRes.data));
                            } catch (_) { }
                        }

                        if (vaultRes.error) {
                            alert('Hata: ' + vaultRes.error.message);
                            saveDriveBtn.textContent = 'Hata!';
                            saveDriveBtn.disabled = false;
                            return;
                        }

                        if (SITE.eduConfig.apps_script_url) {
                            await syncDriveEmailsNow();
                        } else {
                            const b = w.querySelector('#admSaveDriveUrlBtn');
                            if (b) {
                                b.textContent = 'Kaydedildi ✓';
                                b.disabled = false;
                                setTimeout(() => { b.textContent = '💾 Linkleri Kaydet & Drive\'dan Kişileri Çek'; }, 2200);
                            }
                        }
                    };
                }

                const addStudentBtn = w.querySelector('#admAddStudentBtn');
                if (addStudentBtn) {
                    addStudentBtn.onclick = async () => {
                        const emailInp = w.querySelector('#admNewStudentEmail');
                        const noteInp = w.querySelector('#admNewStudentNote');
                        const errEl = w.querySelector('#admStudentAddErr');
                        if (errEl) errEl.style.display = 'none';

                        const email = (emailInp?.value || '').trim().toLowerCase();
                        const note = (noteInp?.value || '').trim();

                        if (!email || !email.includes('@')) {
                            if (errEl) {
                                errEl.textContent = 'Lütfen geçerli bir e-posta adresi girin.';
                                errEl.style.display = 'block';
                            }
                            return;
                        }

                        addStudentBtn.textContent = 'Ekleniyor...';
                        addStudentBtn.disabled = true;

                        const { data, error } = await sb.from('edu_access').insert({
                            email,
                            note,
                            status: 'active'
                        }).select().single();

                        if (error) {
                            if (errEl) {
                                errEl.textContent = error.message.includes('unique') ? 'Bu e-posta adresi zaten ekli!' : ('Hata: ' + error.message);
                                errEl.style.display = 'block';
                            }
                            addStudentBtn.textContent = 'Ekle';
                            addStudentBtn.disabled = false;
                        } else {
                            if (Array.isArray(SITE.eduAccess)) {
                                SITE.eduAccess.unshift(data);
                            } else {
                                SITE.eduAccess = [data];
                            }
                            refresh();
                        }
                    };
                }

                w.querySelectorAll('.adm-student-del').forEach(btn => {
                    btn.onclick = async () => {
                        const id = btn.dataset.id;
                        const idx = Number(btn.dataset.idx);
                        if (!id) return;
                        if (!confirm('Bu öğrencinin eğitim erişimini kaldırmak istediğinize emin misiniz?')) return;
                        await sb.from('edu_access').delete().eq('id', id);
                        SITE.eduAccess.splice(idx, 1);
                        refresh();
                    };
                });

                w.querySelector('#admSaveEduBtn').onclick = async () => {
                    syncDomToEduConfig();
                    applyMedia();
                    statusEl.textContent = 'Eğitim ayarları ve sorular kaydediliyor...';
                    statusEl.classList.add('on');
                    const { error } = await sb.from('site_settings').upsert({
                        id: 1,
                        dock_icons: buildDockIconsPayload()
                    }, { onConflict: 'id' });
                    if (error) {
                        statusEl.textContent = 'Hata: ' + error.message;
                    } else {
                        await syncFromSupabase();
                        const sEl = w.querySelector('#admEduStatus');
                        if (sEl) {
                            sEl.textContent = 'Kaydedildi ✓';
                            sEl.classList.add('on');
                        }
                    }
                };
            }
        }
    }
};

const dock = $('#dock');
let winContainer = $('#win');
if (!winContainer && document.body) {
    winContainer = document.createElement('div');
    winContainer.id = 'win';
    document.body.appendChild(winContainer);
}
let zIndexCounter = 25;
let winOffsetCounter = 0;

function getDockItems() {
    return [
        { id: 'instagram', title: 'Instagram', icon: ICONS.instagram, customIcon: SITE.dockIcons.instagram, url: SITE.links.instagram },
        { id: 'soundcloud', title: 'SoundCloud', icon: ICONS.soundcloud, customIcon: SITE.dockIcons.soundcloud, url: SITE.links.soundcloud },
        { id: 'spotify', title: 'Spotify', icon: ICONS.spotify, customIcon: SITE.dockIcons.spotify, url: SITE.links.spotify },
        { id: 'youtube', title: 'YouTube', icon: ICONS.youtube, customIcon: SITE.dockIcons.youtube, url: SITE.links.youtube },
        { id: 'photos', title: 'Photos', icon: ICONS.photos, customIcon: SITE.dockIcons.photos, app: 'photos' },
        { id: 'contact', title: 'Contact', icon: ICONS.contact, customIcon: SITE.dockIcons.contact, url: `mailto:${SITE.email}` }
    ];
}

function buildDock() {
    if (!dock) {
        tick();
        return;
    }
    dock.innerHTML = '';
    getDockItems().forEach(item => {
        const el = document.createElement(item.url ? 'a' : 'button');
        el.className = 'dock-item';
        if (item.url) {
            el.href = item.url;
            if (!item.url.startsWith('mailto:')) {
                el.target = '_blank';
                el.rel = 'noopener';
            }
        } else {
            el.dataset.app = item.app;
            el.onclick = () => openApp(item.app);
        }
        const icContent = item.customIcon
            ? `<img src="${esc(item.customIcon)}" alt="${esc(item.title)}">`
            : item.icon;
        const maskStyle = item.customIcon
            ? ` style="--ic-mask: url(&quot;${esc(item.customIcon)}&quot;)"`
            : '';
        el.innerHTML = `
            <div class="dock-ic ${item.customIcon ? 'has-img' : ''}"${maskStyle}>${icContent}</div>
            <span class="dock-lbl">${esc(item.title)}</span>
        `;
        dock.append(el);
    });
    tick();
}

function updateDockIndicators() {
    if (!dock) return;
    dock.querySelectorAll('.dock-item[data-app]').forEach(btn => {
        const appKey = btn.dataset.app;
        const exists = document.querySelector(`.w[data-k="${appKey}"]`);
        btn.classList.toggle('open', Boolean(exists));
    });
}

function openApp(k) {
    const existing = document.querySelector(`.w[data-k="${k}"]`);
    if (existing) {
        existing.classList.remove('minimized');
        existing.style.zIndex = ++zIndexCounter;
        updateDockIndicators();
        return;
    }

    const a = APPS[k];
    if (!a) return;

    const w = document.createElement('div');
    w.className = 'w';
    w.dataset.k = k;
    w.style.width = a.w + 'px';
    w.style.left = Math.max(12, (innerWidth - a.w) / 2 + (winOffsetCounter % 4) * 22 - 20) + 'px';
    w.style.top = Math.max(12, 34 + (winOffsetCounter++ % 4) * 20) + 'px';
    w.style.zIndex = ++zIndexCounter;

    w.innerHTML = `
        <header>
            <div class="traffic">
                <i class="close" role="button" tabindex="0" title="Close" aria-label="Close"></i>
                <i class="min" role="button" tabindex="0" title="Minimize" aria-label="Minimize"></i>
                <i class="max" role="button" tabindex="0" title="Zoom" aria-label="Zoom"></i>
            </div>
            <span>${esc(a.title)}</span>
        </header>
        <div class="body">${a.render()}</div>
    `;

    winContainer.append(w);
    if (a.bind) a.bind(w);
    updateDockIndicators();

    const h = w.querySelector('header');
    const btnClose = h.querySelector('.close');
    const btnMin = h.querySelector('.min');
    const btnMax = h.querySelector('.max');

    btnClose.onclick = () => { w.remove(); updateDockIndicators(); };
    btnMin.onclick = () => { w.classList.add('minimized'); };
    btnMax.onclick = () => { w.classList.toggle('maximized'); };
    h.ondblclick = e => { if (!e.target.closest('.traffic')) w.classList.toggle('maximized'); };

    w.addEventListener('pointerdown', () => w.style.zIndex = ++zIndexCounter);

    h.addEventListener('pointerdown', e => {
        if (e.target.closest('.traffic') || w.classList.contains('maximized')) return;
        const dx = e.clientX - w.offsetLeft;
        const dy = e.clientY - w.offsetTop;
        h.setPointerCapture(e.pointerId);
        const mv = ev => {
            w.style.left = ev.clientX - dx + 'px';
            w.style.top = Math.max(0, ev.clientY - dy) + 'px';
        };
        h.addEventListener('pointermove', mv);
        h.addEventListener('pointerup', () => h.removeEventListener('pointermove', mv), { once: true });
    });
}

addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        if (!unlocked) unlock();
        openApp('admin');
        return;
    }

    if (['Enter', ' ', 'ArrowUp'].includes(e.key) && !unlocked) {
        e.preventDefault();
        unlock();
        return;
    }

    const photosWin = document.querySelector('.w[data-k="photos"]');
    if (photosWin && !photosWin.classList.contains('minimized') && viewerActive) {
        const list = getActiveMediaList();
        if (e.key === 'ArrowLeft' && list.length) {
            viewerIndex = (viewerIndex - 1 + list.length) % list.length;
            photosWin.querySelector('.body').innerHTML = APPS.photos.render();
            APPS.photos.bind(photosWin);
        } else if (e.key === 'ArrowRight' && list.length) {
            viewerIndex = (viewerIndex + 1) % list.length;
            photosWin.querySelector('.body').innerHTML = APPS.photos.render();
            APPS.photos.bind(photosWin);
        }
    }
});

let brandClickCount = 0;
let brandClickTimer = null;
function handleAdminSecretTap() {
    brandClickCount++;
    clearTimeout(brandClickTimer);
    if (brandClickCount >= 3) {
        brandClickCount = 0;
        openApp('admin');
    } else {
        brandClickTimer = setTimeout(() => { brandClickCount = 0; }, 600);
    }
}
$('#bn')?.addEventListener('click', handleAdminSecretTap);
$('#logoBox')?.addEventListener('click', handleAdminSecretTap);
$('#bioPageLogo')?.addEventListener('click', handleAdminSecretTap);

function updateViewportScale() {
    const hub = $('#hub');
    if (!hub) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const dockEl = $('#dock');

    if (vw <= 768) {
        document.documentElement.style.setProperty('--ui-scale', '1');
        if (hub && dockEl) {
            const dockH = dockEl.offsetHeight || 68;
            const availH = Math.max(200, vh - dockH - 32);
            const hubH = hub.scrollHeight || hub.offsetHeight || 1;
            const fit = Math.max(0.6, Math.min(1, availH / hubH));
            const scaledHubH = Math.min(availH, hubH * fit);
            const topOffset = Math.max(12, Math.round((vh - dockH - 12 - scaledHubH) * 0.42));
            document.documentElement.style.setProperty('--mob-fit', fit.toFixed(4));
            document.documentElement.style.setProperty('--mob-top', topOffset + 'px');
            document.documentElement.style.setProperty('--mob-avail', Math.max(160, vh - dockH - 24 - topOffset) + 'px');
        } else {
            document.documentElement.style.setProperty('--mob-fit', '1');
            document.documentElement.style.setProperty('--mob-top', '16px');
        }
        return;
    }

    document.documentElement.style.setProperty('--mob-fit', '1');
    const hubH = hub ? hub.scrollHeight : 800;
    const dockH = dockEl ? dockEl.offsetHeight : 112;
    const byHeight = vh / (32 + hubH + dockH + 12 + 20);
    const scale = Math.max(0.4, Math.min(1, vw / 1200, byHeight));
    document.documentElement.style.setProperty('--ui-scale', scale.toFixed(4));
}

updateViewportScale();
addEventListener('resize', updateViewportScale);
$('#hubLogoImg')?.addEventListener('load', updateViewportScale);

applyMedia();
syncFromSupabase();
buildDock();
setInterval(tick, 10000);

const tracksCardEl = $('#tracksBox');
if (tracksCardEl && window.ResizeObserver) new ResizeObserver(updateLiquidCard).observe(tracksCardEl);
updateLiquidCard();
if (window.ResizeObserver && $('#hub')) new ResizeObserver(updateViewportScale).observe($('#hub'));
