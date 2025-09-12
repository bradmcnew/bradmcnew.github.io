---
title: "Axite AI - Sim2Real Sensor Validation"
excerpt: "Built a Python-based software agent for robots that logs live sensor streams and synchronizes with servers for sim-to-real differential analysis."
collection: portfolio
---

## Axite AI - Python Agent for Sim2Real Sensor Validation

**Timeline:** Winter 2025
**Type:** Personal Project

### Overview
Built a Python-based software agent that attaches to a robot, logs live sensor streams using Rerun, and synchronizes with a server for sim-to-real differential analysis. This project bridges the gap between simulated and real-world robotics by providing precise validation tools.

### Technical Implementation
- **Sensor Integration:** Developed a lightweight Python agent to interface with onboard sensors (IMU, LiDAR, motor encoders)
- **Real-time Streaming:** Implemented structured sensor data streaming in real time via the Rerun SDK
- **Differential Analysis:** Automated comparisons between simulated and real-world trajectories
- **Threshold Monitoring:** Built configurable threshold systems to flag deviations and refine robot control policies

### Tech Stack
- **Core Language:** Python
- **Visualization:** Rerun SDK for real-time data logging and visualization
- **Communication:** WebSockets for real-time data transmission
- **Cloud Infrastructure:** AWS for server-side processing and storage
- **Containerization:** Docker for deployment consistency

### Key Features
- Real-time sensor data collection and streaming
- Automated sim-to-real trajectory comparison
- Configurable deviation thresholds
- Cloud-synchronized data processing
- Lightweight agent architecture for embedded systems

### Technical Challenges Solved
- **Low-latency Data Streaming:** Optimized data pipeline for real-time sensor data transmission
- **Cross-platform Compatibility:** Ensured agent works across different robotic platforms
- **Scalable Architecture:** Designed system to handle multiple robots simultaneously
- **Data Synchronization:** Implemented robust sync mechanisms between edge and cloud

### Impact
The system provides robotics engineers with precise tools to validate and improve their simulation models, ultimately leading to more reliable real-world robot deployments. The automated analysis significantly reduces the time required for sim-to-real validation cycles.

[Read more about this project →](/posts/2025/02/axite-ai/)
