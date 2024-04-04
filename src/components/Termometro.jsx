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

/*
import React, { useRef } from "react";
import { useGLTF, OrbitControls } from '@react-three/drei';

export function Termometro(props) {
    const { nodes, materials } = useGLTF('/models/termometro.glb');
    const generalGroupRef = useRef();
    const controls = useRef();

    return (
        <>
            <group {...props} dispose={null} ref={generalGroupRef}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere002_0.geometry}
                    material={materials['Material.002']}
                    position={[0, 0, -0.052]}
                    scale={[0.5, 0.5, 0.5]} // Ajustar el tamaño
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane000_0.geometry}
                    material={materials['Material.004']}
                    position={[0.018, 0, 2]} // Ajustar la posición en el eje Z
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_0.geometry}
                    material={materials['Material.004']}
                    position={[1.549, 0, 2]} // Ajustar la posición en el eje Z
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_0.geometry}
                    material={materials['Material.003']}
                    position={[0, 0, -2]} // Ajustar la posición en el eje Z
                    scale={[0.8, 0.8, 0.8]} // Ajustar el tamaño
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere001_0.geometry}
                    material={materials['Material.001']}
                    position={[0, 0, -1]} // Ajustar la posición en el eje Z
                    scale={[0.8, 0.8, 0.8]} // Ajustar el tamaño
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_0.geometry}
                    material={materials['Material.005']}
                    position={[0, -0.02, 3]} // Ajustar la posición en el eje Z
                    scale={[1, 0.5, 3]} // Ajustar el tamaño
                />
            </group>
            <OrbitControls
                enableZoom={false}
                ref={controls}
                enablePan={false}
                minAzimuthAngle={-Math.PI / 1}
                maxAzimuthAngle={Math.PI / 1}
                minPolarAngle={Math.PI * 0.3}
                maxPolarAngle={Math.PI * 0.3}
            />
        </>
    );
}

useGLTF.preload('/models/termometro.glb');
/*
/*
import React, { useLayoutEffect, useRef } from 'react'; 
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from "@react-three/fiber";
import gsap, {Power2} from "gsap"; 

export function Termometro(props) {
    const { nodes, materials } = useGLTF('/models/termometro.glb'); 
    const scene = useThree(state => state.scene); 
    const timeline = gsap.timeline(
        {defaults: 
            {
                duration: 1, 
                ease: Power2.easeInOut 
            }
        }); 

    useLayoutEffect(() => { 
        const sketchfab_model = scene.getObjectByName("Sketchfab_model"); 
        console.log(sketchfab_model);
        timeline.to(sketchfab_model.rotation, {
            y: Math.PI * 2
        }, 
        1 //Segundo 1 del timiline, se reproduce un el segundo 1.
        ); 
    }, [])

    return (
        <>
            <group {...props} dispose={null}>
                <group name="Sketchfab_model" position={[0, 0.0, 0.0]} rotation={[1.1, -0.9, 6]}>
                    <mesh
                        name="Sphere002_0"
                        geometry={nodes.Sphere002_0.geometry}
                        material={materials['Material.002']}
                        position={[0, 0, -0.1]}
                        scale={[0.7, 0.7, 0.9]}
                    />
                    <mesh
                        name="Plane000_0"
                        geometry={nodes.Plane000_0.geometry}
                        material={materials['Material.004']}
                        position={[0, 0, 4.4]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Plane001_0"
                        geometry={nodes.Plane001_0.geometry}
                        material={materials['Material.004']}
                        position={[1.5, 0, 4.4]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Sphere_0"
                        geometry={nodes.Sphere_0.geometry}
                        material={materials['Material.003']}
                        position={[0, 0, -6]}
                        scale={[1, 1, 1.3]}
                    />
                    <mesh
                        name="Sphere001_0"
                        geometry={nodes.Sphere001_0.geometry}
                        material={materials['Material.001']}
                        position={[0, 0, -0.7]}
                        scale={[1, 1, 1.4]}
                    />
                    <mesh
                        name="Cylinder_0"
                        geometry={nodes.Cylinder_0.geometry}
                        material={materials['Material.005']}
                        position={[0, 0, 6.3]}
                        scale={[1.6, 0.5, 6.9]}
                    />
                </group>
            </group>
        </>
    )
}

useGLTF.preload('/models/termometro.glb')
*/
/*
import React, { useLayoutEffect, useRef } from 'react'; 
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from "@react-three/fiber";
import gsap, {Power2} from "gsap"; 

export function Termometro(props) {
    const { nodes, materials } = useGLTF('/models/termometro.glb'); 
    const scene = useThree(state => state.scene); 
    const timeline = gsap.timeline(
        {defaults: 
            {
                duration: 1, 
                ease: Power2.easeInOut 
            }
        }); 

    useLayoutEffect(() => { 
        const sketchfab_model = scene.getObjectByName("Sketchfab_model"); 
        console.log(sketchfab_model);
        timeline.to(sketchfab_model.rotation, {
            y: Math.PI * 3
        }, 
        1
        ); 
    }, [])

    return (
        <>
            <group {...props} dispose={null}>
                <group name="Sketchfab_model" position={[0, 0.0, 0.0]} rotation={[1.1, -0.9, 6]}>
                    <mesh
                        name="Sphere002_0"
                        geometry={nodes.Sphere002_0.geometry}
                        material={materials['Material.002']}
                        position={[0, 0, -0.1]}
                        scale={[0.05, 0.05, 0.05]} // Escala más pequeña
                    />
                    <mesh
                        name="Plane000_0"
                        geometry={nodes.Plane000_0.geometry}
                        material={materials['Material.004']}
                        position={[0, 0, 4.4]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Plane001_0"
                        geometry={nodes.Plane001_0.geometry}
                        material={materials['Material.004']}
                        position={[1.5, 0, 4.4]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Sphere_0"
                        geometry={nodes.Sphere_0.geometry}
                        material={materials['Material.003']}
                        position={[0, 0, -6]}
                        scale={[0.1, 0.1, 0.1]} // Escala más pequeña
                    />
                    <mesh
                        name="Sphere001_0"
                        geometry={nodes.Sphere001_0.geometry}
                        material={materials['Material.001']}
                        position={[0, 0, -0.7]}
                        scale={[0.1, 0.1, 0.1]} // Escala más pequeña
                    />
                    <mesh
                        name="Cylinder_0"
                        geometry={nodes.Cylinder_0.geometry}
                        material={materials['Material.005']}
                        position={[0, 0, 6.3]}
                        scale={[0.15, 0.05, 0.15]} // Escala más pequeña
                    />
                </group>
            </group>
        </>
    )
}

useGLTF.preload('/models/termometro.glb')
*/

