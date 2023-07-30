import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from '../assets/me.jpg'

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Aman Kumar Singh</h2>
        <p>Motivation is temporary, but discipline lasts forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/channel/UChHDzt8eKyBehsw1Dmx5jSA" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/aman_at_dev?igshid=ZDc4ODBmNjlmNQ==" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Amankumarsingh001" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;