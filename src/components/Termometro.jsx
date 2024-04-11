import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, OrbitControls, useScroll } from '@react-three/drei';
import { useFrame, useThree } from "@react-three/fiber";
import gsap, { Power4 } from "gsap";
import { GenerateAnimations } from "./Utils";

export function Termometro(props) {
    const { nodes, materials } = useGLTF('/models/termometro.glb');
    const scene = useThree((state) => state.scene);
    const scroll = useScroll();
    
    const timeline = gsap.timeline({
        defaults: {
            duration: 3,
            ease: Power4.easeInOut
        }
    });
    
    useLayoutEffect(() => {
        const animations = GenerateAnimations(scene); 
        animations.map( animation => {
            timeline.to(
                animation.target, {
                    ...animation.animationsProperties
                }, 
                animation.pointTime
            )
        })
    }, [])
 
    useFrame(() => {
        //console.log(scroll.offset);
        timeline.seek(scroll.offset * timeline.duration());
    });

    return (
        <>
            <group {...props} dispose={null} scale={[0.2, 0.2, 0.2]}>
                <group name="Sketchfab_model" position={[0, 0.0, 0.0]} rotation={[1.1, -9.9, 6]}>
                    <mesh
                        name="Sphere002_0"
                        geometry={nodes.Sphere002_0.geometry}
                        castShadow
                        receiveShadow
                        material={materials['Material.002']}
                        position={[0, 0, -0.052]}
                        scale={[0.674, 0.674, 0.864]}
                    />
                    <mesh
                        name="Plane000_0"
                        geometry={nodes.Plane000_0.geometry}
                        castShadow
                        receiveShadow
                        material={materials['Material.004']}
                        position={[0.018, 0, 4.44]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Plane001_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane001_0.geometry}
                        material={materials['Material.004']}
                        position={[1.549, 0, 4.44]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Sphere_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere_0.geometry}
                        material={materials['Material.003']}
                        position={[0, 0, -6.028]}
                        scale={[1, 1, 1.283]}
                    />
                    <mesh
                        name="Sphere001_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere001_0.geometry}
                        material={materials['Material.001']}
                        position={[0, 0, -0.705]}
                        scale={[1, 1, 1.406]}
                    />
                    <mesh
                        name="Cylinder_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder_0.geometry}
                        material={materials['Material.005']}
                        position={[0, -0.02, 6.328]}
                        scale={[1.617, 0.524, 6.911]}
                    />
                </group>
            </group>


        </>

    )
}
useGLTF.preload('/models/termometro.glb');