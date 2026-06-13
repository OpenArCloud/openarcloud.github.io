---
layout: layouts/base.njk
title: OpenVPS
permalink: /initiatives/openvps/
---

# OpenVPS

<div style="background: linear-gradient(135deg, rgba(14, 124, 134, 0.10) 0%, rgba(77, 191, 204, 0.10) 100%); border: 1px solid rgba(14, 124, 134, 0.22); border-radius: 12px; padding: 32px; margin: 30px 0; text-align: center;">
    <p style="font-size: 1.25rem; font-weight: 700; color: var(--teal); margin-bottom: 8px;">Hidden Project Page</p>
    <p style="margin-bottom: 4px;"><strong>Open AR Cloud / OARC Europe</strong></p>
    <p style="margin-bottom: 0;">Available by URL only until Governing Board approval</p>
</div>

## The open spatial web starts here

OpenVPS is the open-source Visual Positioning Service reference implementation from Open AR Cloud. It follows the OGC GeoPose standard and the OSCP GeoPoseProtocol so any compliant client can self-host camera-based 6DoF localization — without vendor lock-in, without proprietary APIs, and without data leaving your server.

Built by Nokia Bell Labs for OARC Europe and funded through NGI Atlantic and NGI Search.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin: 32px 0;">
    <div style="background: rgba(14, 124, 134, 0.08); border: 1px solid rgba(14, 124, 134, 0.20); border-radius: 10px; padding: 16px; text-align: center;">
        <div style="font-weight: 700; color: var(--teal); margin-bottom: 4px;">MIT License</div>
        <div style="font-size: 0.85rem; color: var(--muted, #4b5563);">Open source</div>
    </div>
    <div style="background: rgba(14, 124, 134, 0.08); border: 1px solid rgba(14, 124, 134, 0.20); border-radius: 10px; padding: 16px; text-align: center;">
        <div style="font-weight: 700; color: var(--teal); margin-bottom: 4px;">GeoPose Output</div>
        <div style="font-size: 0.85rem; color: var(--muted, #4b5563);">OGC standard</div>
    </div>
    <div style="background: rgba(14, 124, 134, 0.08); border: 1px solid rgba(14, 124, 134, 0.20); border-radius: 10px; padding: 16px; text-align: center;">
        <div style="font-weight: 700; color: var(--teal); margin-bottom: 4px;">Self-Hosted</div>
        <div style="font-size: 0.85rem; color: var(--muted, #4b5563);">Your infrastructure</div>
    </div>
    <div style="background: rgba(14, 124, 134, 0.08); border: 1px solid rgba(14, 124, 134, 0.20); border-radius: 10px; padding: 16px; text-align: center;">
        <div style="font-weight: 700; color: var(--teal); margin-bottom: 4px;">HLOC Pipeline</div>
        <div style="font-size: 0.85rem; color: var(--muted, #4b5563);">Research-grade localization</div>
    </div>
</div>

## What It Is

OpenVPS is a batteries-included research and deployment foundation — not a managed cloud product. It is designed for teams that need full control over their localization infrastructure.

- **No vendor lock-in** — built on open standards that any compliant client can speak.
- **No proprietary APIs** — the GeoPoseProtocol is public and documented.
- **No data leaves your server** — maps, imagery, and query data stay on infrastructure you control.

## What You Get

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin: 24px 0;">
    <div style="border: 1px solid rgba(14, 124, 134, 0.22); border-radius: 12px; padding: 24px;">
        <div style="font-weight: 700; margin-bottom: 8px;">Open Standard Compliance</div>
        <div style="font-size: 0.92rem; color: var(--muted, #4b5563);">Adheres to OGC GeoPose and the OSCP GeoPoseProtocol. Any compliant client interacts with the same endpoint without vendor-specific rewrites.</div>
    </div>
    <div style="border: 1px solid rgba(14, 124, 134, 0.22); border-radius: 12px; padding: 24px;">
        <div style="font-weight: 700; margin-bottom: 8px;">Self-Hosted Deployment</div>
        <div style="font-size: 0.92rem; color: var(--muted, #4b5563);">Runs on your infrastructure via Docker. Supports on-premises, edge, or private cloud environments. Your maps and data never leave your control.</div>
    </div>
    <div style="border: 1px solid rgba(14, 124, 134, 0.22); border-radius: 12px; padding: 24px;">
        <div style="font-weight: 700; margin-bottom: 8px;">Complete Pipeline</div>
        <div style="font-size: 0.92rem; color: var(--muted, #4b5563);">Integrates capture, feature mapping, geo-alignment, and localization in one system — from the first scan to a live GeoPose response.</div>
    </div>
</div>

<div style="background: rgba(15, 23, 42, 0.96); border: 1px solid rgba(77, 191, 204, 0.20); border-radius: 14px; padding: 24px; margin: 24px 0; color: #ffffff;">
    <p style="margin: 0 0 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #4dbfcc;">Copy-ready demo client</p>
    <pre style="margin: 0; white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.92rem; line-height: 1.7; color: #dbeafe;">python demo_client.py \
  --url https://YOUR_VPS_URL/localize/geopose \
  --image ./data/query.jpg \
  --camera ./data/camera_params.json \
  --geolocation ./data/geolocation_params.json</pre>
</div>

## How It Works

1. **Capture** — Use the StrayScanner or Android Kapture app to collect RGB, depth, GPS, and sensor data.
2. **MapBuilder** — Run the HLOC pipeline to generate a feature map from the captured imagery.
3. **MapAligner** — Align the feature map to OpenStreetMap footprints and produce the geo-alignment transform.
4. **MapLocalizer** — Receive the camera image and coarse location, then return a GeoPose response for OSCP clients.

## Origin Story

### Phase 1 — Aurora Viewer, NGI Atlantic (2022)

Open AR Cloud Europe, George Mason University, 3DInteractive, and COSMOS Lab demonstrated the first open-source VPS reference deployment on a 5G testbed. That phase proved the OSCP concept end-to-end.

### Phase 2 — OSCAR4US, NGI Search (2024–2025)

Nokia Bell Labs built the current OpenVPS stack for OARC Europe, including MapBuilder, MapAligner, MapLocalizer, and the GeoPoseProtocol compliance layer. That phase turned the proof of concept into a production-grade research tool.

## Credits

- **Dr. Gabor Soros** — Senior Research Scientist at Nokia Bell Labs and technical architect of the OpenVPS implementation.
- **Dr. Denes Bisztray** — Senior Research Engineer at Nokia Bell Labs and core implementation contributor.
- **Alina Kadlubsky** — Managing Director of Open AR Cloud Europe.

## Ecosystem

OpenVPS fits into the broader open spatial web stack:

| Layer | Component |
|---|---|
| Standard | OGC GeoPose |
| Protocol | OSCP GeoPoseProtocol |
| Service | OpenVPS |
| Platform | OSCP |
| Client | Spatial browser |

Just as the web needed standards, protocols, services, discovery, and browsers, the spatial web needs the same layered model. OpenVPS is the localization backbone in that stack.
