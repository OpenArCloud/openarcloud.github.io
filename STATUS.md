# STATUS.md

Project status, goals, and outstanding tasks for the OpenArCloud static website.

## Project Overview

A lean static website built with 11ty (Eleventy) to explain the Open Spatial Computing Platform (OSCP) and direct developers to GitHub repositories. Deployed via GitHub Pages at openarcloud.org.

**Primary Goal**: Present the vision and practical implementation of OSCP with clear paths to GitHub repositories for developers.

## Current Status

Site is live. Core pages are built and deployed. Active work is on content refinement and consistency.

## Open PRs

- [#2 Rename Collaborators to Partners](https://github.com/OpenArCloud/openarcloud.github.io/pull/2) — pending review/merge

## TODO

### Immediate
- [ ] Merge PR #2 (Collaborators → Partners rename)
- [ ] Update "Become a Collaborator" CTA on partners page → "Become a Partner"

### Content
- [ ] Embed OSCP YouTube video on homepage (need link from stakeholders)
- [ ] Complete GitHub repo list with descriptions (`github.md`)
- [ ] Add contributing guidelines to `github.md`
- [ ] Add member logos to partners page
- [ ] Verify/update current OARC leadership on about page

### Required Assets (outstanding)
- [ ] YouTube video link (OSCP presentation) — from stakeholders
- [ ] Complete GitHub repository list with descriptions
- [ ] Member logos from current OARC members
- [ ] Architecture diagrams (provided — confirm they're placed in `src/img/`)

## Page Specs

### Homepage (`index.md`)
- Hero: "Open Spatial Computing Platform"
- Embedded OSCP video
- Purpose statement: high-level vision of decentralized spatial computing
- 3 CTAs: Explore GitHub Repos / Get Started Guide / Join the Community
- Key message: all OSCP services have open source implementations on GitHub, designed for edge/decentralized deployment

### Platform (`platform.md`)
Core OSCP components to cover:
- **Spatial Service Discovery** — entry point for all spatial services
- **GeoPose/Localization** — standard for positioning and orientation
- **Spatial Content Discovery** — spatial search capabilities
- **Spatial Content + Experiences** — content hosting and delivery
- **Reality Modeling Service** — BIM, IoT, GIS, USD, glTF, 3D tiles
- **Cloud Rendering Service** — edge-enabled, 5G-optimized
- **Client Libraries** — open source implementations for XR headsets, mobile, robots

### GitHub (`github.md`)
- Getting Started section with install instructions
- Full repo list with descriptions
- Client implementations (academic and commercial)
- Deployment notes (p-NET infrastructure, edge deployment)
- Contributing guidelines

### About (`about.md`)
- OARC mission statement
- Vision: enabling spatial computing through open standards
- How goals are achieved (tactics)
- History/track record
- Current leadership
- Tax-exempt status (if applicable)

### Partners (`partners.md`)
- Current member list with logos
- Why join OARC (value proposition)
- Membership levels/fees
- Membership form or link
- "Become a Partner" CTA

### Contact (`contact.md`)
- Contact information
- Links to community channels

## OSCP Technical Reference

### Architecture Overview
1. **Root Level**: Spatial Service Discovery — central registry for all spatial services
2. **GeoZone Level Services**:
   - GeoPose/Localization services
   - Spatial Content Discovery (spatial search)
   - Spatial Content + Experiences hosting
   - Reality Modeling Service (BIM, IoT, GIS, USD, glTF, 3D tiles)
   - Cloud Rendering Service (edge-optimized)
3. **Client Libraries**: open source implementations for various platforms

### Key Technical Points
- **Decentralized architecture** — services run on edge/p-NET infrastructure, not centralized cloud
- **Open standards based** — GeoPose protocol, public domain protocols
- **5G enabled** — optimized for edge computing and 5G networks
- **Platform agnostic** — supports XR headsets, mobile platforms, robotics

## Deployment

GitHub Actions builds and deploys on push to `main`. See `.github/workflows/deploy.yml`.
Custom domain: openarcloud.org (CNAME configured).
