---
layout: layouts/base.njk
title: GitHub Repositories
---

# GitHub Repositories

## Open Source Implementations

All OSCP services have open source implementations available on GitHub. These repositories are designed for both academic research and commercial deployment, with permissive licensing that encourages innovation.

<div class="quick-start">
    <h2>🚀 Quick Start</h2>
    <p>Get up and running with OSCP in minutes:</p>
    <pre><code># Clone the core services
git clone https://github.com/OpenArCloud/oscp-spatial-service-discovery
git clone https://github.com/OpenArCloud/oscp-geopose-protocol
git clone https://github.com/OpenArCloud/oscp-spatial-content-discovery

# Follow setup instructions in each repository's README</code></pre>
</div>

## Core Services

### Spatial Service Discovery
**Repository**: [oscp-spatial-service-discovery](#)
**Description**: Root-level service registry for discovering and connecting to spatial services in a geographic area.
**Language**: Node.js/TypeScript
**Status**: Production Ready

### GeoPose Protocol Implementation
**Repository**: [oscp-geopose-protocol](#)
**Description**: Reference implementation of the GeoPose standard for spatial positioning and orientation.
**Language**: Multiple (JavaScript, Python, C++)
**Status**: Production Ready

### Spatial Content Discovery Service
**Repository**: [oscp-spatial-content-discovery](#)
**Description**: Service for discovering spatially-anchored content and experiences within geographic bounds.
**Language**: Node.js/TypeScript
**Status**: Production Ready

### Reality Modeling Service
**Repository**: [oscp-reality-modeling](#)
**Description**: Service for managing and serving 3D models, BIM data, and IoT integrations.
**Language**: Python/Go
**Status**: Beta

### Cloud Rendering Service
**Repository**: [oscp-cloud-rendering](#)
**Description**: Edge-deployed rendering service optimized for 5G networks.
**Language**: C++/Rust
**Status**: Alpha

## Client Libraries

### JavaScript/Web SDK
**Repository**: [oscp-js-sdk](#)
**Description**: Browser-based SDK for web applications and PWAs.
**Platform**: Web browsers, Node.js
**Status**: Production Ready

### Unity Plugin
**Repository**: [oscp-unity-plugin](#)
**Description**: Unity integration for AR/VR applications.
**Platform**: Unity 2020.3+
**Status**: Production Ready

### iOS SDK
**Repository**: [oscp-ios-sdk](#)
**Description**: Native iOS SDK for ARKit integration.
**Platform**: iOS 14+
**Status**: Beta

### Android SDK
**Repository**: [oscp-android-sdk](#)
**Description**: Native Android SDK for ARCore integration.
**Platform**: Android 7.0+
**Status**: Beta

### Python Client
**Repository**: [oscp-python-client](#)
**Description**: Python library for server-side integration and robotics.
**Platform**: Python 3.8+
**Status**: Production Ready

## Tools & Utilities

### OSCP CLI
**Repository**: [oscp-cli](#)
**Description**: Command-line interface for managing OSCP services and deployments.

### Docker Compose Stack
**Repository**: [oscp-docker-stack](#)
**Description**: Pre-configured Docker setup for running all OSCP services locally.

### Kubernetes Helm Charts
**Repository**: [oscp-helm-charts](#)
**Description**: Production-ready Helm charts for deploying OSCP on Kubernetes.

### Testing Suite
**Repository**: [oscp-test-suite](#)
**Description**: Comprehensive testing tools for validating OSCP implementations.

## Deployment Notes

### Edge Infrastructure (p-NET)
All services are optimized for edge deployment:
- Low latency requirements
- Local data processing
- Minimal cloud dependencies
- 5G network optimization

### Getting Started Guide

1. **Development Environment**
   ```bash
   # Use Docker Compose for local development
   git clone https://github.com/OpenArCloud/oscp-docker-stack
   cd oscp-docker-stack
   docker-compose up
   ```

2. **Production Deployment**
   - Use Kubernetes with our Helm charts
   - Deploy to edge nodes near users
   - Configure GeoPose anchors for your region
   - Set up spatial content indices

3. **Integration**
   - Choose appropriate client SDK
   - Configure service discovery
   - Implement GeoPose localization
   - Add spatial content

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

All OSCP repositories use permissive open source licenses (MIT or Apache 2.0) suitable for both academic and commercial use.

## Support

- **Documentation**: Each repository includes comprehensive README files
- **Issues**: Report bugs and request features on GitHub
- **Discussions**: Join the conversation in repository Discussions
- **Community**: Connect with other developers in our forums

<div style="text-align: center; margin: 40px 0;">
    <a href="https://github.com/OpenArCloud" class="primary-button" target="_blank">Visit OpenArCloud on GitHub →</a>
</div>