/*
import React, { useLayoutEffect } from 'react'; 
import { useGLTF, useScroll  } from '@react-three/drei';
import { useThree, useFrame } from "@react-three/fiber";
import gsap, { Power2 } from "gsap"; 

export function Termometro(props) {
    const { nodes, materials } = useGLTF('/models/termometro.glb'); 
    const scene = useThree(state => state.scene); 
    const scroll = useScroll(); 

    const timeline = gsap.timeline({
        defaults: {
            duration: 1, 
            ease: Power2.easeInOut 
        }
    }); 

    useLayoutEffect(() => { 
        const sketchfab_model = scene.getObjectByName("Sketchfab_model"); 
        timeline.to(
            sketchfab_model.rotation, 
        {
            y: Math.PI * 2
        }, 
        1); 
        timeline.to(
            sketchfab_model.rotation, 
        {
            y: -Math.PI * 2
        }, 
        2); 
        timeline.to(
            sketchfab_model.rotation, 
        {
            y: Math.PI * 2
        }, 
        3); 
    }, [])

    useFrame(() =>{
        console.log(scroll.offset);
        timeline.seek(scroll.offset); 
    }); 

    return (
        <group {...props} dispose={null} scale={[0.5, 0.5, 0.5]}>
            <group name="Sketchfab_model" position={[0, 0.0, 0.0]} rotation={[1.1, -0.9, 6]}>
                <mesh
                    name="Sphere002_0"
                    geometry={nodes.Sphere002_0.geometry}
                    material={materials['Material.002']}
                    position={[0, 0, -0.1]}
                    scale={[0.025, 0.025, 0.025]} // Escala más pequeña
                />
                <mesh
                    name="Plane000_0"
                    geometry={nodes.Plane000_0.geometry}
                    material={materials['Material.004']}
                    position={[0, 0, 4.4]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Plane001_0"
                    geometry={nodes.Plane001_0.geometry}
                    material={materials['Material.004']}
                    position={[1.5, 0, 4.4]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Sphere_0"
                    geometry={nodes.Sphere_0.geometry}
                    material={materials['Material.003']}
                    position={[0, 0, -6]}
                    scale={[0.05, 0.05, 0.05]} // Escala más pequeña
                />
                <mesh
                    name="Sphere001_0"
                    geometry={nodes.Sphere001_0.geometry}
                    material={materials['Material.001']}
                    position={[0, 0, -0.7]}
                    scale={[0.05, 0.05, 0.05]} // Escala más pequeña
                />
                <mesh
                    name="Cylinder_0"
                    geometry={nodes.Cylinder_0.geometry}
                    material={materials['Material.005']}
                    position={[0, 0, 6.3]}
                    scale={[0.075, 0.025, 0.075]} // Escala más pequeña
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/termometro.glb');
*/