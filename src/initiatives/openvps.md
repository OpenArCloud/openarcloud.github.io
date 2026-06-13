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

OpenVPS is the open-source Visual Positioning Service reference implementation from Open AR Cloud. It follows the OGC GeoPose standard and the OSCP GeoPoseProtocol so teams can self-host camera-based 6DoF localization without vendor lock-in or proprietary APIs.

It is a project of Open AR Cloud Europe, built by Nokia Bell Labs, and funded through NGI Atlantic and NGI Search. The site should speak like an engineering project: precise, direct, and welcoming.

## What OpenVPS Provides

Each accepted OpenVPS deployment should communicate these core points:

- Open standard support through OGC GeoPose and the OSCP GeoPoseProtocol.
- Self-hosted deployment so maps and infrastructure stay under the operator's control.
- Full localization pipeline from capture to GeoPose response.
- A batteries-included research and development foundation, not a managed cloud product.

<div style="background: rgba(15, 23, 42, 0.96); border: 1px solid rgba(77, 191, 204, 0.20); border-radius: 14px; padding: 24px; margin: 24px 0; color: #ffffff;">
    <p style="margin: 0 0 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #4dbfcc;">Copy-ready demo client</p>
    <pre style="margin: 0; white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.92rem; line-height: 1.7; color: #dbeafe;">python demo_client.py \
  --url https://YOUR_VPS_URL/localize/geopose \
  --image ./data/query.jpg \
  --camera ./data/camera_params.json \
  --geolocation ./data/geolocation_params.json</pre>
</div>

## How It Works

1. **Capture** - Use the StrayScanner or Android Kapture app to collect RGB, depth, GPS, and sensor data.
2. **MapBuilder** - Run the HLOC pipeline to generate a feature map from the captured imagery.
3. **MapAligner** - Align the feature map to OpenStreetMap footprints and produce the geo-alignment transform.
4. **MapLocalizer** - Receive the camera image and coarse location, then return a GeoPose response for OSCP clients.

## Origin Story

The OpenVPS story has two phases.

### Phase 1 - Aurora Viewer, NGI Atlantic

Open AR Cloud Europe, George Mason University, 3DInteractive, and COSMOS Lab demonstrated the first open-source VPS reference deployment on a 5G testbed. That phase proved the OSCP concept.

### Phase 2 - OSCAR4US, NGI Search

Nokia Bell Labs built the current OpenVPS stack for OARC Europe, including MapBuilder, MapAligner, MapLocalizer, and the GeoPoseProtocol compliance layer. That phase turned the proof of concept into a production-grade research tool.

## Credits

- **Dr. Gabor Soros** - Senior Research Scientist at Nokia Bell Labs and technical architect of the OpenVPS implementation.
- **Dr. Denes Bisztray** - Senior Research Engineer at Nokia Bell Labs and core implementation contributor.
- **Jan-Erik Vinje** - Co-President of Open AR Cloud Association and Managing Director of OARC Europe.
- **Ali C. Hantal** - Co-President of Open AR Cloud Association.
- **Bo Han** - Led the Aurora Viewer VPS development during the NGI Atlantic phase.

## Ecosystem

OpenVPS fits into the broader open spatial web stack:

- **GeoPose** is the standard output format.
- **GeoPoseProtocol** is the request and response API.
- **OpenVPS** is the open-source service layer.
- **OSCP** provides the wider platform architecture.
- **A spatial browser** consumes the localization and content services.

Just as the web needed standards, protocols, services, discovery, and browsers, the spatial web needs the same layered model. OpenVPS is the localization backbone in that stack.

## Site Notes

The OpenVPS page should remain hidden from the home page until the Governing Board approves public linking. The published URL should still resolve directly at `/initiatives/openvps` once the markdown page is built into the site.