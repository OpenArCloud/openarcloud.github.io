---
layout: layouts/base.njk
title: OSCP Platform Architecture
---

# Open Spatial Computing Platform

## Technical Overview

The Open Spatial Computing Platform (OSCP) is a comprehensive architecture for building spatially-aware applications that seamlessly blend physical and digital worlds. Built on open standards and designed for edge deployment, OSCP provides the foundation for the next generation of spatial computing experiences.

## Architecture

<img src="/img/_OSCP Sequence with Spatial DDS.png" alt="OSCP with SpatialDDS architecture - showing Edge Devices with Spatial Clients, SpatialDDS Interop layer providing shared communication fabric, and Spatial Services including Service Discovery, Visual Positioning, Reality Modeling, AI World Models, Spatial Content Discovery, and Spatial Content Hosting" style="width: 100%; max-width: 900px; margin: 30px auto; display: block; border-radius: 8px;">

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

## Open Source Implementations

All OSCP services have open source implementations available on GitHub. These repositories are designed for both academic research and commercial deployment, with permissive licensing that encourages innovation.

## Core Services

### Spatial Service Discovery
**Repository**: [oscp-spatial-service-discovery](https://github.com/OpenARCloud/oscp-spatial-service-discovery)
**Description**: OSCP Spatial Service Discovery - Root-level service registry for discovering and connecting to spatial services in a geographic area.
**Language**: TypeScript
**License**: MIT

### GeoPose Protocol Implementation
**Repository**: [oscp-geopose-protocol](https://github.com/OpenARCloud/oscp-geopose-protocol)
**Description**: OSCP GeoPose Protocol - Reference implementation of the GeoPose standard for spatial positioning and orientation.
**Language**: Python

### Spatial Content Discovery Service
**Repository**: [oscp-spatial-content-discovery](https://github.com/OpenARCloud/oscp-spatial-content-discovery)
**Description**: OSCP Spatial Content Discovery - Service for discovering spatially-anchored content and experiences within geographic bounds.
**Language**: TypeScript
**License**: MIT

### Point of Interest Service
**Repository**: [oscp-poi-service](https://github.com/OpenARCloud/oscp-poi-service)
**Description**: OSCP Point of Interest service for managing spatial POIs.
**Language**: JavaScript

### Open GeoPose Service
**Repository**: [oscp-open-geopose-service](https://github.com/OpenARCloud/oscp-open-geopose-service)
**Description**: GeoPose service implementation for OSCP.

## Client Libraries & Access

### GeoPose Protocol Access
**Repository**: [gpp-access](https://github.com/OpenARCloud/gpp-access)
**Description**: GeoPose Protocol access library for client applications.
**Language**: TypeScript
**License**: MIT

### Spatial Service Discovery Access
**Repository**: [ssd-access](https://github.com/OpenARCloud/ssd-access)
**Description**: Spatial Service Discovery client access library.
**Language**: TypeScript
**License**: MIT

### Spatial Content Discovery Access
**Repository**: [scd-access](https://github.com/OpenARCloud/scd-access)
**Description**: Spatial Content Discovery system access library.
**Language**: TypeScript
**License**: MIT

### Unity Client
**Repository**: [oscp-unity-client](https://github.com/OpenARCloud/oscp-unity-client)
**Description**: Unity-based client for OSCP integration in AR/VR applications.
**Language**: C#

### Browser User Client
**Repository**: [browser_userclient](https://github.com/OpenARCloud/browser_userclient)
**Description**: Sample for user-facing browser app accessing discovery services.
**Language**: Svelte
**License**: MIT

### SPARCL
**Repository**: [sparcl](https://github.com/OpenARCloud/sparcl)
**Description**: Common AR Cloud client concept proof of concept and experimentation platform.
**Language**: JavaScript
**License**: MIT

## Tools & Utilities

### OSCP Admin
**Repository**: [oscp-admin](https://github.com/OpenARCloud/oscp-admin)
**Description**: Sample client for OSCP spatial service and content discovery administration.
**Language**: Svelte
**License**: MIT

### OpenVPS
**Repository**: [openvps](https://github.com/OpenARCloud/openvps)
**Description**: Open Visual Positioning System implementation.
**Language**: Jupyter Notebook
**License**: MIT

### Hierarchical Localization
**Repository**: [Hierarchical-Localization](https://github.com/OpenARCloud/Hierarchical-Localization)
**Description**: Visual localization made easy with hloc.
**Language**: Python
**License**: Apache 2.0

### Cesium Viewer
**Repository**: [cesium-viewer](https://github.com/OpenARCloud/cesium-viewer)
**Description**: Cesium-based viewer for spatial content visualization.
**Language**: JavaScript

### H3NET
**Repository**: [h3net](https://github.com/OpenARCloud/h3net)
**Description**: H3NET - A Hexagonal Hierarchical Geo-spatial Indexing System in C#.
**Language**: C#
**License**: Apache 2.0

## Reference Implementations

### SSD FastAPI + Tile38
**Repository**: [SSD-FastAPI-Tile38](https://github.com/OpenARCloud/SSD-FastAPI-Tile38)
**Description**: OSCP Spatial Service Discovery using FastAPI and Tile38.
**Language**: Python
**License**: MIT

### SCD FastAPI + Tile38
**Repository**: [SCD-FastAPI-Tile38](https://github.com/OpenARCloud/SCD-FastAPI-Tile38)
**Description**: Spatial Content Discovery implementation using FastAPI and Tile38.
**Language**: Python
**License**: MIT

## Specifications & Documentation

### OSCP Documentation
**Repository**: [OSCP-Docs](https://github.com/OpenARCloud/OSCP-Docs)
**Description**: Official OSCP documentation and specifications.
**License**: CC0

### GeoPose Specification
**Repository**: [GeoPose](https://github.com/OpenARCloud/GeoPose)
**Description**: GeoPose specification and reference materials.
**Language**: HTML
**License**: Apache 2.0

### GeoPose Wrappers
**Repository**: [GeoPoseWrappers](https://github.com/OpenARCloud/GeoPoseWrappers)
**Description**: GeoPose integration libraries and wrappers.

### SpatialDDS Specification
**Repository**: [SpatialDDS-spec](https://github.com/OpenARCloud/SpatialDDS-spec)
**Description**: SpatialDDS - A Protocol for Real-World Spatial Computing.
**Language**: Python

### Open Glossary
**Repository**: [OpenGlossaryForRealWorldSpatialComputing](https://github.com/OpenARCloud/OpenGlossaryForRealWorldSpatialComputing)
**Description**: Unifying the language and terms of the emerging spatial computing industry.

## Contributing

We welcome contributions! Each repository includes:
- Contributing guidelines
- Code of conduct
- Development setup instructions
- Testing requirements

### How to Contribute

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

OSCP repositories use permissive open source licenses (MIT, Apache 2.0, or CC0) suitable for both academic and commercial use.

## Support

- **Documentation**: Each repository includes comprehensive README files
- **Issues**: Report bugs and request features on GitHub
- **Discussions**: Join the conversation in repository Discussions
- **Community**: Connect with other developers in our forums

## Next Steps

Ready to implement OSCP? Start with our open source implementations:

<div style="text-align: center; margin: 40px 0;">
    <a href="https://github.com/OpenARCloud" target="_blank" class="primary-button">Browse GitHub Repositories →</a>
</div>