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

## Purpose of the Demonstrations

These demonstrations show how different augmented reality clients can visualize geospatially anchored content using the [OGC GeoPose 1.0 Data Exchange Standard](https://docs.ogc.org/is/21-056r11/21-056r11.html) and Open AR Cloud’s OSCP protocols. The MyGeoVerse demo also demonstrates interoperability using the [OGC Points of Interest (POI) Conceptual Model Standard](https://htmlpreview.github.io/?https://github.com/opengeospatial/poi/blob/main/21-049/21-049.html).

Interoperability requires implementations on both the client and server sides. Spatial browser apps obtain GeoPose estimates through their configured localization services and discover published content through the relevant content services. OSCP Spatial Content Discovery supports the discovery of 3D objects anchored to the real world using GeoPose, while a POI content provider service makes POI information available.

In Bari, Demo 1 uses MyGeoVerse as the publisher and includes both GLB content and POIs. Demo 2 uses Augmented City as the publisher and includes GLB content only. In each demonstration, the same published content can be viewed through two different spatial browser apps, each using a different VPS service for localization. This demonstrates interoperability across content publishing, spatial browsing, and visual positioning, allowing users to experience the same content at its intended real-world location through different combinations of applications and services.

## A Milestone for the Open Spatial Web

At IEEE ISMAR 2026 in Bari, Open AR Cloud is bringing together an ecosystem of **two content publishers, three spatial browser apps, and four VPS service providers** for the first time in its interoperability demonstrations, built around the OGC GeoPose and POI Standards and OSCP protocols.

<div class="stats-grid milestone-stats">
    <div class="stat"><h3>2</h3><p>Content Publishers</p></div>
    <div class="stat"><h3>3</h3><p>Spatial Browser Apps</p></div>
    <div class="stat"><h3>4</h3><p>VPS Service Providers</p></div>
</div>

The significance goes beyond the number of participating applications and services: these demonstrations show how different publishers, native mobile and WebXR browsers, and localization providers can work together to deliver shared spatial experiences.

The two hands-on demos below showcase selected combinations from this ecosystem. Each pairs two spatial browsers with two different VPS services to display the same published content at its intended real-world location.

## Standards & Protocol References

- [OGC GeoPose Data Exchange Standard 1.0](https://docs.ogc.org/is/21-056r11/21-056r11.html)
- [OGC Points of Interest (POI) Conceptual Model Standard](https://htmlpreview.github.io/?https://github.com/opengeospatial/poi/blob/main/21-049/21-049.html)
- [OSCP GeoPose Protocol](https://github.com/OpenArCloud/oscp-geopose-protocol)
- [OSCP Spatial Content Discovery](https://github.com/OpenArCloud/oscp-spatial-content-discovery)

## The Bari Demo Ecosystem

<figure class="demo-chart">
    <a href="/img/demos/Demo_Chart.png?v=3" target="_blank" rel="noopener">
        <img src="/img/demos/Demo_Chart.png?v=3" width="1015" height="568" alt="Demo overview: two publishers (Augmented City, MyGeoVerse) feed three spatial browser apps (Augmented City ACO Viewer and MyGeoVerse as native mobile apps, spARcl as a WebXR mobile app), localized by four VPS service providers (OpenVPS, Augmented City, Immersal, MultiSet), built on SpatialDDS, OSCP, GeoPose and OGC POI.">
    </a>
    <figcaption>Tap or click the diagram to open a larger version.</figcaption>
</figure>

- **Two content publishers:** Augmented City and MyGeoVerse by XR Masters.
- **Three spatial browser apps:** spARcl by Open AR Cloud, ACO Viewer by Augmented City, and MyGeoVerse by XR Masters.
- **Four VPS service providers:** OpenVPS by Open AR Cloud, Augmented City, Immersal, and MultiSet.

We have prepared two demos showcasing different combinations of these publishers, spatial browsers, and localization services. You can try them yourself by following the step-by-step instructions below.

<section class="demo-block" id="demo-1">

## Demo 1: GLB Content &amp; POI Interoperability

**Publisher:** MyGeoVerse by XR Masters

View the same GLB content and POIs in MyGeoVerse using MultiSet VPS and in spARcl using OpenVPS.

<div class="table-wrap">
<table class="config-table">
<thead><tr><th>Spatial browser</th><th>Localization method</th></tr></thead>
<tbody>
<tr><td>spARcl by Open AR Cloud</td><td>OpenVPS by Open AR Cloud</td></tr>
<tr><td>MyGeoVerse by XR Masters</td><td>MultiSet VPS</td></tr>
</tbody>
</table>
</div>

### Demo 1: Step-by-Step Instructions

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

1. Open our spARcl WebXR app in Android Chrome: <a href="https://sparcl.orbit-lab.org/" target="_blank" rel="noopener noreferrer">https://sparcl.orbit-lab.org/</a> or <a href="#open-sparcl">scan the QR code below</a>.
2. Enable WebXR Incubation in `chrome://flags` settings.
3. Enable Location access.
4. Follow the instructions in the app.

</section>

<section class="demo-block" id="demo-2">

## Demo 2: GLB Content Interoperability

**Publisher:** <a href="https://augmented.city/" target="_blank" rel="noopener noreferrer">Augmented City</a>

View the same GLB content in ACO Viewer using Augmented City VPS and in spARcl using OpenVPS.

<div class="table-wrap">
<table class="config-table">
<thead><tr><th>Spatial browser</th><th>Localization method</th></tr></thead>
<tbody>
<tr><td>spARcl by Open AR Cloud</td><td>OpenVPS by Open AR Cloud</td></tr>
<tr><td>ACO Viewer by Augmented City</td><td>Augmented City VPS</td></tr>
</tbody>
</table>
</div>

### Demo 2: Step-by-Step Instructions

<p class="pending">Pending for Augmented City</p>

</section>

<section id="download-apps">

## Download the Apps &amp; Open spARcl

spARcl runs in the browser, so there is nothing to install. ACO Viewer and MyGeoVerse are native mobile apps.

<div class="qr-grid">
    <div class="qr-card">
        <h3>ACO Viewer</h3>
        <p>by Augmented City</p>
        <a href="https://augmented-city-srl.github.io/AC-Viewer_landing-page/redirect.html" target="_blank" rel="noopener noreferrer"><img src="/img/QRcodes/QR-ACODownload-web.png" width="600" height="600" alt="QR code to download the ACO Viewer app" loading="lazy"></a>
        <a class="qr-button" href="https://augmented-city-srl.github.io/AC-Viewer_landing-page/redirect.html" target="_blank" rel="noopener noreferrer">Download ACO Viewer</a>
    </div>
    <div class="qr-card">
        <h3>MyGeoVerse</h3>
        <p>by XR Masters</p>
        <a href="https://www.xr-masters.com/mobile-app/" target="_blank" rel="noopener noreferrer"><img src="/img/QRcodes/QR-MGVDownload-web.png" width="600" height="600" alt="QR code to download the MyGeoVerse app" loading="lazy"></a>
        <a class="qr-button" href="https://www.xr-masters.com/mobile-app/" target="_blank" rel="noopener noreferrer">Download MyGeoVerse</a>
    </div>
    <div class="qr-card" id="open-sparcl">
        <h3>spARcl</h3>
        <p>by Open AR Cloud · runs in Chrome on Android</p>
        <a href="https://sparcl.orbit-lab.org/" target="_blank" rel="noopener noreferrer"><img src="/img/QRcodes/QR-sparcl-web.png" width="600" height="600" alt="QR code to open the spARcl WebXR spatial browser" loading="lazy"></a>
        <a class="qr-button" href="https://sparcl.orbit-lab.org/" target="_blank" rel="noopener noreferrer">Open spARcl</a>
    </div>
</div>

</section>
