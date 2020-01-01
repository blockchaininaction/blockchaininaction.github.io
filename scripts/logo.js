var camera, scene, renderer;
var line, line2;
var width = 200;
var height = width;
init();
animate();
function init() {
  camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
  camera.position.z = 330;
  scene = new THREE.Scene();

  var geometry = new THREE.OctahedronGeometry(150, 0);
  var wireframe = new THREE.WireframeGeometry(geometry);
  var material = new THREE.LineBasicMaterial({
    color: 0xffe100,
    linewidth: 2,
    linecap: "round", //ignored by WebGLRenderer
    linejoin: "round" //ignored by WebGLRenderer
  });
  line = new THREE.LineSegments(wireframe);
  line2 = new THREE.LineSegments(wireframe);
  line.material = material;
  line2.material = material;

  line.rotation.y = Math.PI / 4;
  line2.rotation.y = Math.PI / 4;

  line.rotation.x = Math.PI / 5.5;
  line2.rotation.x = Math.PI / 5.5;

  scene.add(line, line2);
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  document.getElementById("logo").appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  line.rotation.x += 0.0005;
  line.rotation.y += 0.001;

  line2.rotation.x -= 0.00025;
  line2.rotation.y -= 0.0005;
  renderer.render(scene, camera);
}
