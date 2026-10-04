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

In Bari, Demo 1 uses MyGeoVerse as the publisher and includes both GLB content and POIs. Demo 2 uses Augmented City as the publisher and includes GLB content only. Demo 2 demonstrates shared GLB content across AC Viewer using Augmented City VPS and spARcl using OpenVPS. Alternatively, spARcl can also use Augmented City VPS. In each demonstration, the same published content can be viewed through two different spatial browser apps. This demonstrates interoperability across content publishing, spatial browsing, and visual positioning, allowing users to experience the same content at its intended real-world location through different combinations of applications and services.

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
    <a href="/img/demos/Demo_Chart.png?v=5" target="_blank" rel="noopener">
        <img src="/img/demos/Demo_Chart.png?v=5" width="2190" height="1200" alt="Demo overview: two publishers (Augmented City, MyGeoVerse) feed three spatial browser apps (Augmented City AC Viewer and MyGeoVerse as native mobile apps, spARcl as a WebXR mobile app), localized by four VPS service providers (OpenVPS, Augmented City, Immersal, MultiSet), built on SpatialDDS, OSCP, GeoPose and OGC POI.">
    </a>
    <figcaption>Tap or click the diagram to open a larger version.</figcaption>
</figure>

- **Two content publishers:** Augmented City and MyGeoVerse by XR Masters.
- **Three spatial browser apps:** spARcl by Open AR Cloud, AC Viewer by Augmented City, and MyGeoVerse by XR Masters.
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

Go to a previously scanned area, such as the area near the Nicolaus Hotel.

Tap “Start” and point your camera toward the designated area.

<p class="pending">Camera target pending on-site tests.</p>

- Hold the phone or tablet vertically.
- Avoid pointing the camera only at the floor.
- Wait a few seconds for localization and AR content to load.

If localization fails, move to another position within the scanned area and repeat the localization step.

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

View the same shared GLB content first in AC Viewer, then in spARcl using Augmented City VPS and OpenVPS.

<div class="table-wrap">
<table class="config-table">
<thead><tr><th>Spatial browser</th><th>Localization method</th></tr></thead>
<tbody>
<tr><td>spARcl by Open AR Cloud</td><td>Augmented City VPS or OpenVPS by Open AR Cloud</td></tr>
<tr><td>AC Viewer by Augmented City</td><td>Augmented City VPS</td></tr>
</tbody>
</table>
</div>

### Demo 2: Step-by-Step Instructions

#### Step 1: Open AC Viewer

Go to the AR experience starting point and open AC Viewer. Don’t have it yet? [Download AC Viewer](#download-apps) at the bottom of this page. After installing, open the app and grant the requested permissions.

#### Step 2: Localize

Go to a previously scanned area, such as the area near the Nicolaus Hotel.

Tap “START AR” and point your camera toward the designated area.

<p class="pending">Camera target pending on-site tests.</p>

- Hold the phone or tablet vertically.
- Avoid pointing the camera only at the floor.
- Wait a few seconds for localization and AR content to load.

If localization fails, move to another position within the scanned area and repeat the localization step.

#### Step 3: Place a GLB Model

You can add a GLB model in AC Viewer and then view it in spARcl. Some of the existing content is already available in spARcl because it was placed in GLB format.

A custom model should be small and lightweight, hosted online, and accessible through a direct GLB URL entered in the Path field. You can also use the example model below.

<div class="step-with-shots">
<div>

1. Open the two-line menu in the top-right corner.
2. Select “Settings” → “Authorization”.
3. Log in with the demo credentials provided by Augmented City exclusively for this demo:<br>Login: <code>augcitydemo@gmail.com</code><br>Password: <code>ACdemo2026</code>
4. Wait for “You are logged in”.
5. After the app restarts automatically, tap “START AR” and localize again.
6. Tap “+ ADD GLB from path”.
7. In Name, enter your name.
8. In Path, enter the example model URL:<br><span class="glb-url">https://raw.githubusercontent.com/mdivietrolt/models/main/ISMAR-ac-mongolfiera.glb</span>
9. Tap “Create” to load the hot-air balloon featuring the Augmented City logo.
10. Tap “+ ADD” to permanently place the model at the scanned location.

</div>
<div class="app-shots" style="display: flex; gap: 12px; align-items: flex-start;">
    <figure style="margin: 0; flex: 0 1 120px; max-width: 120px;"><a href="/img/demos/ac-viewer-add-menu.jpg" target="_blank" rel="noopener"><img src="/img/demos/ac-viewer-add-menu.jpg" width="600" height="1347" style="width: 100%; height: auto; border-radius: 8px;" alt="AC Viewer add menu with the “+ Add GLB from path” button" loading="lazy"></a><figcaption>The add menu</figcaption></figure>
    <figure style="margin: 0; flex: 0 1 120px; max-width: 120px;"><a href="/img/demos/ac-viewer-glb-form.jpg" target="_blank" rel="noopener"><img src="/img/demos/ac-viewer-glb-form.jpg" width="600" height="1347" style="width: 100%; height: auto; border-radius: 8px;" alt="AC Viewer form “Enter GLB model info” with Name and GLB File Path fields and a Create button" loading="lazy"></a><figcaption>Name and Path fields</figcaption></figure>
</div>
</div>

**Congratulations!** You have placed content with AC Viewer.

#### Step 4: View the Content in AC Viewer

Restart AC Viewer, tap “START AR”, and localize again to view the content you placed.

#### Step 5: View the AC content in spARcl Web App

1. Open <a href="https://sparcl.orbit-lab.org/" target="_blank" rel="noopener noreferrer">https://sparcl.orbit-lab.org/</a> in Chrome on an Android device.
2. Select “AugmentedCity Content ISMAR2026”.
3. Enable “AC GeoPose ISMAR26” to use AC VPS. Alternatively, enable “OpenVPS GeoPose ISMAR2026” to use OpenVPS for localization.

</section>

<section id="download-apps">

## Download the Apps &amp; Open spARcl

spARcl runs in the browser, so there is nothing to install. AC Viewer and MyGeoVerse are native mobile apps.

<div class="qr-grid">
    <div class="qr-card">
        <h3>AC Viewer</h3>
        <p>by Augmented City</p>
        <a href="https://augmented-city-srl.github.io/AC-Viewer_landing-page/redirect.html" target="_blank" rel="noopener noreferrer"><img src="/img/QRcodes/QR-ACODownload-web.png" width="600" height="600" alt="QR code to download the AC Viewer app" loading="lazy"></a>
        <a class="qr-button" href="https://augmented-city-srl.github.io/AC-Viewer_landing-page/redirect.html" target="_blank" rel="noopener noreferrer">Download AC Viewer</a>
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
