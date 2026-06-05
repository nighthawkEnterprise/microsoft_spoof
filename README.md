# Security Awareness Simulation Frontend

This repo is a React frontend prototype for a security-awareness simulation. The original project name references a Microsoft-style spoofing scenario, but the professional framing for this work is phishing-awareness, identity-security education, and controlled demo simulation.

## Overview

Security teams often need safe ways to explain how phishing, spoofed login experiences, and credential-harvesting patterns work without exposing users to real attacks. This frontend prototype explores how a realistic-looking experience can be used in a controlled setting to educate users and demonstrate risk.

## Product problem

Phishing and brand impersonation are easier to understand when people can see how convincing a malicious flow might look. Static training material often fails because it does not feel real.

This project explores a simulated frontend experience that could be used to support security education, awareness training, or identity-risk demos.

## Key features

- React frontend
- Create React App structure
- Axios support for backend communication
- UI patterns for a simulated login/security-awareness flow
- Separation from the backend service in a companion repo

## Tech stack

- React 17
- Create React App
- Axios
- React Spring
- CSS

## Related repo

- `microsoft-spoof-server` — backend companion service for the simulation

## Portfolio positioning

Use this project carefully. It should not be presented as a phishing tool. It should be framed as a controlled security-awareness simulation that demonstrates how identity attacks can be recognized and mitigated.

This can support a broader identity/security portfolio story, but it should not be a flagship project unless renamed and sanitized.

## Running locally

```bash
npm install
npm start
```

Build for production:

```bash
npm run build
```

## Safety and ethics note

This project should only be used in controlled, authorized, educational environments. Do not deploy or use it to collect real credentials or impersonate services. Before making the repo public, rename it, remove any brand assets that could imply impersonation, and clearly label the project as a simulation.

## Future improvements

- Rename the repo to a neutral security-awareness name
- Add explicit simulation banners
- Remove or replace any third-party brand assets
- Add training/education copy
- Add safe mock-only backend behavior
- Add documentation about authorized use only

## Status

Security-awareness frontend prototype. Needs renaming and sanitization before portfolio use.