"use client";

import React, { useRef } from "react";
import Image from "next/image";
import logo from "../../../public/sinfon orange.png";
import Button from "../Button/Button";
import styled from "styled-components";
import { FaRocket, FaWallet } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import hover3d from "../../utils/hover";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  const hero = useRef<HTMLDivElement>(null);

  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  return (
    <HeaderStyled ref={hero}>
      <nav>
        <div className="logo">
          <Image src={logo} alt="logo" width={100} />
        </div>
        {/* <div className="input">
          <input type="text" placeholder="Search" />
        </div> */}
        <ul className="nav-items">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Quienes somos</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Consejos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li style={{ textAlign: "center" }}>
            <a href="#">EN v</a>
          </li>
          {/* <Button name="" icon={<FaWallet />} /> */}
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 className={abril.className}>
            Desarrollamos software para impulsar tu negocio al
            <span> próximo nivel</span>
          </h1>
          <p>
            Nuestro enfoque se centra en ti y en tus objetivos. Si tienes un
            negocio o un proyecto que necesitas llevar al mundo digital, estamos
            aquí para convertir esa visión en una realidad atractiva y
            funcional.
          </p>
          {/* <div className="buttons">
            <Button
              name="Comencemos!"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Visita el Portafolio" />
          </div> */}
        </div>
        <div className="image-content" style={{ transform: "scale(1)" }}>
          <div style={{ display: "flex" }}>
            <div
              className="image"
              style={{
                transform: hoverHero.transform,
              }}
            >
              <Image
                src="/images/ctoplady.jpg"
                width={400}
                height={400}
                alt="hero"
                style={{
                  transform: imageHover.transform,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;
      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
  }

  .header-content {
    position: static; /* Cambiamos la posición a estática */
    background-image: url("mancha3.png");
    background-repeat: no-repeat;
    background-size: auto; /* Deja que las imágenes se ajusten automáticamente */
    background-attachment: fixed;
    padding: 2rem 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);
    .text-content {
      > h1 {
        font-size: clamp(1rem, 5vw, 3rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
        font-family: "Alfa Slab One";
        font-weight: 600;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }
    .text-content {
      > h1 > span {
        color: white;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 90%;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      transition: 0.2s; /* Transición general de 0.4 segundos */
      cursor: pointer;
    }

    .image-content .image img {
      border-radius: 8px;
    }

    .image-content .image:hover {
      transform: scale(1.05); /* Cambio en la escala al hacer hover */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra al hacer hover */
    }
  }
`;

export default Header;
