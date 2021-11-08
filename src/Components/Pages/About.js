import React from "react";
import "./About.css";
import AOS from "aos";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ delay: 100, duration: 1500, once: false });
  }, []);
  return (
    <div id="about" className="about" data-aos="fade-down">
      <h3>About</h3>
      <div className="square">
        <img
          className="photo"
          src="https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg"
          alt="Web Developer"
        />
      </div>
      <div className="txtBox">
        <p>
          I am Tahj, a javascript web developer. My interest in web development
          sparked because of my creative and problem solving nature, because of
          that I decided to set out on a journey to learn development on my own
          with the help of all available resources I could find. As the months
          passed and with each new technology learned, the process only got
          harder and harder but to my suprise I found the challenge enjoyable. I
          persisted through the headaches, errors and fustrations. The more I
          countinued, I realized that I was unlocking more and more of my
          potential and that realization only fueled me and helped me to be a
          more disciplined individual.
        </p>
        <p>
          I started off with the basics Hyper-Text Markup Language - HTML and
          Cascading Style Sheets - CSS. This section was the easiest part of the
          learning process. Everyday I took time out to learn and understand as
          much as possible. The main tool I used was the FreeCodeCamp course on
          Responsive Web Design, that course gave me a hands on approach to
          learning and provided me with a deep understanding of the pivotal role
          HTML and CSS play in web development. At the end of that I course I
          got a {""}
          <a
            href="https://www.freecodecamp.org/certification/tahj_henery/responsive-web-design"
            rel="noreferrer"
            target="_blank"
          >
            Certification in Responsive Website Design.
          </a>
        </p>
        <p>
          That first certification motivated me to continue on the development
          journey, the next step was to learn Javascript, which was the most
          challenging of all. The challenge didn't stop me, again everyday I got
          up and tried to to learn and understand the fundamentals of the
          language. There were two main tools that I used to supply myself with
          knowledge, the first is the FreeCodeCamp's course on Javascript Data
          Structures and Algorithms, the second tool involved alot of reading
          which was very helpful to understanding how the langugae works - it
          was the MDN Javascript Documentation. I continued with the FCC's
          course and obtained a{" "}
          <a
            href="https://www.freecodecamp.org/certification/tahj_henery/javascript-algorithms-and-data-structures"
            rel="noreferrer"
            target="_blank"
          >
            Certification in Javascript Data Structures and Algorithms.
          </a>
        </p>
        <p>
          After understanding the fundamnetals of Javascript I quickly realized
          the modern web development involved using different framworks and
          dependencies to creator dynamic websites. Therefore I contiued the
          journey by doing FCC's course on FrontEnd Development Libraries. This
          course taught me libraries and frameworks such as Bootstrap, jQuery,
          SAAS React.js and Redux. At the end I got a{" "}
          <a
            href="https://www.freecodecamp.org/certification/tahj_henery/front-end-development-libraries"
            rel="noreferrer"
            target="_blank"
          >
            Certification in FrontEnd Development Libraries.
          </a>{" "}
          Next I, started to learn how the backend of web development works, the
          FCC's course on Backend Development and APIs was of great assistance.
          The cousre covered how to mangage packages with NPM, also it gave
          pratical training on Node, Express, MongoDB and Mongoose. I received a{" "}
          <a
            href="https://www.freecodecamp.org/certification/tahj_henery/back-end-development-and-apis"
            rel="noreferrer"
            target="_blank"
          >
            Certification in Backend Development and APIs.
          </a>
        </p>
        <p>
          Overall the road to learning web development has been a challenging
          and enjoyable one, having acquired this skill I feel more disciplined
          and motivated to take on further challenges that come up along the
          way.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
