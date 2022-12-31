import React from 'react';
import * as THREE from 'three';
import { Line } from 'three';
import styles from './CelestialObject.css';


class CelestialObject extends React.Component  {
    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        //ADD SCENE
        this.scene = new THREE.Scene();

        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera( 50, width / height, 1, 2000 );
        //this.camera.position.z = 20;

        // VIEW FROM  THE TOP OF THE SUN
        this.camera.position.x = 0;
        this.camera.position.y = 10;
        this.camera.position.z = 15;
        this.camera.lookAt(0, 0, 0);

        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setClearColor(0x000000, 0);  // set clear color to black with an alpha value of 0
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement)

        //ADD celestialObject
        const size = this.props.objectSize;
        const widthSegments = this.props.objectWidthSegments;
        const celestialObjectGeometry = new THREE.SphereGeometry(size, widthSegments);
        const textureLoader = new THREE.TextureLoader();
        const celestialObjectMaterial = new THREE.MeshBasicMaterial({map: textureLoader.load(this.props.texture)});
        this.celestialObject = new THREE.Mesh(celestialObjectGeometry, celestialObjectMaterial);


        // this.scene.add(line);
        this.scene.add(this.celestialObject);

        //ANIMATE celestialObject
        this.animatecelestialObject();
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.frameId);
        this.mount.removeChild(this.renderer.domElement);
    }

    animatecelestialObject() {
        this.celestialObject.rotation.x = 0;
        this.celestialObject.rotation.y = 0;
        this.celestialObject.rotation.z = 0;

        // Move around the celestialObject using the planet's orbit

        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animatecelestialObject.bind(this));

    }

    renderScene() {
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        return (
            <div
                className="celestialObject"
                ref={(mount) => { this.mount = mount; }}
            />
        );
    }
}

export default CelestialObject;
