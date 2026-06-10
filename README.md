# PowerPlatform

PowerPlatform is an internal developer platform project that demonstrates a company-style DevOps workflow.

## Architecture

Developer pushes code to GitHub, Jenkins builds the application, Docker creates the image, and Kubernetes runs the application.

## Tools Used

- GitHub
- Jenkins
- Docker
- Kubernetes
- Minikube
- Node.js
- Express

## Current Workflow

1. Developer pushes code
2. Jenkins pipeline runs
3. Application dependencies install
4. Docker image builds
5. Kubernetes deployment updates
6. Application runs through NodePort service

## Project Goal

The goal is to simulate how a real company platform engineering team builds reusable CI/CD automation for developers.
