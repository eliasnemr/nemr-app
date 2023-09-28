import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

import WebGL from "three/addons/capabilities/WebGL.js";
import gsap from "gsap";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const SectionWithGraphics = () => {
  const loaded = useRef(false);
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(2);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x3cdfb8 });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const light = new THREE.PointLight(0xffffff, 70, 100, 1.7);
  light.position.set(1, 1, 1);
  scene.add(light);

  camera.position.z = 5;

  controls.update();

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    });

    if (!loaded.current) {
      loaded.current = true;

      // @ts-ignore
      document.getElementById("graphics").appendChild(renderer.domElement);

      if (WebGL.isWebGLAvailable()) {
        // Initiate function or other initializations here
        animate();
        const tl = gsap.timeline({ defaults: { duration: 1 } });
        tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 0.2, y: 1.5 });
      } else {
        const warning = WebGL.getWebGLErrorMessage();
        // @ts-ignore
        document.getElementById("graphics").appendChild(warning);
      }
    }
  }, []);

  return (
    <>
      <nav className="p-4 z-0 flex items-center gap-2">
        <svg
          width="32"
          height="32"
          viewBox="0 0 208 208"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M128.005 47.9981C101.497 47.9981 48.3986 26.5093 48.3986 0H48.0061C48.0061 21.2168 56.4342 41.5646 71.4365 56.5674C86.4387 71.5702 106.786 79.9991 128.003 79.9999C140.733 79.9999 152.942 85.0569 161.944 94.0585C170.946 103.06 176.003 115.269 176.003 127.999C176.006 140.729 170.951 152.94 161.951 161.943C152.951 170.947 140.743 176.006 128.013 176.009C115.282 176.011 103.072 170.956 94.0685 161.956C85.065 152.956 80.0054 140.748 80.0029 128.018C80.0026 117.512 77.9331 107.109 73.9124 97.4033C69.8917 87.6973 63.9987 78.8782 56.5697 71.4497C49.1407 64.0212 40.3214 58.1287 30.6151 54.1086C20.9089 50.0886 10.5058 48.0197 0 48.0201V48.4095C26.5043 48.4095 47.9932 101.485 48.0031 127.998H47.9981C47.998 143.821 52.6896 159.288 61.4798 172.444C70.2701 185.6 82.7641 195.854 97.382 201.909C112 207.965 128.085 209.55 143.604 206.463C159.122 203.377 173.377 195.758 184.566 184.571C195.754 173.383 203.374 159.129 206.462 143.61C209.55 128.092 207.966 112.007 201.912 97.3884C195.858 82.77 185.605 70.2751 172.45 61.4837C159.294 52.6923 143.827 47.9993 128.005 47.9981Z"
            fill="url(#paint0_linear_1_4)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_4"
              x1="104"
              y1="0"
              x2="104"
              y2="208"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3CDFB8" />
              <stop offset="1" stopColor="#1C0606" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <h1 className="text-2xl text-black">NEMR</h1>
      </nav>
      <div id="graphics" className="z-1" />
    </>
  );
};

export default SectionWithGraphics;
