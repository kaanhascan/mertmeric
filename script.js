const SUPABASE_CONFIG = {
    url: "https://gjbvypvyikrwicdfhler.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqYnZ5cHZ5aWtyd2ljZGZobGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwMjI1MDksImV4cCI6MjEwODU5ODUwOX0.vVEDvyPbZauodNMPG8c_14yJiNqyIBTPmViKiYQJgsM",
    bucket: "media"
};

const SITE = {
    brand: "mert",
    name: "mertmeric",
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
    lockImage: "",
    bgVideo: "",
    bgGif: "",
    shortBio: {
        tr: [
            "MERTMERIC, Turkish Bounce, Hard Techno ve Hard Trance ekseninde üreten bir DJ, prodüktör ve müzisyen. 10 yılı aşkın müzik üretimi deneyimiyle Türkçeyi EDM ile birleştiren sound'u; yüksek tempo, sert elektronik dokular ve vokal odaklı yaklaşım üzerine kurulu.",
            "Türkçe parçaları ve remixleri elektronik müzikle buluştururken kendi orijinal işlerini de geliştiren MERTMERIC'in amacı, Türkçeye EDM kültüründe daha güçlü bir yer açmak."
        ],
        en: [
            "MERTMERIC is a DJ, producer and artist working across Turkish Bounce, Hard Techno and Hard Trance. With over a decade of music-making experience, his sound combines Turkish with high energy, hard-hitting electronic textures and vocal-driven arrangements.",
            "Alongside Turkish tracks and remixes, MERTMERIC develops original productions with the aim of giving Turkish music a stronger presence within EDM culture."
        ]
    },
    longBio: {
        tr: [
            "MERTMERIC, Türkçe müziğin kendine özgü karakterini sert elektronik sound'larla bir araya getiren bir DJ, prodüktör ve artist.",
            "On yılı aşkın süredir müzik üreten MERTMERIC, son üç yıldır odağını elektronik müziğe yönelterek Turkish Bounce, Hard Techno ve Hard Trance arasında kendi müzikal kimliğini geliştiriyor. Üretimlerinde yüksek tempo, güçlü elektronik dokular ve vokallerin taşıdığı tanıdık duyguyu ön planda tutuyor.",
            "“Pembe Mezarlık” ve “Değmesin Ellerimiz” gibi yüksek streamler yakalayan Türkçe parçalar üzerinden şekillenen remix yaklaşımının yanında “NOT LIKE THIS”, “MAMAKJUMP”, “Afraid of the Darkness” ve “HASSIKTIR” gibi orijinal çalışmalarıyla da kendi sound'unu ortaya koyuyor.",
            "MERTMERIC için Türkçe müziği elektronik müziğe taşımak yalnızca bir remix meselesi değil; Türkçenin, yerel müzikal hafızanın ve elektronik müziğin aynı sahnede doğal bir şekilde var olabileceğini göstermek. Hedefi, bu yaklaşımı Türkiye'deki kulüp kültürünün ötesine taşıyarak uluslararası elektronik müzik kitlesiyle buluşturmak.",
            "Yaratıcı yaklaşımının merkezinde ise bir motto var: “Creating things you wish existed.” Var olanı tekrarlamak yerine, insanların duymak isteyip de ortada olmayan müziği üretmek.",
            "\"Türkçe müziğin elektronik müzikte daha fazla yer bulması gerektiğine inanıyorum. Tanıdık vokallerin, Türkçenin kendine özgü karakterinin ve sert elektronik sound'ların bir araya geldiği bir alan yaratmak istiyorum.",
            "Amacım yalnızca sevilen parçaları remixlemek değil; Türkçe müziği kulüp kültürünün doğal bir parçası hâline getirmek ve kendi orijinal üretimlerimle bu dünyaya katkıda bulunmak.",
            "Benim için yaratıcılık, zaten var olanı tekrarlamak değil, eksikliğini hissettiğin şeyi üretmek.\""
        ],
        en: [
            "MERTMERIC is a DJ, producer and artist bringing the character of Turkish music into harder electronic territory.",
            "With over ten years of music-making experience and three years dedicated to electronic music, he is developing a sound across Turkish Bounce, Hard Techno and Hard Trance. His productions are driven by high energy, hard-hitting textures and the familiarity of vocal-led music.",
            "His work spans Turkish-language remixes and original productions, including “Pembe Mezarlık,” “Değmesin Ellerimiz,” “Mamakjump,” “NOT LIKE THIS,” “Afraid of the Darkness” and “HASSIKTIR.” Together, these projects reflect two sides of his approach: reimagining familiar Turkish music through electronic sounds and creating original material on his own terms.",
            "For MERTMERIC, bringing Turkish music into EDM is about more than remixing existing songs. It is about creating space for the Turkish language and its musical identity within contemporary electronic music, connecting local familiarity with the energy of club culture.",
            "His philosophy is straightforward: “Creating things you wish existed.” Rather than reproducing what is already out there, he aims to make the music people want to hear but can’t because it simply does not exist.",
            "\"I believe Turkish music deserves a stronger presence in electronic music. I want to create a space where the familiarity of Turkish vocals and the character of the language meet hard-hitting electronic sounds.",
            "My goal is not just to remix recognizable tracks, but to make Turkish music feel at home in club culture while contributing to that space through original productions of my own.",
            "To me, creativity means making what you feel is missing rather than repeating what already exists.\""
        ]
    },
    tracks: [],
    media: [],
    albums: [],
    email: "keystance@outlook.com",
    links: {
        instagram: "https://www.instagram.com/mertmeric.7/",
        soundcloud: "https://soundcloud.com/mertmeric7",
        spotify: "https://open.spotify.com/intl-tr/artist/7AFLX94fKBZWjj0Mq9qQ3O?si=YJnObyGaTROUK6ynG6uHDA",
        youtube: "https://youtu.be/DXFqUtnAJLE?si=05i51MZduxPMkPzI"
    },
    dockIcons: {
        instagram: "",
        soundcloud: "",
        spotify: "",
        youtube: "",
        photos: "",
        contact: ""
    }
};

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

