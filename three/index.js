// es6 polyfill
import 'core-js/fn/array/find-index';
import 'core-js/fn/object/assign';
import 'core-js/fn/string/starts-with';
import 'core-js/es6/promise';

import THREE from 'three'

var scene = new THREE.Scene();
        
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
var geometry = new THREE.CubeGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0xffffff});
var cube = new THREE.Mesh(geometry, material); scene.add(cube);
camera.position.z = 5;
function render() {
    requestAnimationFrame(render);
    // camera.position.x += 0.01
    if (camera.position.z > 3) {
        camera.position.z -= 0.01;
    } else {
        if (cube.rotation.x > 1 && cube.rotation.y < 3) {
            cube.rotation.y += 0.01;
        } else {
            cube.rotation.x += 0.01;
        }
    }

    renderer.render(scene, camera);
}
render();

// console.log(123, THREE)