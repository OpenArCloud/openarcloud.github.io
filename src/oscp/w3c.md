---
layout: layouts/base.njk
title: GeoPose & POI Demos at W3C Immersive Web
---

# GeoPose & POI Interoperability Demos for an Open Spatial Web Platform

<div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 12px; padding: 32px; margin: 30px 0; text-align: center;">
    <p style="font-size: 1.25rem; font-weight: 600; color: var(--primary-violet); margin-bottom: 8px;">W3C Immersive Web Face-to-Face Event</p>
    <p style="margin-bottom: 4px;"><strong>Google Campus</strong></p>
    <p style="margin-bottom: 0;">In front of Building 43 — 1612 Charleston Rd, Mountain View, CA 94043</p>
</div>

## Purpose of the Demonstrations

These demos show how different Augmented Reality Clients are able to visualize geospatially-anchored content and leverage an existing open standard ([OGC GeoPose 1.0 Data Exchange Standard](https://docs.ogc.org/is/21-056r11/21-056r11.html)) together with another open standard ([OGC Points of Interest (POI) Conceptual Model Standard](https://htmlpreview.github.io/?https://github.com/opengeospatial/poi/blob/main/21-049/21-049.html)). This requires implementations both on the client- and server-side. Both clients ask for a GeoPose estimate from an OSCP GeoPose Service. And there is a POI content provider service (for the POIs), as well as a different OSCP Content discovery service for 3D objects anchored to the world with GeoPose.

## Standards & Protocol References

- [OGC GeoPose Data Exchange Standard 1.0](https://docs.ogc.org/is/21-056r11/21-056r11.html)
- [OGC Points of Interest (POI) Conceptual Model Standard](https://htmlpreview.github.io/?https://github.com/opengeospatial/poi/blob/main/21-049/21-049.html)
- [OSCP GeoPose Protocol](https://github.com/OpenArCloud/oscp-geopose-protocol)
- [OSCP Spatial Content Discovery](https://github.com/OpenArCloud/oscp-spatial-content-discovery)

## Demo Clients

Two Spatial Browsers:

- **spARcl WebXR spatial browser** — a web browser by Open AR Cloud
- **MyGeoVerse spatial browser** — a native app by [XR Masters](https://xr-masters.com)

Both clients are available from the [MyGeoVerse download page](https://xr-masters.com/mygeoverse-download-page/).

## How It Works

1. Both MyGeoVerse and spARcl clients can connect to an OSCP GeoPose service using the Visual Positioning (VPS) implementation from [Augmented City](https://www.augmented.city). This service is referred to as the GeoPose VPS server. Both clients send camera images and metadata to the GeoPose VPS server and receive their GeoPose estimates in return.

2. With GeoPose estimates, the clients should have an accurate understanding of the smartphone's real-world position and orientation (GeoPose).

3. The clients query POI services and OSCP Content discovery services to learn if there is any content at real world locations near the user that can be displayed.

4. If such content exists the clients display the content from different providers correctly at the real world position where the content is intended to be.

## Step-by-Step Instructions

Follow the steps below to first create a POI and to place a 3D OGC Logo and then view them using MyGeoVerse native app (Steps 1 through 4). Then view the same content using the web browser spARcl (Step 5).

**If you are at Google Campuses, you can try the demos yourself!**

Download MyGeoVerse spatial browser app on Apple App Store or Google Play Store. After downloading, open the MyGeoVerse App and register.

### Step 1
Watch the "How 2 Localize" video to find where the AR experience starts.

### Step 2
Once you are there hit the "Start" button on the app and point the camera to the area around the entrance of Building 43.

### Step 3
Select "Create Item" on the app menu. Write "OGC" on the search field and click on the OGC (GLB) logo and hit the "Select" button. Then tap the screen to place the logo at your desired location.

### Step 4
Select "Create POI" on the app menu and tap to place the POI at your desired location. Then, fill in the form about the POI you would like to create. When you are done, hit "Create".

**Congratulations!** You have created a POI and placed a Logo (glb format).

Now, you can restart MyGeoVerse and view the content you created, hopefully, at the exact location you placed them. If so, you can now move onto the next step and view the same content using the spARcl WebXR web browser.

### Step 5
Follow the instructions below to view the same content with spARcl!

<div style="text-align: center; margin: 40px 0;">
    <a href="/platform/" class="secondary-button">← Back to OSCP Platform</a>
</div>