function detectMediaType(src, mime) {
    if (mime && mime.startsWith('video/')) return 'video';
    if (mime && mime.startsWith('image/')) return 'photo';
    const s = String(src || '').replace(/\\/g, '/').toLowerCase();
    if (/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(s)) return 'video';
    return 'photo';
}

function applySettingsObject(s) {
    if (!s) return;
    SITE.lockImage = s.lock_image || SITE.lockImage || '';
    SITE.logoImage = s.logo_image || SITE.logoImage || '';

    const cloudBg = s.bg_gif || s.bg_video || '';
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
    if (s.dock_icons && typeof s.dock_icons === 'object') {
        ['instagram', 'soundcloud', 'spotify', 'youtube', 'photos', 'contact'].forEach(k => {
            if (typeof s.dock_icons[k] === 'string') SITE.dockIcons[k] = s.dock_icons[k];
        });
    }
}

try {
    localStorage.removeItem('mert_site_cache_v1');
    localStorage.removeItem('mert_cloud_texts_v1');
    const cachedSettings = JSON.parse(localStorage.getItem('mert_cloud_settings_v2') || 'null');
    if (cachedSettings) applySettingsObject(cachedSettings);
} catch (_) { }

const sb = window.supabase
    ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey)
    : null;

let adminSession = null;
let adminTab = 'media';

async function syncFromSupabase() {
    if (!sb) return;
    try {
        sb.from('site_settings').select('*').eq('id', 1).maybeSingle().then(({ data: settingsData }) => {
            if (settingsData) {
                applySettingsObject(settingsData);
                try {
                    localStorage.setItem('mert_cloud_settings_v2', JSON.stringify(settingsData));
                } catch (_) { }
                applyMedia();
                buildDock();
            }
        });

        const [
            { data: albumsData },
            { data: mediaData },
            { data: tracksData },
            { data: sessionRes }
        ] = await Promise.all([
            sb.from('albums').select('*').order('created_at', { ascending: true }),
            sb.from('media_items').select('*').order('created_at', { ascending: false }),
            sb.from('tracks').select('*').order('created_at', { ascending: false }),
            sb.auth.getSession()
        ]);

        adminSession = sessionRes?.session || null;

        if (Array.isArray(albumsData)) SITE.albums = albumsData;
        if (Array.isArray(mediaData)) SITE.media = mediaData;
        if (Array.isArray(tracksData)) SITE.tracks = tracksData;

        applyMedia();
        refreshOpenWindows();
    } catch (_) { }
}

