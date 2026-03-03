---
layout: layouts/base.njk
title: Open Spatial Computing Platform
---

<div class="hero-section">
    <div class="spatial-coordinates" id="coords">[37.7749° N, 122.4194° W, 0m]</div>
    <h1 class="hero-title">Building a Better Reality Together</h1>
    <div class="hero-subtitle">
        <span class="typing-effect">Connecting Physical and Digital Worlds Through Open Standards</span>
    </div>
    <p class="hero-description">Open AR Cloud's mission is to drive the development of open and interoperable spatial computing technology, data and standards to connect the physical and digital worlds for the benefit of all.</p>
</div>

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/UpKUuVSMOh4" title="Open AR Cloud - OSCP Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Get Started with OSCP

<div class="cta-grid">
    <a href="/github/" class="cta-card">
        <h3>📦 Explore GitHub Repos</h3>
        <p>Access open source implementations of all OSCP services, ready for deployment on edge infrastructure.</p>
    </a>
    <a href="https://github.com/OpenArCloud/OSCP-Docs" target="_blank" class="cta-card">
        <h3>🔧 Technical Documentation</h3>
        <p>Deep dive into the OSCP architecture, protocols, and standards that power spatial computing.</p>
    </a>
    <a href="https://ko-fi.com/openarcloud" target="_blank" class="cta-card">
        <h3>🤝 Join the Community</h3>
        <p>Become part of 300+ members working together to build the future of spatial computing.</p>
    </a>
</div>

## Why Open Spatial Computing?

### Decentralized by Design
All OSCP services are designed to run on edge infrastructure rather than centralized cloud services, ensuring low latency and data sovereignty.

### Open Source Everything
Every OSCP service has open source implementations available on GitHub. All protocols are in the public domain and leverage existing open standards.

### Platform Agnostic
Client implementations support XR headsets, mobile platforms, robotics, and more - with libraries available for academic and commercial use.

## Core Components

