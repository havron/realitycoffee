# realitycoffee
Reality Coffee Shop


# yarn
```
# basic react app
$ brew install node
$ npm install -g npm@latest
$ npm install --global yarn
$ yarn create react-app realitycoffee --template typescript
$ cd realitycoffee
$ yarn start

# add React 3D engine (fiber), VR/MR integration, helpers for fiber, physics (cannon)
yarn add react-three-fiber
yarn add @react-three/xr
yarn add @react-three/drei
yarn add @react-three/cannon
```

# local run
```

(coffee) yarn run serve
```

# possible frameworks
Comparisons: https://immersiveweb.dev/
- use react-three-fiber and pair it with react-xr for VR, controllers, hands, picking, etc - and use-cannon for physics if you need it. https://github.com/pmndrs/react-xr https://github.com/pmndrs/use-cannon
- THREE.JS and Ecsy
- https://github.com/pmndrs/react-three-fiber
- https://aframe.io/
- WebXR React

# emulators
[Release info](https://blog.mozvr.com/webxr-emulator-extension/): [Chrome extension](https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje)
[webXR quest emulator](https://github.com/felixtrz/WebXRQuestEmulator)

# allow headset access to local laptop devserver ports
Either go to the laptop IP address + port on the same network, or use ADB: `adb reverse tcp:8080 tcp:8080`
[Remote debugging](https://stackoverflow.com/questions/56403318/can-i-remotely-access-web-browser-tabs-in-my-oculus-quest-oculus-go-from-a-progr)

## package.json scripting 

```
{
...
  "scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "reverse": "adb reverse tcp:8080 tcp:8080"
  },
...
}
```
