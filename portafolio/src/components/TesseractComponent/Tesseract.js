import React from 'react';
import * as THREE from 'three';



class Tesseract extends React.Component {
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
    const size = 8;
    const widthSegments = 2;
    const heightSegments = 2;
    const depthSegments = 2;
    const boxGeometry = new THREE.BoxGeometry(
        size, size, size,
        widthSegments, heightSegments, depthSegments);
    const tesseractGeometry = new THREE.EdgesGeometry(boxGeometry);
    const tesseractMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    this.tesseract = new THREE.Mesh(tesseractGeometry, tesseractMaterial);
    this.scene.add(this.tesseract);

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

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animateTesseract.bind(this));
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount; }}
      />
    );
  }
}

export default Tesseract;
