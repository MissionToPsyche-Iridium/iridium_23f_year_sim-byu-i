import * as THREE from 'three';

const h = window.innerHeight;
const w = window.innerWidth;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 100);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);

document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);
