![xkite GUI](https://raw.githubusercontent.com/oslabs-beta/xkite/main/images/banner_800x450.png)

# create-xkite

<div align='center'>
  
<a href='https://github.com/oslabs-beta/xkite/releases'>
  
<img src='https://img.shields.io/github/v/release/oslabs-beta/create-xkite?color=%a3f7bf&label=version&style=for-the-badge'>
  
</a>
  
<a href='https://github.com/oslabs-beta/create-xkite/blob/main/LICENSE'>
  
<img src='https://img.shields.io/github/license/oslabs-beta/create-xkite?style=for-the-badge'>
  
</a>
<a href="https://xkite.io/"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" /></a>
</div>

<br />

A Graphical User Interface (GUI) for Kafka Integrated Testing Environment (<b>KITE</b>)

The xkite GUI supports comprehensive prototyping, testing, and monitoring toolset built for Apache Kafka.

Built upon <b><a href="https://github.com/oslabs-beta/xkite-core">xkite-core library</a></b>, xkite GUI provides functionality to configuring a YAML file, managing docker containers (configure, run, pause, and shutdown), interfacing with a remote xkite servers, and exporting their configuration to deploy their docker ecosystem to the cloud.

Use xkite to bootstrap your next project, or install our library into an existing project. Built by (and for) developers.

Note: xkite is also available with the full graphical user interface using our <b><a href="https://github.com/oslabs-beta/xkite">xkite GUI</a></b>.

# Dependencies

- Latest stable versions of Node.js and NPM installed
- Latest stable version of <a href="https://docs.docker.com/compose/install/">docker-compose</a> installed.
- Docker daemon is running for reference: <a href="https://docs.docker.com/get-started/overview/">Docker Getting Started</a>
- Clone repository: <code>git clone https://github.com/oslabs-beta/xkite.git</code>
- Install dependencies: Run <code>npm install</code> inside the project folder

# Quick Start

To install/run the <code>xkite</code> GUI please use the following command:

```sh
  $ npx create-xkite <directory-name>
```

After the installation is complete, users can start the server by following the steps below:

1. ```sh
   $ cd <directory-name>
   ```
2. ```sh
   $ npm run dev
   ```

A browser window will open on http://localhost:3000 where users will see the live preview of the application.

Note: If the port 3000 is not available the server will start on the closest available port after 3000.

## Note

- Users must have Docker daemon active and running to initiate an xkite local deployment.

[See the xkite documentation for further details:](https://github.com/oslabs-beta/xkite '@embed')
