import React from "react";
import Button from 'react-bootstrap/Button';

let actions = {
    "Reserva turnos": 'https://nubiant.com/app/5ee2ef93-0cf3-45d3-a09b-10a95242d1eb/mis_turnos/5e4d98ea-e5cf-43c8-997e-2a53ec36f3dc',
    "Salud Total": 'https://nubiant.com/saludtotal',
    "Gestiona tu historial médico": 'https://nubiant.com/app/5ee2ef93-0cf3-45d3-a09b-10a95242d1eb/mis_atenciones/f3167cd9-33ad-4aa4-9b43-69d34bbda1e3',
    "Tramita tus recetas de medicamentos": 'https://nubiant.com/app/5ee2ef93-0cf3-45d3-a09b-10a95242d1eb/prescripciones/6fb7999e-9fef-42bd-972a-79a46c78731f',
};

export default function Label() {

    const handleButtonClick = (title) => {
        const url = actions[title];
        if (url) {
            window.open(url, '_blank'); // Abre la URL en una nueva pestaña
        } else {
            // Acción específica para el botón que no tiene URL
            console.log(`Acción para ${title}`);
        }
    };

    const labels = [
        {
            id: "TopLeftLabel",
            title: "Reserva turnos",
            content: "Programa tus consultas médicas con facilidad.",
        },
        {
            id: "TopRightLabel",
            title: "Salud Total",
            content: "Accede a profesionales médicos, reserva tus citas y administra tu salud de manera sencilla.",
        },
        {
            id: "BottomLeftLabel",
            title: "Gestiona tu historial médico",
            content: "SaludTotal te ofrece acceso instantáneo a tu historial médico",
        },
        {
            id: "BottomRightLabel",
            title: "Tramita tus recetas de medicamentos",
            content: "Renueva tus medicamentos fácilmente desde tu perfil en SaludTotal",
        },
    ];

    return (
        <div className={"labels_container"}>
            <div className={"labels_wrapper"}>
                {labels.map((label) => (
                    <div id={label.id} key={label.id} className={"label label_card--hidden"}>
                        <h1 className={"text_title"}>{label.title}</h1>
                        <p className={"text_content"}>{label.content}</p>
                        <Button onClick={() => handleButtonClick(label.title)} variant="info">{label.title}</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}