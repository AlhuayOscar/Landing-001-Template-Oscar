"use client";

import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
interface Props {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const text = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.4, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.2, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );

  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};

function TextSection() {
  return (
    <TextSectionStyled>
      <TextWrapper>Landing Page.</TextWrapper>
      <TextWrapper>Servicio de Ecommerce.</TextWrapper>
      <TextWrapper>Recomendaciones Habituales. </TextWrapper>
      <TextWrapper>Monetización y suscripciones. </TextWrapper>
      <TextWrapper>Integración de Redes Sociales. </TextWrapper>
      <TextWrapper>Paneles de administración. </TextWrapper>
      <TextWrapper>Seguridad y Encriptación de datos. </TextWrapper>
    </TextSectionStyled>
  );
}

const TextSectionStyled = styled.section`

  p {
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
`;

export default TextSection;
