import React from "react";
import "./Portfolio.css";
import AOS from "aos";
import { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    AOS.init({ delay: 100, duration: 1500, once: false });
  }, []);
  return (
    <div id="portfolio" className="overlay-portfolio">
      <div className="Portfolio ">
        <h3>Portfolio</h3>
        <p>
          These are just a few of my favourite projects. They have combined my
          understanding of various different technologies into pratical code and
          real applications.
        </p>
        <div className="row1-container">
          <div className="box box-down cyan" data-aos="flip-right">
            <a
              className="portfolio-links"
              href="https://cryptojam.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>CryptoJam</h2>
              <p>
                Built using React.js, Redux Toolkit, Charts.js, Ant Design,
                RapidAPI,
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                alt=""
              />
            </a>
          </div>

          <div className="box red" data-aos="flip-up">
            <a
              className="portfolio-links"
              href="https://memories-app10.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Create Memories</h2>
              <p>
                Fullstack MongoDb, Express.js React.js Node.js, Redux CRUD web
                app
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-team-builder.svg"
                alt=""
              />
            </a>
          </div>

          <div className="box box-down blue" data-aos="flip-left">
            <a
              className="portfolio-links"
              href="https://ecommerce-jam.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Ecommerce Jam</h2>
              <p>Built with React.js, Commerce.js, Material UI</p>
              <img
                src="https://assets.codepen.io/2301174/icon-calculator.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="row2-container">
          <div className="box bottom skyBlue" data-aos="flip-right">
            <a
              className="portfolio-links"
              href="https://letschat2u.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>LetsChat2u</h2>
              <p>Built with React.js, Context API Firebase, Chatengine</p>
              <img
                src="https://www.svgrepo.com/show/26263/chat.svg"
                width="65px"
                alt=""
              />
              {/* https://www.svgrepo.com/show/138783/chat.svg  */}
            </a>
          </div>
          <div className="box bottom orange" data-aos="flip-down">
            <a
              className="portfolio-links"
              href="https://searcher-1.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Searcher</h2>
              <p>Built with React.js, Google Search API, Tailwind CSS</p>
              <img
                src="https://assets.codepen.io/2301174/icon-karma.svg"
                width="65px"
                alt=""
              />
              {/* https://assets.codepen.io/2301174/icon-karma.svg */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
