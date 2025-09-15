---
layout: layouts/base.njk
title: OSCP Platform Architecture
---

# Open Spatial Computing Platform

## Technical Overview

The Open Spatial Computing Platform (OSCP) is a comprehensive architecture for building spatially-aware applications that seamlessly blend physical and digital worlds. Built on open standards and designed for edge deployment, OSCP provides the foundation for the next generation of spatial computing experiences.

## Architecture

<div class="architecture-placeholder" style="background: #f0f0f0; padding: 40px; text-align: center; border-radius: 8px; margin: 30px 0;">
    <p>[OSCP Architecture Diagram]</p>
    <p style="font-size: 14px; color: #666;">Decentralized spatial computing architecture</p>
</div>

### Three-Tier Architecture

#### 1. Root Level - Spatial Service Discovery
The entry point for all spatial services, providing a decentralized registry that enables dynamic service discovery and orchestration across geographic zones.

#### 2. GeoZone Services
Location-specific services that operate at the edge:

- **GeoPose/Localization Services**
  - Standardized positioning and orientation
  - Visual positioning system integration
  - Coarse and fine-grained localization

- **Spatial Content Discovery**
  - Spatial search capabilities
  - Content filtering by location and context
  - POI (Points of Interest) management

- **Spatial Content & Experiences**
  - Content hosting and delivery
  - Experience management
  - Spatial webpage support

- **Reality Modeling Service**
  - BIM (Building Information Modeling)
  - IoT integration
  - GIS data support
  - 3D formats: USD, glTF, 3D tiles

- **Cloud Rendering Service**
  - Edge-optimized rendering
  - 5G network integration
  - Adaptive quality streaming

#### 3. Client Libraries
Open source implementations for diverse platforms:
- XR Headsets (AR/VR devices)
- Mobile Platforms (iOS, Android)
- Web Browsers
- Robotics Systems

## Core Standards & Protocols

### GeoPose Protocol
The fundamental standard for representing position and orientation in space:
- 6DOF (six degrees of freedom) positioning
- WGS84 coordinate system
- Quaternion-based orientation
- Timestamp synchronization

### Spatial Content Discovery Protocol
Enables discovery of spatially-anchored content:
- Spatial queries by bounding box
- Content type filtering
- Privacy-preserving searches
- Decentralized content registry

### Reality Modeling Standards
Support for industry-standard formats:
- **BIM**: IFC, Revit integration
- **GIS**: CityGML, 3D Tiles
- **3D Assets**: glTF 2.0, USD, FBX
- **IoT**: SensorThings API

## Implementation Philosophy

### Edge-First Architecture
- Services run on p-NET infrastructure
- Minimized cloud dependencies
- Local processing for privacy
- Reduced latency for real-time experiences

### Open Source Commitment
- All core services have open implementations
- Public domain protocols
- No vendor lock-in
- Community-driven development

### Interoperability by Design
- Standards-based approach
- Cross-platform compatibility
- Protocol versioning support
- Backward compatibility

## Getting Started

### For Developers

1. **Choose Your Platform**
   - Mobile SDK (iOS/Android)
   - Web SDK (JavaScript)
   - Unity/Unreal plugins
   - Native libraries (C++/Rust)

2. **Select Services**
   - Determine which OSCP services you need
   - Review API documentation
   - Check testbed availability

3. **Deploy or Connect**
   - Run services locally on edge infrastructure
   - Connect to existing OSCP networks
   - Join testbed environments

### For Organizations

Consider OSCP for:
- Smart city deployments
- Industrial AR applications
- Location-based experiences
- Digital twin systems
- Collaborative spatial computing

## Technical Resources

- [API Documentation](#) - *Coming soon*
- [Protocol Specifications](#) - *Coming soon*
- [Reference Implementations](/github/)
- [Deployment Guides](#) - *Coming soon*

## Next Steps

Ready to implement OSCP? Start with our open source implementations:

<div style="text-align: center; margin: 40px 0;">
    <a href="/github/" class="primary-button">Browse GitHub Repositories →</a>
</div>