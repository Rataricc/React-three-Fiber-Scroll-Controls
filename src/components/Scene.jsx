import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Termometro } from "./Termometro";

export default function Scene() {
    return (
        <Canvas
            camera={{
                fov: 65,
                position: [0, 0, 8.3],
            }}
            shadows
        >
            <ScrollControls pages={4} damping={0.5}>
                <Termometro /> 
            </ScrollControls>

            <ambientLight intensity={1.6} />
            <Environment files={"/models/abandoned_tiled_room_1k.hdr"} />
        </Canvas>
    );
}