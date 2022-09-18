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

# tutorials
Very helpful: https://docs.pmnd.rs/react-three-fiber/tutorials


# idea on models
https://github.com/akarlsten/cuberun/blob/87fbc39cad6e9d5996a0fd95b5e52a55ebad661d/src/components/Ship.js

gltf pipelines for complex scene rendering: https://github.com/CesiumGS/gltf-pipeline


## converting sketchfab models to gltx JSX
1. Get the .gltf and .bin files and put them in the models directory
1. Download glTF Tools extension in VSCode
1. Right click the gltf file (same dir as .bin file) and convert to .glb using the extension (optional?)
1. `npx gltfjsx` to install the [JSX converter](https://github.com/pmndrs/gltfjsx)
1. Generate jsx with while in `src` dir, for example, `npx --node-options='--no-experimental-fetch' gltfjsx src/models/classic_red_coffee_mug/scene.gltf -r .`
1. Use the JSX!

# development resources and community
https://discourse.threejs.org/