async function uploadFileToSupabase(file, folder = 'uploads') {
    const ext = (file.name.split('.').pop() || 'bin').toLowerCase();
    const path = `${folder}/${Date.now()}_${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await sb.storage.from(SUPABASE_CONFIG.bucket).upload(path, file, {
        cacheControl: '3600',
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
            w.querySelector('.body').innerHTML = APPS[k].render();
            if (APPS[k].bind) APPS[k].bind(w);
        }
    });
}

function formatDuration(sec) {
    if (!sec || !isFinite(sec) || sec < 0) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function applyMedia() {
    document.title = SITE.name;
    $('#bn').textContent = SITE.brand;

    const hintSpan = $('#hint span');
    if (hintSpan) hintSpan.textContent = SITE.unlockHint;

    document.documentElement.style.setProperty('--lw', `url("${SITE.lockImage}")`);

    const v = $('#bgv');
    const g = $('#bggif');
    const bgSrc = SITE.bgGif || SITE.bgVideo;

    if (!bgSrc) {
        g.style.display = 'none';
        v.style.display = 'none';
        v.pause();
    } else if (SITE.bgGif || detectMediaType(bgSrc) === 'photo') {
        g.src = bgSrc;
        g.style.display = 'block';
        v.style.display = 'none';
        v.pause();
    } else {
        v.src = bgSrc;
        v.style.display = 'block';
        g.style.display = 'none';
        if (unlocked) v.play().catch(() => { });
    }

    const logoImg = $('#hubLogoImg');
    const logoWrap = $('#logoImgWrap');
    const logoTxt = $('#hubLogoText');
    if (SITE.logoImage) {
        logoImg.src = SITE.logoImage;
        logoImg.style.display = 'block';
        if (logoWrap) {
            logoWrap.style.display = 'inline-flex';
            logoWrap.style.setProperty('--logo-mask', `url("${SITE.logoImage}")`);
        }
        logoTxt.style.display = 'none';
    } else {
        logoImg.style.display = 'none';
        if (logoWrap) logoWrap.style.display = 'none';
        logoTxt.style.display = 'block';
        logoTxt.textContent = SITE.name;
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

    renderTrackWidget();
}

document.querySelectorAll('#hubLangSwitch .lang-flag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        SITE.lang = btn.dataset.lang === 'en' ? 'en' : 'tr';
        try { localStorage.setItem('mert_lang', SITE.lang); } catch (_) { }
        applyMedia();
    });
});

let currentTrackIdx = 0;
let trackVolume = 0.5;
let trackAudio = new Audio();
trackAudio.preload = 'metadata';
trackAudio.volume = trackVolume;
let isTrackPlaying = false;

trackAudio.addEventListener('timeupdate', () => {
    if (trackAudio.currentTime >= 30) {
        trackAudio.pause();
        trackAudio.currentTime = 0;
        isTrackPlaying = false;
        updateTrackPlayUI();
    }
    const range = $('#trkRange');
    const timeEl = $('#trkTime');
    if (range) range.value = Math.min(30, trackAudio.currentTime);
    if (timeEl) timeEl.textContent = formatDuration(Math.min(30, trackAudio.currentTime));
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
        wrap.innerHTML = `<div style="font-size:12px;color:rgba(255,255,255,.5)">Henüz parça eklenmedi.</div>`;
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

    wrap.innerHTML = `
        <div class="trk-main">
            <img class="trk-cover" src="${esc(trk.cover)}" alt="${esc(trk.title)}">
            <div class="trk-meta">
                <div class="trk-title" title="${esc(trk.title)}">${esc(trk.title)}</div>
                <div class="trk-sub">30s Preview</div>
            </div>
            <button type="button" class="trk-play-btn" id="trkPlayBtn" aria-label="Play or Pause"></button>
        </div>
        <div class="trk-bar-wrap">
            <input type="range" class="trk-range" id="trkRange" min="0" max="30" step="0.1" value="${Math.min(30, trackAudio.currentTime || 0)}">
            <span class="trk-time" id="trkTime">${formatDuration(Math.min(30, trackAudio.currentTime || 0))}</span>
            <div class="trk-vol-wrap" title="Volume">
                <svg class="trk-vol-ic" viewBox="0 0 24 24">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
                <input type="range" class="trk-vol-range" id="trkVolRange" min="0" max="1" step="0.01" value="${trackVolume}">
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

    $('#trkRange').oninput = e => {
        trackAudio.currentTime = Math.min(30, Number(e.target.value));
    };

    $('#trkVolRange').oninput = e => {
        trackVolume = Number(e.target.value);
        trackAudio.volume = trackVolume;
    };
}

$('#trkPrev')?.addEventListener('click', () => {
    if (!SITE.tracks.length) return;
    currentTrackIdx = (currentTrackIdx - 1 + SITE.tracks.length) % SITE.tracks.length;
    renderTrackWidget();
});

$('#trkNext')?.addEventListener('click', () => {
    if (!SITE.tracks.length) return;
    currentTrackIdx = (currentTrackIdx + 1) % SITE.tracks.length;
    renderTrackWidget();
});

function tick() {
    const d = new Date();
    const L = SITE.locale;
    const t = d.toLocaleTimeString(L, { hour: 'numeric', minute: '2-digit', hour12: SITE.hour12 });
    $('#ltime').textContent = t;
    $('#ldate').textContent = d.toLocaleDateString(L, { weekday: 'long', month: 'long', day: 'numeric' });
    $('#bt').textContent = d.toLocaleDateString(L, { weekday: 'short', month: 'short', day: 'numeric' }) + "  " + t;
}

