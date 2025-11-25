"use client";

import React from "react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

/*
Footer del sitio.
Incluye el logo horizontal y los accesos a redes.
Los links sin protocolo están comentados para editar más adelante.
*/

export default function Footer() {
return (
    <footer className="Footer" id="footer">

      {/* Logo del footer */}
      <div className="footer-left">
        <img
          src="/rockLogoH.png"
          alt="RockYourContent Logo Horizontal"
          className="logo-img"
        />
      </div>

      {/* Íconos de redes */}
      <div className="footer-right">

        {/* 
        Placeholder de email:
        TODO: agregar mail real en el futuro
        */}
        {/* 
        <a href="mailto:example@gmail.com" className="icon-btn">
          <FaEnvelope />
        </a>
        */}

        {/* 
        Placeholder de WhatsApp:
        TODO: agregar número real en el futuro
        */}
        {/* 
        <a href="https://wa.me/NUMERO" className="icon-btn">
          <FaWhatsapp />
        </a>
        */}

        <a
          href="https://www.instagram.com/rock.your.content"
          className="icon-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/rocio-guadalupe-martinez-/"
          className="icon-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.linkedin.com/company/rock-your-content/"
          className="icon-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

      </div>
    </footer>
  );
}
