import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import codecamp from "./assets/codecamp.png";
import odin from "./assets/odin.png";
import code from "./assets/code.jpg";
import w3 from "./assets/w3.jpg";
import git from "./assets/git.jpg";
import stack from "./assets/stacl.png";
import udemy from "./assets/udemy.jpg";
import khan from "./assets/kahan.png";
import hack from "./assets/hack.png";
import leet from "./assets/leet.png";

import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen bg-neutral-200 flex flex-col overflow-auto justify-center">
      <div className="w-full h-1/6 flex justify-center items-center text-5xl">
        <h1>Tech Portal</h1>
      </div>
      <div className="w-full h-5/6 text-white text-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center items-center">
        <Card
          name="Free Code Camp"
          img={codecamp}
          link="https://www.freecodecamp.org/"
        />
        <Card
          name="The Odin Project"
          img={odin}
          link="https://www.theodinproject.com/"
        />
        <Card
          name="Code Academy"
          img={code}
          link="https://www.codecademy.com/"
        />
        <Card name="W3 Schools" img={w3} link="https://www.w3schools.com/" />
        <Card name="Github" img={git} link="https://github.com/" />
        <Card
          name="Stack Overflow"
          img={stack}
          link="https://stackoverflow.com/"
        />
        <Card name="Udemy" img={udemy} link="https://www.udemy.com/" />
        <Card
          name="Khan Academy"
          img={khan}
          link="https://www.khanacademy.org/"
        />
        <Card
          name="Hacker Rank"
          img={hack}
          link="https://www.hackerrank.com/"
        />
        <Card name="Leet Code" img={leet} link="https://leetcode.com/" />
      </div>
    </div>
  );
}

export default App;
