import React from "react";
//import "./Labels.css";

export default function Labels2({ currentPage }) {
    return (
        <div className="labels">
            <div
                id="page-1"
                className={`label ${currentPage === 1 ? "active" : ""}`}
            >
                <h1 className="label-text">Salud Total</h1>
            </div>
            <div
                id="page-2"
                className={`label ${currentPage === 2 ? "active" : ""}`}
            >
                <h1 className="label-text">Headband</h1>
                <p className="label-subtext">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
                    quae architecto molestiae laudantium consequuntur.
                </p>
            </div>
            <div
                id="page-3"
                className={`label ${currentPage === 3 ? "active" : ""}`}
            >
                <h1 className="label-text">Sound Control</h1>
                <p className="label-subtext">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
                    quae architecto molestiae laudantium consequuntur.
                </p>
            </div>
            <div
                id="page-4"
                className={`label ${currentPage === 4 ? "active" : ""}`}
            >
                <h1 className="label-text">Great Battery</h1>
                <p className="label-subtext">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
                    quae architecto molestiae laudantium consequuntur.
                </p>
            </div>
        </div>
    );
}
