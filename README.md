<!-- # Fuse

A realtime IDE for developers to code in realtime in a common codespace.

## Abstract
- Code snippets provide solutions but the approach lacks, they are static. Realtime collaborative coding allows users to learn each others thoughtprocess as they manipulate the same code parallely while communicating.
- Pulling multiple source codes or applications having high resource demand might be burdenenig on systems with low capabilty. A web app that can spin up a container replicating the owner's environment allows everyone to run and analyse the code irrespective of resource constraints.

## Planned

### Features

- Realtime code editor via websockets
- Realtime terminal and code execution
- Video calling via WebRTC
- Containerization via docker

### Working
- To create a room the user provides environment details in the web app interface and adds code directory.
- The source code and environment details are sent via http to the server as a request to create a room.
- The node server analyses environment details to uniquely write a Dockerfile to create the env and copy the source code to create a user-environment image and then a container.
- The room is a multicontainer app with first, the user-environment and second, a app-service container which also spins parallely.
- The app-service is responsible for forwarding writes from the clients to the user-environment and emit changes made inside the environment to the clients. It also handles the signalling of webRTC to create a peer connection. -->

<h1 align="center" id="title">ControlSN-Fuse</h1>

<p align="center"><img src="https://socialify.git.ci/ControlSN/Fuse/image?description=1&amp;font=Source%20Code%20Pro&amp;language=1&amp;name=1&amp;owner=1&amp;stargazers=1&amp;theme=Dark" alt="project-image"></p>

<center id="description">Real Time Code Collaboration,For All.</center>
<br/>

> Please Note that this project is under constant development and this is just a Minimum Viable Implementation of Our Idea @ D3 Hackathon-IIITBh.
The most stable branch is `main`.

<h2>Demo</h2>

[Example](https://drive.google.com/file/d/1WxCm7rWebMuG5-sEH36QkvrX_v6Jzj0c/view)
  
<h2>Features</h2>

Here're some of the project's best features:

*   Realtime code editor via websockets
*   Realtime terminal and code execution \[TBD\]
*   Video calling via WebRTC \[TBD\]
*   Containerization via docker \[TBD\]

<h2>Abstract</h2>

 - We Developed this platform with the aim of easing Code collaboration among peers.Manier Times People want to know the Intuition behind the logics for the flaw in their code by the person who solves it.This paltform solves it by Providing a multi user Room and write/read from a same IDE.

 > This feature is currently implemented and is live.

 - To enhance interactiveness among peers, Video Calling feature is also present.This is possible due to webRTC.

 > This feature has been successfully implemented (present at branch: ) but is currently being integrated. 

