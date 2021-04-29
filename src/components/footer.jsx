import { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Divfooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
`

function FooterBar() {
  return (
    <Divfooter className="text-center p-3" style={{backgroundColor: "#e3f2fd", marginTop: "100px"}}>
    © 2020 Copyright:
    <a className="text-dark" href="/Homepage">Eventertainment.com</a>
    </Divfooter>
  );
}

export default FooterBar;
