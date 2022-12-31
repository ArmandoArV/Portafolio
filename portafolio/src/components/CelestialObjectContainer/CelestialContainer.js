import React from "react";
import CelestialObject from "../CelestialObjectComponent/CelestialObject";
import * as MATH from "mathjs";
import sunTexture from "../../images/sun.jpg";
import mercuryTexture from "../../images/mercury.jpg";
import venusTexture from "../../images/venus.jpg";
import earthTexture from "../../images/earth.jpg";
import marsTexture from "../../images/mars.jpg";
import jupiterTexture from "../../images/jupiter.jpg";
import saturnTexture from "../../images/saturn.jpg";
import uranusTexture from "../../images/uranus.jpg";
import neptuneTexture from "../../images/neptune.jpg";
export default function CelestialContainer(){
    return(
        <div className="celestialContainer">
            <CelestialObject
                name="Sun"
                texture={sunTexture}
                objectSize={2}
                objectWidthSegments={30}
                orbitXPos={10}
                orbitZPos={10}
                orbitYPos={0}
                drawOrbit={false}
                rotateAroundObject={true}
                orbitSun={false}
            />
            <CelestialObject
                name="Mercury"
                texture={mercuryTexture}
                objectSize={0.1}
                objectWidthSegments={30}
                orbitXPos={10}
                orbitZPos={10}
                orbitYPos={0}
                drawOrbit={true}
                rotateAroundObject={true}
                orbitSun={true}
                time={MATH.pi}
            />
            <CelestialObject
                name="Venus"
                texture={venusTexture}
                objectSize={0.2}
                objectWidthSegments={30}
                orbitXPos={10}
                orbitZPos={10}
                orbitYPos={0}
                drawOrbit={true}
                rotateAroundObject={true}
                orbitSun={true}
            />
            <CelestialObject
                name="Earth"
                texture={earthTexture}
                objectSize={0.2}
                objectWidthSegments={30}
                orbitXPos={10}
                orbitZPos={10}
                orbitYPos={0}
                drawOrbit={true}
                rotateAroundObject={true}
                orbitSun={true}
            />
            <CelestialObject
                name="Mars"
                texture={marsTexture}
                objectSize={0.1}
                objectWidthSegments={30}
                orbitXPos={10}
                orbitZPos={10}
                orbitYPos={0}
                drawOrbit={true}
                rotateAroundObject={true}
                orbitSun={true}
            />
            <CelestialObject
                name="Jupiter"
                texture={jupiterTexture}
                objectSize={0.5}
                objectWidthSegments={30}
                orbitXPos={10}
                orbitZPos={10}
                orbitYPos={0}
                drawOrbit={true}
                rotateAroundObject={true}
                orbitSun={true}
            />
            <CelestialObject
                name="Saturn"
                texture={saturnTexture}
                objectSize={0.4}
                objectWidthSegments={30}
                orbitXPos={10}
                orbitZPos={10}
                orbitYPos={0}
                drawOrbit={true}
                rotateAroundObject={true}
                orbitSun={true}
            />
            <CelestialObject
                name="Uranus"
                texture={uranusTexture}
                objectSize={0.3}
                objectWidthSegments={30}
                orbitXPos={10}
                orbitZPos={10}
                orbitYPos={0}
                drawOrbit={true}
                rotateAroundObject={true}
                orbitSun={true}

            />
            <CelestialObject
                name="Neptune"
                texture={neptuneTexture}
                objectSize={0.3}
                objectWidthSegments={30}
                orbitXPos={10}
                orbitZPos={10}
                orbitYPos={0}
                drawOrbit={true}
                rotateAroundObject={true}
                orbitSun={true}
            />

        </div>
    )
}