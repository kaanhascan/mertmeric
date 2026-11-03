const SUPABASE_STORAGE_BASE = "https://gjbvypvyikrwicdfhler.supabase.co/storage/v1/object/public/media/";

module.exports = async function handler(req, res) {
    if (req.method === "OPTIONS") {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Range, Content-Type, Accept");
        return res.status(204).end();
    }

    if (req.method !== "GET" && req.method !== "HEAD") {
        return res.status(405).end("Method Not Allowed");
    }

    let rawPath = req.query && req.query.path;
    if (Array.isArray(rawPath)) {
        rawPath = rawPath.join("/");
    }
    if (!rawPath && req.url) {
        const urlObj = new URL(req.url, "https://mertmeric.music");
        const fromParam = urlObj.searchParams.get("path");
        if (fromParam) {
            rawPath = fromParam;
        } else if (urlObj.pathname.startsWith("/storage/")) {
            rawPath = urlObj.pathname.slice("/storage/".length);
        }
    }

    rawPath = String(rawPath || "").replace(/^\/+/, "");
    if (!rawPath || rawPath.includes("..")) {
        return res.status(400).end("Bad Request");
    }

    const encodedPath = rawPath
        .split("/")
        .map(seg => encodeURIComponent(decodeURIComponent(seg)))
        .join("/");

    const targetUrl = SUPABASE_STORAGE_BASE + encodedPath;

    try {
        const upstreamHeaders = {};
        if (req.headers.range) {
            upstreamHeaders["Range"] = req.headers.range;
        }

        const upstream = await fetch(targetUrl, {
            method: req.method,
            headers: upstreamHeaders
        });

        if (!upstream.ok && upstream.status !== 206 && upstream.status !== 304) {
            res.setHeader("Cache-Control", "no-store");
            return res.status(upstream.status).end();
        }

        const contentType = upstream.headers.get("content-type");
        if (contentType) res.setHeader("Content-Type", contentType);

        const etag = upstream.headers.get("etag");
        if (etag) res.setHeader("ETag", etag);

        const lastModified = upstream.headers.get("last-modified");
        if (lastModified) res.setHeader("Last-Modified", lastModified);

        const acceptRanges = upstream.headers.get("accept-ranges");
        if (acceptRanges) res.setHeader("Accept-Ranges", acceptRanges);

        const contentRange = upstream.headers.get("content-range");
        if (contentRange) res.setHeader("Content-Range", contentRange);

        res.setHeader("Access-Control-Allow-Origin", "*");

        const cacheValue = "public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400, immutable";
        res.setHeader("Cache-Control", cacheValue);
        res.setHeader("CDN-Cache-Control", cacheValue);
        res.setHeader("Vercel-CDN-Cache-Control", cacheValue);

        if (req.method === "HEAD") {
            const len = upstream.headers.get("content-length");
            if (len) res.setHeader("Content-Length", len);
            return res.status(upstream.status).end();
        }

        const arrayBuffer = await upstream.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader("Content-Length", buffer.length);
        return res.status(upstream.status).send(buffer);
    } catch (err) {
        return res.status(502).end("Bad Gateway");
    }
};