const lock = $('#lock');
let y0 = null, unlocked = false;

function unlock() {
    if (unlocked) return;
    unlocked = true;
    lock.classList.add('gone');
    lock.setAttribute('aria-hidden', 'true');
    const v = $('#bgv');
    if (v && v.style.display !== 'none') v.play().catch(() => { });
}

lock.addEventListener('click', unlock);
lock.addEventListener('pointerdown', e => y0 = e.clientY);
lock.addEventListener('pointerup', e => {
    if (y0 !== null && y0 - e.clientY > 35) unlock();
    y0 = null;
});

if (location.hash === '#hub') {
    lock.style.transition = 'none';
    unlock();
    history.replaceState(null, '', location.pathname + location.search);
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
    const durBadge = item.duration ? `<span class="vid-dur">${esc(item.duration)}</span>` :
        (item.type === 'video' ? `<span class="vid-dur" data-auto-dur></span>` : '');

    if (item.type === 'video') {
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
    const isVid = item.type === 'video';
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

            <div class="pview-scrub">
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

            return `
                <div class="photos-top">${headerHtml}</div>
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

                const activeThumb = w.querySelector('.pview-thumb.active');
                if (activeThumb) {
                    activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
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
        w: 560,
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
                        <h4>Cloud Media (${SITE.media.length} items)</h4>
                        <div style="max-height:200px;overflow-y:auto;padding-right:4px">
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
                        <div style="max-height:220px;overflow-y:auto">
                            ${SITE.tracks.map((t, idx) => `
                                <div class="adm-item">
                                    <div style="display:flex;align-items:center;gap:10px;min-width:0">
                                        <img src="${esc(t.cover)}" alt="">
                                        <b style="font-size:12.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(t.title)}</b>
                                    </div>
                                    <button class="adm-del adm-del-trk" data-idx="${idx}">Delete</button>
                                </div>
                            `).join('')}
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
                    <div style="max-height:420px;overflow-y:auto;padding-right:4px">
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
                    <div style="max-height:420px;overflow-y:auto;padding-right:4px">
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
                            </div>
                        </div>
                    </div>

                    <div class="adm-status" id="admTxtStatus"></div>
                    <div style="display:flex;justify-content:flex-end;margin-top:8px">
                        <button type="button" class="btn-pill active" id="admSaveTxtBtn">Save All Texts & Links</button>
                    </div>
                `;
            }

            return `
                <div class="adm-tabs" style="justify-content:space-between">
                    <div style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn-pill ${adminTab === 'media' ? 'active' : ''}" data-atab="media">Photos & Albums</button>
                        <button class="btn-pill ${adminTab === 'tracks' ? 'active' : ''}" data-atab="tracks">Tracks (30s)</button>
                        <button class="btn-pill ${adminTab === 'appearance' ? 'active' : ''}" data-atab="appearance">Logo & Wallpapers</button>
                        <button class="btn-pill ${adminTab === 'texts' ? 'active' : ''}" data-atab="texts">Texts & Links</button>
                    </div>
                    <button class="adm-del" id="admLogoutBtn">Sign Out</button>
                </div>
                ${tabBody}
            `;
        },
        bind: (w) => {
            const refresh = () => {
                w.querySelector('.body').innerHTML = APPS.admin.render();
                APPS.admin.bind(w);
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
                        const { error } = await sb.from('tracks').insert([{
                            title,
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
                        dock_icons: SITE.dockIcons
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
                        youtube_url: SITE.links.youtube
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
            }
        }
    }
};

const dock = $('#dock');
const winContainer = $('#win');
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
        el.innerHTML = `
            <div class="dock-ic">${icContent}</div>
            <span class="dock-lbl">${esc(item.title)}</span>
        `;
        dock.append(el);
    });
    tick();
}

function updateDockIndicators() {
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
$('#bn').addEventListener('click', () => {
    brandClickCount++;
    clearTimeout(brandClickTimer);
    if (brandClickCount >= 3) {
        brandClickCount = 0;
        openApp('admin');
    } else {
        brandClickTimer = setTimeout(() => { brandClickCount = 0; }, 600);
    }
});

function updateViewportScale() {
    if (window.innerWidth <= 700) {
        document.documentElement.style.setProperty('--ui-scale', '1');
        return;
    }
    const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 955);
    document.documentElement.style.setProperty('--ui-scale', scale.toFixed(4));
}

updateViewportScale();
addEventListener('resize', updateViewportScale);

applyMedia();
syncFromSupabase();
buildDock();
setInterval(tick, 10000);
