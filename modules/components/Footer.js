import React from "react";
import { Block, Inline } from "jsxstyle";

import { DARK_GRAY, BRIGHT_GRAY, LIGHT_GRAY } from "../Theme.js";

function FooterLink({ href, ...rest }) {
  return (
    <Inline
      component="a"
      props={{ href }}
      {...rest}
      textDecoration="underline"
    />
  );
}

function RemixTeam() {
  return <FooterLink href="https://remix.run">the Remix team</FooterLink>;
}

function Contributors() {
  return (
    <FooterLink href="https://github.com/remix-run/react-router/graphs/contributors">
      contributors
    </FooterLink>
  );
}

function CC() {
  return (
    <FooterLink href="https://creativecommons.org/licenses/by/4.0/">
      CC 4.0
    </FooterLink>
  );
}

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <Block
      background={DARK_GRAY}
      color={BRIGHT_GRAY}
      padding="40px"
      textAlign="center"
      fontSize="80%"
    >
      <Block component="p" margin="0">
        React Router is developed by <RemixTeam /> and maintained with help
        from <Contributors />.
      </Block>
      <Block marginTop="20px" color={LIGHT_GRAY}>
        &copy; {year} Shopify, Inc.
      </Block>
      <Block color={LIGHT_GRAY}>
        Docs and examples <CC />
      </Block>
    </Block>
  );
}
