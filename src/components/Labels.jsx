/*
import React from "react";

const Labels = ({ text, description, button }) => {
  return (
    <div className="text-overlay">
      <h1>{text}</h1>
      <p>{description}</p>
      
    </div>
  );
};

export default Labels;
*/
/*
import React from "react";

export default function Labels() {
  const cards = [
    {
      id: "Classic_Card",
      title: "Classic",
      subheader: "Nuka-cola",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, itaque deserunt minima nam alias saep quia et nulla architecto voluptatem.`,
      ml: "350 ml",
      points: ["extreme", "extreme", "extreme"],
    },
    {
      id: "Quantum_Card",
      title: "Quantum",
      subheader: "Nuka-cola",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, itaque deserunt minima nam alias saep quia et nulla architecto voluptatem.`,
      ml: "350 ml",
      points: ["extreme", "extreme", "extreme"],
    },
    {
      id: "Sunset_Card",
      title: "Sunset",
      subheader: "Zarzaparrilla",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, itaque deserunt minima nam alias saep quia et nulla architecto voluptatem.`,
      ml: "350 ml",
      points: ["extreme", "extreme", "extreme"],
    },
  ];

  return (
    <div className={"labels_container"}>
      <div className={"labels_wrapper"}>
        {cards.map((card, index) => (
          <div
            id={card.id}
            key={card.id}
            className={`label_card label_card--hidden label_${index}`}
          >
            <div>
              <h1 className={"text_header"}>{card.title}</h1>
              <p className={"text_subheader"}>{card.subheader}</p>
              <p className={"text_body"}>{card.description}</p>
            </div>
            <div>
              <h1 className={"text_subheader"}>{card.ml}</h1>
            </div>
            <div>
              <ul>
                {card.points.map((point, index) => (
                  <li key={index} className="text_item_des">
                    <p className={"text_body"}>
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
*/

import React from "react";

export default function Label() {
    const labels = [
        {
            id: "TopLeftLabel",
            title: "hola",
            content: "Text for top left corner",
        },
        {
            id: "TopRightLabel",
            title: "Salud Total",
            content: "Accede a profesionales médicos, reserva tus citas y administra tu salud de manera sencilla.",
        },
        {
            id: "BottomLeftLabel",
            title: "Bottom Left",
            content: "Text for bottom left corner",
        },
        {
            id: "BottomRightLabel",
            title: "Bottom Right",
            content: "Text for bottom right corner",
        },
    ];

    return (
        <div className={"labels_container"}>
            <div className={"labels_wrapper"}>
                {labels.map((label) => (
                    <div id={label.id} key={label.id} className={"label label_card--hidden"}>
                        <h1 className={"text_title"}>{label.title}</h1>
                        <p className={"text_content"}>{label.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
