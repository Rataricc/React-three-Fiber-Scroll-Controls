import * as THREE from  'three'; 

export const GenerateAnimations = (scene) => {
    const Anamations = [
        {
            target: scene.getObjectByName("Sketchfab_model").rotation, 
            pointTime: 0, 
            animationsProperties: {
                x: 0,
                //y: 1, 
                //z: 1, 
                onUpdate: () => {}, 
            }, 
        }, 

        {
            target: scene.getObjectByName("Sketchfab_model").rotation, 
            pointTime: 1, 
            animationsProperties: {
                //x: 1, 
                y: 1,
                z: 1,
                  
                onUpdate: () => {}, 
            }, 
        }, 

        {
            target: scene.getObjectByName("Sketchfab_model").rotation, 
            pointTime: 2, 
            animationsProperties: {
                y: 1, 
                onUpdate: () => {}, 
            }, 
        }, 
        
        {
            target: scene.getObjectByName("Sketchfab_model").rotation, 
            pointTime: 3, 
            animationsProperties: {
                //y: 2, 
                x: 1,
                //z: 1, 
                
                onUpdate: () => {}, 
            }, 
        }
    ]; 
    return Anamations; 
}