- **Spatial Service Discovery** - Root-level registry for all spatial services
- **GeoPose Protocol** - Standard for positioning and orientation in space
- **Spatial Content Discovery** - Search and discover spatially-anchored content
- **Reality Modeling** - Support for BIM, IoT, GIS, USD, glTF, and 3D tiles
- **Edge-Optimized Rendering** - 5G-enabled cloud rendering at the edge
- **[OpenVPS](https://github.com/OpenArCloud/openvps)** - Open Visual Positioning System for camera-based localization
- **[SpatialDDS](https://github.com/OpenArCloud/SpatialDDS-spec)** - Protocol specification for real-world spatial computing

## OSCP In Action

<div class="cta-grid">
    <a href="/oscp/ubicomp/" class="cta-card">
        <h3>UbiComp ISWC 2025 Tutorial</h3>
        <p>Building interoperable location-based AR with the Open AR Cloud. Full session schedule, slides, code, and presenter bios from Aalto University, Helsinki.</p>
    </a>
    <a href="/oscp/poi/" class="cta-card">
        <h3>POI Interoperability Demos</h3>
        <p>See how multiple spatial browsers visualize geospatially-anchored content using OGC GeoPose and POI standards. Live demos from OGC and W3C events.</p>
    </a>
    <a href="/platform/#demos--tutorials" class="cta-card">
        <h3>All Demos & Tutorials</h3>
        <p>Browse the full collection of OSCP demos, tutorials, and event walkthroughs on the Platform page.</p>
    </a>
</div>

<div class="stats-grid">
    <div class="stat">
        <h3>300+</h3>
        <p>Community Members</p>
    </div>
    <div class="stat">
        <h3>60+</h3>
        <p>Partner Organizations</p>
    </div>
    <div class="stat">
        <h3>4</h3>
        <p>Active Testbeds</p>
    </div>
</div>

## Ready to Build?

Start implementing the Open Spatial Computing Platform today. All code, documentation, and standards are freely available.

<div style="text-align: center; margin: 40px 0;">
    <a href="https://github.com/OpenARCloud" target="_blank" class="primary-button">Get Started on GitHub →</a>
</div>

<script>
(function() {
    // Real GeoPose viewpoints showcasing various use cases:
    // - Smartphones at street level, HMDs in buildings, drones aerial, subway underground
    // - Pitch varies: looking up at tall structures, down from heights, level for landscapes
    // - Roll varies: tilted cameras, banking drones, level devices
    const locations = [
        // Street level / Pedestrian (h: 1.5-2m, smartphone/HMD height)
        { lat: 48.8616, lon: 2.2889, h: 1.6, yaw: 2.29, pitch: 0.52, roll: 0, desc: "Paris: Looking up at Eiffel Tower from Trocadero" },
        { lat: 40.7033, lon: -74.017, h: 1.7, yaw: 4.12, pitch: 0.15, roll: 0.02, desc: "New York: Smartphone view of Statue of Liberty" },
        { lat: 19.4326, lon: -99.1332, h: 1.5, yaw: 0.07, pitch: 0.35, roll: 0, desc: "Mexico City: HMD looking up at Cathedral" },
        { lat: 50.8467, lon: 4.3525, h: 1.7, yaw: 4.97, pitch: 0.42, roll: -0.01, desc: "Brussels: Tourist photographing Town Hall" },

        // Underground / Subway (negative h)
        { lat: 51.5033, lon: -0.1196, h: -25, yaw: 1.57, pitch: 0, roll: 0, desc: "London: Westminster tube platform" },
        { lat: 35.6585, lon: 139.7454, h: -15, yaw: 3.14, pitch: 0.05, roll: 0, desc: "Tokyo: Shibuya station underground" },
        { lat: 40.7128, lon: -74.0060, h: -20, yaw: 5.50, pitch: -0.02, roll: 0, desc: "New York: Grand Central subway level" },

        // Vehicle level (h: 1-1.5m, car dashcam/AR navigation)
        { lat: 37.8107, lon: -122.4769, h: 1.2, yaw: 6.14, pitch: 0.08, roll: 0.03, desc: "San Francisco: Car crossing Golden Gate Bridge" },
        { lat: 25.1924, lon: 55.2793, h: 1.3, yaw: 5.54, pitch: 0.61, roll: 0, desc: "Dubai: Driving toward Burj Khalifa" },
        { lat: 44.9802, lon: -93.2558, h: 1.2, yaw: 4.50, pitch: 0.12, roll: -0.02, desc: "Minneapolis: Driving across Stone Arch Bridge" },

        // Building interior / Office (h: varies by floor)
        { lat: 22.5467, lon: 114.0579, h: 320, yaw: 3.45, pitch: -0.25, roll: 0, desc: "Shenzhen: Office view from Ping An Tower" },
        { lat: 43.6426, lon: -79.3871, h: 350, yaw: 3.14, pitch: -0.35, roll: 0, desc: "Toronto: CN Tower observation deck looking down" },
        { lat: 24.7113, lon: 46.6703, h: 275, yaw: 1.57, pitch: -0.18, roll: 0, desc: "Riyadh: Kingdom Centre sky bridge" },

        // Observation decks / Towers (looking down)
        { lat: 37.5512, lon: 126.9882, h: 243, yaw: 5.80, pitch: -0.40, roll: 0, desc: "Seoul: Namsan Tower looking down at city" },
        { lat: -22.9519, lon: -43.1652, h: 395, yaw: 6.13, pitch: 0.22, roll: 0, desc: "Rio: Sugarloaf looking up at Christ the Redeemer" },
        { lat: 51.5033, lon: -0.1196, h: 135, yaw: 4.02, pitch: -0.15, roll: 0.01, desc: "London: London Eye capsule view" },

        // Drone / Aerial (h: 50-400m, showing roll for banking turns)
        { lat: -33.8591, lon: 151.2225, h: 120, yaw: 5.08, pitch: -0.45, roll: 0.15, desc: "Sydney: Drone banking over Opera House" },
        { lat: 49.3018, lon: -123.1372, h: 85, yaw: 6.22, pitch: -0.30, roll: -0.12, desc: "Vancouver: Drone filming Lions Gate Bridge" },
        { lat: -33.9036, lon: 18.4207, h: 200, yaw: 3.37, pitch: 0.25, roll: 0.08, desc: "Cape Town: Drone ascending toward Table Mountain" },
        { lat: 6.4281, lon: 3.4219, h: 150, yaw: 5.48, pitch: -0.22, roll: 0.18, desc: "Lagos: Drone surveying city skyline" },

        // Rooftop / High vantage (h: 30-100m)
        { lat: 1.2816, lon: 103.8636, h: 45, yaw: 5.27, pitch: 0.30, roll: 0, desc: "Singapore: Rooftop bar viewing Marina Bay Sands" },
        { lat: 32.0535, lon: 34.7506, h: 35, yaw: 0.69, pitch: 0.05, roll: 0.02, desc: "Tel Aviv: Jaffa rooftop panorama" },
        { lat: 48.1351, lon: 11.5761, h: 28, yaw: 5.79, pitch: 0.38, roll: 0, desc: "Munich: Beer garden terrace view of Frauenkirche" },

        // Mountain / High altitude (showing varied terrain)
        { lat: 4.5981, lon: -74.0758, h: 2640, yaw: 6.01, pitch: -0.55, roll: 0, desc: "Bogota: Monserrate looking down at city" },
        { lat: -1.3733, lon: 36.8581, h: 1795, yaw: 4.71, pitch: -0.12, roll: 0.05, desc: "Nairobi: Safari vehicle on elevated terrain" },

        // Water level / Maritime (h: 2-5m, slight roll for boat motion)
        { lat: 18.9217, lon: 72.8347, h: 3, yaw: 4.04, pitch: 0.02, roll: 0.08, desc: "Mumbai: Ferry approaching Gateway of India" },
        { lat: 13.7437, lon: 100.4872, h: 2, yaw: 1.57, pitch: 0.18, roll: -0.05, desc: "Bangkok: Longtail boat viewing Wat Arun" },
        { lat: -36.8307, lon: 174.7947, h: 4, yaw: 4.10, pitch: 0.28, roll: 0.06, desc: "Auckland: Ferry looking up at Sky Tower" },
        { lat: -34.6102, lon: -58.3628, h: 2.5, yaw: 4.06, pitch: 0.10, roll: -0.03, desc: "Buenos Aires: Boat in Puerto Madero" },

        // More street level variety
        { lat: -23.5874, lon: -46.6576, h: 1.8, yaw: 1.52, pitch: 0.22, roll: 0.01, desc: "Sao Paulo: Jogger in Ibirapuera Park" },
        { lat: 59.3251, lon: 18.0711, h: 1.6, yaw: 0.95, pitch: 0.15, roll: 0, desc: "Stockholm: Walking tour at Royal Palace" }
    ];

    let currentIndex = Math.floor(Math.random() * locations.length);
    const el = document.getElementById('coords');

    function formatGeoPose(loc) {
        return `lat: ${loc.lat}, lon: ${loc.lon}, h: ${loc.h} | yaw: ${loc.yaw}, pitch: ${loc.pitch}, roll: ${loc.roll}`;
    }

    function updateCoords() {
        currentIndex = (currentIndex + 1) % locations.length;
        el.textContent = formatGeoPose(locations[currentIndex]);
    }

    el.textContent = formatGeoPose(locations[currentIndex]);
    setInterval(updateCoords, 15000);
})();
</script>