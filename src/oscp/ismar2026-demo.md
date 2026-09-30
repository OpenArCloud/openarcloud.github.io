---
layout: layouts/base.njk
title: GeoPose & POI Interoperability Demos at IEEE ISMAR 2026, Bari
permalink: /oscp/ismar2026-demo/
---

# GeoPose & POI Interoperability Demos for an Open Spatial Web Platform

<div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 12px; padding: 32px; margin: 30px 0; text-align: center;">
    <p style="font-size: 1.25rem; font-weight: 600; color: var(--primary-violet); margin-bottom: 8px;">IEEE ISMAR 2026 · Bari, Italy</p>
    <p style="margin-bottom: 4px;"><strong>In front of The Nicolaus Hotel</strong></p>
    <p class="pending" style="margin-bottom: 0;">Exact details pending for on-site mapping and testing</p>
</div>

For the first time this year, we are bringing together two content publishers, three spatial browser apps, and four VPS service providers in demonstrations built around the OGC GeoPose Standard and Open AR Cloud’s OSCP protocols.

<figure class="demo-chart">
    <a href="/img/demos/Demo_Chart.png?v=2" target="_blank" rel="noopener">
        <img src="/img/demos/Demo_Chart.png?v=2" width="1178" height="661" alt="Demo overview: two publishers (Augmented City, MyGeoVerse) feed three spatial browser apps (Augmented City ACO Viewer and MyGeoVerse as native mobile apps, spARcl as a WebXR mobile app), localized by four VPS service providers (OpenVPS, Augmented City, Immersal, MultiSet), built on OSCP, GeoPose and OGC POIs.">
    </a>
    <figcaption>Tap or click the diagram to open a larger version.</figcaption>
</figure>

- **Two content publishers:** Augmented City and MyGeoVerse by XR Masters.
- **Three spatial browser apps:** spARcl by Open AR Cloud, ACO Viewer by Augmented City, and MyGeoVerse by XR Masters.
- **Four VPS service providers:** OpenVPS by Open AR Cloud, Augmented City, Immersal, and MultiSet.

We have prepared two demos showcasing different combinations of these publishers, spatial browsers, and localization services. You can try them yourself by following the step-by-step instructions below.

<section class="demo-block" id="demo-1">

## Demo 1: Augmented City as Publisher

**Publisher:** <a href="https://augmented.city/" target="_blank" rel="noopener noreferrer">Augmented City</a>

<div class="table-wrap">
<table class="config-table">
<thead><tr><th>Spatial browser</th><th>Localization method</th></tr></thead>
<tbody>
<tr><td>spARcl by Open AR Cloud</td><td>OpenVPS by Open AR Cloud</td></tr>
<tr><td>ACO Viewer by Augmented City</td><td>Augmented City VPS</td></tr>
</tbody>
</table>
</div>

### Demo 1: Step-by-Step Instructions

<p class="pending">Pending for Augmented City</p>

</section>

<section class="demo-block" id="demo-2">

## Demo 2: MyGeoVerse as Publisher

**Publisher:** MyGeoVerse by XR Masters

<div class="table-wrap">
<table class="config-table">
<thead><tr><th>Spatial browser</th><th>Localization method</th></tr></thead>
<tbody>
<tr><td>spARcl by Open AR Cloud</td><td>OpenVPS by Open AR Cloud</td></tr>
<tr><td>MyGeoVerse by XR Masters</td><td>MultiSet VPS</td></tr>
</tbody>
</table>
</div>

### Demo 2: Step-by-Step Instructions

#### Step 1: Open MyGeoVerse

Go to the AR experience starting point and open the MyGeoVerse app. Don’t have it yet? [Download MyGeoVerse](#download-apps) at the bottom of this page.

#### Step 2: Select the Localization Method

Open the hamburger menu and tap “Settings.” Under “Localization Method,” select “MultiSet.”

#### Step 3: Localize

Tap “Start” and point your camera toward the designated area.

<p class="pending">Camera target pending on-site tests.</p>

#### Step 4: Place the OGC Logo

Select “Create Item” from the app menu. Enter “OGC” in the search field, choose the OGC (GLB) logo, and tap “Select.” Then tap the screen to place the logo at your desired location.

#### Step 5: Create a POI

Select “Create POI” from the app menu and tap to place the POI at your desired location. Complete the form with the POI details, then tap “Create.”

**Congratulations!** You have created a POI and placed a 3D OGC logo in GLB format.

#### Step 6: View the Content in MyGeoVerse

Restart MyGeoVerse and repeat Steps 1–3 to localize. View the POI and logo at the locations where you placed them.

Next, view the same content using the spARcl WebXR spatial browser.

#### Step 7: View the Same Content in spARcl

1. Open our spARcl WebXR app in Android Chrome: <a href="https://sparcl.orbit-lab.org/" target="_blank" rel="noopener noreferrer">https://sparcl.orbit-lab.org/</a>
2. Enable WebXR Incubation in `chrome://flags` settings.
3. Enable Location access.
4. Follow the instructions in the app.

</section>

<section id="download-apps">

## Download the Apps &amp; Open spARcl

spARcl runs in the browser, so there is nothing to install. ACO Viewer and MyGeoVerse are native mobile apps.

<div class="qr-grid">
    <div class="qr-card">
        <h3>ACO Viewer</h3>
        <p>by Augmented City</p>
        <a href="https://augmented-city-srl.github.io/AC-Viewer_landing-page/redirect.html" target="_blank" rel="noopener noreferrer"><img src="/img/QRcodes/QR-ACODownload.png" width="220" height="220" alt="QR code to download the ACO Viewer app" loading="lazy"></a>
        <a class="primary-button" href="https://augmented-city-srl.github.io/AC-Viewer_landing-page/redirect.html" target="_blank" rel="noopener noreferrer">Download ACO Viewer</a>
    </div>
    <div class="qr-card">
        <h3>MyGeoVerse</h3>
        <p>by XR Masters</p>
        <a href="https://www.xr-masters.com/mobile-app/" target="_blank" rel="noopener noreferrer"><img src="/img/QRcodes/QR-MGVDownload.png" width="220" height="220" alt="QR code to download the MyGeoVerse app" loading="lazy"></a>
        <a class="primary-button" href="https://www.xr-masters.com/mobile-app/" target="_blank" rel="noopener noreferrer">Download MyGeoVerse</a>
    </div>
    <div class="qr-card">
        <h3>spARcl</h3>
        <p>by Open AR Cloud · runs in Chrome on Android</p>
        <a href="https://sparcl.orbit-lab.org/" target="_blank" rel="noopener noreferrer"><img src="/img/QRcodes/QR-sparcl.png" width="220" height="220" alt="QR code to open the spARcl WebXR spatial browser" loading="lazy"></a>
        <a class="primary-button" href="https://sparcl.orbit-lab.org/" target="_blank" rel="noopener noreferrer">Open spARcl</a>
    </div>
</div>

</section>
