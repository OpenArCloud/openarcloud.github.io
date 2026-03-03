---
layout: layouts/base.njk
title: GeoPose & POI Demos — Delft
---

# GeoPose & POI Interoperability Demos at 128th OGC Member Meeting, Delft

<div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 12px; padding: 32px; margin: 30px 0; text-align: center;">
    <p style="font-size: 1.25rem; font-weight: 600; color: var(--primary-violet); margin-bottom: 8px;">128th OGC Member Meeting — Delft</p>
    <p style="margin-bottom: 0;">Open AR Cloud Team's presentation at the OGC SWG Meeting</p>
</div>

## Points Of Interest

One of the classical types of spatial content is "Points of Interest" (POI's). They are part of our daily lives when we use online maps on our smartphones to navigate the world. Although they come in many variations a "point of interest" (POI) is a location for which information is available. It could be information about a bus stop, a famous statue, an entrance to a building or even the location of an imaginary object like a "gym" in the game Pokemon Go.

## Incompatible Formats and Proprietary Solutions Is the Current Reality

When working with POI data one of the biggest challenges is that such data had not been standardized outside of limited industry verticals. There are no universal standards that cover all types of POI data that any publisher or consumer of such data could leverage. Large companies can afford at great cost to aggregate different types of POI data and make it available through their proprietary platforms. Smaller companies and researchers are typically unable to take on such efforts.

## The OGC POI Standard

The OGC Points of Interest (POI) Conceptual Model Standard provides a universal framework for POI data. When these POI data are used together with the OGC GeoPose 1.0 Standard for position and orientation, all the pieces are in place for sharing and accessing POI content across different applications. Both of these OGC standards are key building blocks of the Open AR Cloud's Open Spatial Computing Platform (OSCP).

## Standards & Protocol References

- [OGC GeoPose 1.0 Data Exchange Standard](https://docs.ogc.org/is/21-056r11/21-056r11.html)
- [OGC Points of Interest (POI) Conceptual Model Standard](https://htmlpreview.github.io/?https://github.com/opengeospatial/poi/blob/main/21-049/21-049.html)
- [OSCP GeoPose Protocol](https://github.com/OpenArCloud/oscp-geopose-protocol)
- [OSCP Spatial Content Discovery](https://github.com/OpenArCloud/oscp-spatial-content-discovery)

## Demonstration

The demos show how different Augmented Reality Clients are able to visualize geospatially-anchored content and leverage an existing open standard (OGC GeoPose 1.0 Data Exchange Standard) together with another open standard (OGC Points of Interest (POI) Conceptual Model Standard).

### Two Spatial Browsers

- **spARcl WebXR spatial browser** — a web browser by Open AR Cloud
- **MyGeoVerse spatial browser** — a native app by [XR Masters](https://xr-masters.com). XR Masters is a member of Open AR Cloud.

### How It Works

1. Both MyGeoVerse and spARcl clients can connect to an OSCP GeoPose service using the Visual Positioning (VPS) implementation from [Augmented City](https://www.augmented.city). This service is referred to as the GeoPose VPS server. Both clients send camera images and metadata to the GeoPose VPS server and receive their GeoPose estimates in return.

2. With GeoPose estimates, the clients should have an accurate understanding of the smartphone's real-world position and orientation (GeoPose).

3. The clients query POI services and OSCP Content discovery services to learn if there is any content at real world locations near the user that can be displayed.

4. If such content exists the clients display the content from different providers correctly at the real world position where the content is intended to be.

## Step-by-Step Instructions

Download MyGeoVerse spatial browser app on Apple App Store or Google Play Store. After downloading, open the MyGeoVerse App and register.

### Step 1
Watch the "How 2 Localize" video to find where the AR experience starts.

### Step 2
Once you are there hit the "Start" button on the app and point the camera to the area.

### Step 3
Now the app should be localized. Swipe the menu bar on the lower part of the screen and select "View" to see the content that is already placed at this location.

### Step 4
Select "Create Item" on the app menu. Write "OGC" on the search field and click on the OGC (GLB) logo and hit the "Select" button. Then tap the screen to place the logo at your desired location.

### Step 5
Select "Create POI" on the app menu and tap to place the POI at your desired location. Then, fill in the form about the POI you would like to create. When you are done, hit "Create".

**Congratulations!** You have created a POI and placed an OGC Logo.

Now, you can restart MyGeoVerse and view the content you created, hopefully, at the exact location you placed them. If so, you can now move onto the next step and view the same content using the spARcl WebXR web browser.

### Step 6
Follow the instructions below to view the same content with spARcl!

<div style="text-align: center; margin: 40px 0;">
    <a href="/platform/" class="secondary-button">← Back to OSCP Platform</a>
</div>
