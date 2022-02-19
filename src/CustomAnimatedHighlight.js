import React from "react";
import PropTypes from "prop-types";

import { Container, Title, SubTitle } from './styles.js';

const CustomAnimatedHighlight = ({ title, subtitle, subtitleColor }) => (
  <Container>
    <Title>{title}</Title>
    <SubTitle color={subtitleColor}>{subtitle}</SubTitle>
  </Container>
);

CustomAnimatedHighlight.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string
};

export default CustomAnimatedHighlight;