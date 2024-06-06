import React from "react";
import sidelogo from "../Assests/images/logo.png";

import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { VscChevronDown } from "react-icons/vsc";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

function Home() {
  return (
    <>
      <div className="home">
        <div className="Blockcontent-1">
          <div className="Heading-1">
            <h1>CREATIVE</h1>
          </div>
        </div>
        <div className="Blockcontent-2">
          <div className="para-1">
            <small>
              Lorem is the simple dummy text for the printing and<br></br>{" "}
              texting industury, Lorem has industury dummy<br></br> text for the
              industury since 1500
            </small>
          </div>
          <div className="Heading-3">
            <h1>STUDIO</h1>
          </div>
        </div>

        <div>
          <a href="#About">
            <button className="vertical-line-container-1">
              <HiOutlineArrowLongDown className="arrow-down" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Home;
