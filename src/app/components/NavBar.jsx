"use client";

import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./../../Styles/Header.css"

/*
  Barra de navegación principal.
*/

export default function NavBar() {
  return (
    <nav className="navbar">

      {/* Logo izquierdo */}
      <div className="navbar-left">
        <img src="/logo.png" alt="RockYourContent Logo" className="logo-img" />
      </div>

      {/* Íconos de redes (simplificado a Instagram y UN solo LinkedIn) */}
      <div className="navbar-right">

        <a
          href="https://www.instagram.com/rock.your.content"
          className="icon-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/company/rock-your-content/" // Usaremos solo uno de los links de LinkedIn
          className="icon-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

      </div>
    </nav>
  );
}