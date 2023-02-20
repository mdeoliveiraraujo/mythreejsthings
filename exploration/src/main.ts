import "./style.css";

import {
  BoxGeometry,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  WebGLRenderer,
} from "three";

const scene: Scene = new Scene();
const camera: PerspectiveCamera = new PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);
const renderer: WebGLRenderer = new WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

const box: BoxGeometry = new BoxGeometry(1, 1, 1);
const materialPink: MeshBasicMaterial = new MeshBasicMaterial({
  color: 0xff00ff,
});
const materialRed: MeshBasicMaterial = new MeshBasicMaterial({
  color: 0xff0000,
  side: DoubleSide
});

const plane: PlaneGeometry = new PlaneGeometry(5, 5, 10, 10);
const planeMesh: Mesh = new Mesh(plane, materialRed);

const mesh: Mesh = new Mesh(box, materialPink);

scene.add(mesh);
scene.add(planeMesh);

camera.position.z = 5;

/**
 * animate
 */
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  planeMesh.rotation.x += 0.01;
  planeMesh.rotation.y += 0.01;
}

animate();
