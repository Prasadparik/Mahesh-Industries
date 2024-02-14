import React from "react";
import "./WhatsApp.css"; // Styling for WhatsApp component

const BrandPromo = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Namaste 🙏🏻");
    const phoneNumber = +919075346243;
    window.open("https://parikprasad.netlify.app/");
  };

  return (
    <div
      className="brand-icon"
      style={{ padding: "0.5rem" }}
      onClick={handleWhatsAppClick}
    >
      <img
        style={{ width: "2.5rem" }}
        src="https://parikprasad.netlify.app/img/avatar.png"
      />
    </div>
  );
};

export default BrandPromo;
