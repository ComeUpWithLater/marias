import React from 'react';
import styled from 'styled-components';
import { Styles, Interfaces, siteConfig } from '../../site-config';

interface Props {
  background?: Interfaces.Colors;
}

const Foot = styled.footer<Props>`
  width: 100%;
  height: ${siteConfig.nav.style.footerHeight};
  box-shadow: 1px 1px transparent;
  border-top: 1px solid #dadce0;
  background: ${(props) =>
    props.background ? Styles.Colors[props.background] : Styles.Colors.background};
`;

const Footer: React.FC<Props> = (props) => {
  return <Foot></Foot>;
};

export default Footer;
