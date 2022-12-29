import React from 'react';
import * as THREE from 'three';
import { Line } from 'three';
import styles from './Tesseract.css';


class Tesseract extends React.Component  {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    //ADD SCENE
    this.scene = new THREE.Scene();

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera( 30, width / height, 1, 2000 );
    this.camera.position.z = 60;

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0x000000, 0);  // set clear color to black with an alpha value of 0
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement)  

    //ADD TESSERACT
    const size = 5;
    const widthSegments = 15;
    const heightSegments = 15;
    const depthSegments = 15;
    const secondBoxGeometry = new THREE.BoxGeometry(
        size, size, size);
    const tesseractGeometry = new THREE.BoxGeometry(widthSegments,heightSegments,depthSegments);

    const tesseractMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff', wireframe: true });
    const secondTesseractMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff', wireframe: true });
    this.tesseract = new THREE.Mesh(tesseractGeometry, tesseractMaterial);
    this.secondTesseract = new THREE.Mesh(secondBoxGeometry, secondTesseractMaterial);

    const boxGeo = new THREE.BoxGeometry(widthSegments,heightSegments,depthSegments),
    edgeGeo = new THREE.EdgesGeometry(boxGeo),
    line = new THREE.LineSegments(
            edgeGeo,
            new THREE.LineBasicMaterial({
                color: new THREE.Color('white')
            }));
   // this.scene.add(line);
    this.scene.add(this.secondTesseract);
    this.scene.add(this.tesseract);
    //this.scene.add(line);
    //ANIMATE TESSERACT
    this.animateTesseract();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
    this.mount.removeChild(this.renderer.domElement);
  }

  animateTesseract() {
    this.tesseract.rotation.x += 0.01;
    this.tesseract.rotation.y += 0.01;
    this.tesseract.rotation.z += 0.01;
    this.secondTesseract.rotation.x += -0.01;
    this.secondTesseract.rotation.y += -0.01;
    // Move around the screen the tesseract
    this.tesseract.position.x = Math.sin(this.tesseract.rotation.x * 2) * 10;
    this.tesseract.position.y = Math.cos(this.tesseract.rotation.y * 2) * 10;
    this.tesseract.position.z = Math.cos(this.tesseract.rotation.y * 2) * 10;
    this.secondTesseract.position.x = Math.sin(this.secondTesseract.rotation.x * 2) * 10;
    this.secondTesseract.position.y = Math.cos(this.secondTesseract.rotation.y * 2) * 10;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animateTesseract.bind(this));
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        className="tesseract"
        ref={(mount) => { this.mount = mount; }}
      />
    );
  }
}

export default Tesseract;
