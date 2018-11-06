# Angular Electron Demo

## Technologies

### Preface

This project has been created via [Angular CLI](https://cli.angular.io/), so you can exploit its
commands to build web assets. In `package.json` you can find some scripts to invoke the most common
CLI commands (check the one starting with `web:`).
For UI/UX [Angular Material](https://material.angular.io/) has been used.
Access to native desktop functionalities is granted via [Electron](https://electronjs.org),
packaging for distribution is done via [electron-builder](https://www.electron.build/).

### Electron

Excerpt from Electron introduction web page (check full page at
https://electronjs.org):

> If you can build a website, you can build a desktop app. Electron is a framework for creating
> native applications with web technologies like JavaScript, HTML, and CSS. It takes care of the
> hard parts so you can focus on the core of your application.

### electron-builder

Excerpt from electron-builder docs (check full page at https://www.electron.build/):

> A complete solution to package and build a ready for distribution Electron app for macOS, Windows
> and Linux with “auto update” support out of the box.

> - [...]
> - NPM packages management
> - [...]
> - Code Signing on a CI server or development machine.
> - Auto Update ready application packaging.
> - Numerous target formats
> - Publishing artifacts to GitHub Releases, Amazon S3, DigitalOcean Spaces and Bintray.
>   [...]

## Developer section

### Prerequisites

- Node and npm installed (tested with version 8.11.4 and 6.4.0)
- run `npm i` on project root to install all required deps

### Desktop builds

NOTE: Tested only on Windows (I don't have a Mac sorry :stuck_out_tongue:).

- **Start locally**: run `npm run desktop:serve`, app will open in a new window.
- **Build**:
  1. run `npm run desktop:build:dev` or `npm run mobile:build:prod` according to the environment
     you want to build for.
  2. run `npm run desktop:dist`, an unpacked version + installer will be created under
     `desktop-dist` folder for the OS you are currently running.
