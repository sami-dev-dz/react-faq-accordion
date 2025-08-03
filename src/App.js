import { useState } from "react";

const faqs = [
  {
    title: "Où sont fabriquées vos chaises ?",
    text: "Toutes nos chaises sont conçues en France et assemblées à la main dans notre atelier partenaire situé en Italie. Nous accordons une grande importance à la qualité et au savoir-faire artisanal.",
  },
  {
    title: "Quel est le délai de retour si je ne suis pas satisfait ?",
    text: "Vous disposez de 30 jours après réception pour retourner votre chaise, sans justification nécessaire. Les frais de retour sont à notre charge si le produit présente un défaut.",
  },
  {
    title: "Livrez-vous en dehors de l’Union Européenne ?",
    text: "Oui, nous expédions dans de nombreux pays à l'international. Des frais de douane peuvent s’appliquer selon votre pays de résidence. Consultez notre page Livraison pour plus de détails.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    setOpenIndex((preventIndex) => (preventIndex === index ? null : index));
  }

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, onToggle, isOpen }) {
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={onToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
