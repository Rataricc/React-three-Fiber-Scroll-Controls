export const GenerateAnimations = (scene) => {
    const Anamations = [
        //page 1
        {
            target: scene.getObjectByName("Sketchfab_model").rotation,
            pointTime: 0,
            animationsProperties: {
                y: 0, // Rotación inicial
                onUpdate: () => { },
            },
        },
        {
            target: document.getElementById("TopRightLabel"),
            pointTime: 1,
            animationsProperties: {
                opacity: 1,
                left: "25%",
                onUpdate: () => { },
            }
        },
        //page 2
        {
            target: scene.getObjectByName("Sketchfab_model").rotation,
            pointTime: 1,
            animationsProperties: {
                y: Math.PI, // Rotación de 90 grados (1/4 de vuelta)
                onUpdate: () => { },
            },
        },
        {
            target: document.getElementById("TopLeftLabel"),
            pointTime: 3,
            animationsProperties: {
                opacity: 1,
                //rigth: "25%", 

                onUpdate: () => { },
            },
        },

        //page 3
        {
            target: scene.getObjectByName("Sketchfab_model").rotation,
            pointTime: 2,
            animationsProperties: {
                y: Math.PI, // Rotación de 180 grados (media vuelta)
                onUpdate: () => { },
            },
        },
        {
            target: document.getElementById("BottomLeftLabel"),
            pointTime: 3,
            animationsProperties: {
                opacity: 1,
                //rigth: "25%", 

                onUpdate: () => { },
            },
        },

        //page 4
        {
            target: scene.getObjectByName("Sketchfab_model").rotation,
            pointTime: 3,
            animationsProperties: {
                y: (3 * Math.PI) / 2, // Rotación de 270 grados (3/4 de vuelta)
                onUpdate: () => { },
            },
        },
        {
            target: document.getElementById("BottomRightLabel"),
            pointTime: 0,
            animationsProperties: {
                opacity: 1,
                left: "50%",

                onUpdate: () => { },
            },
        },
    ];
    return Anamations;
};