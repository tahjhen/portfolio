import React, { Component } from "react";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="Home" data-aos="zoom-out-down">
          <div className="wrapper">
            <div className="right">
              <h2 className="banner">Javascript Website Developer</h2>
            </div>
            <img
              className="mainPic"
              src="https://entrepreneurhandbook.co.uk/wp-content/uploads/2020/08/Web-development-2.0.jpg.webp"
              alt="WebDevImg"
              width="400px"
            />
          </div>
          <br />
          <hr className="firstHr" />
          <p className="firstP">
            As a javascript website developer I specialize in implementing
            visual elements that users see and interact with in a web
            application. This involves a combination of design, technology and
            programming to code a website’s appearance.
          </p>
          <br />
          <hr />

          <p className="firstP">
            <strong>But</strong> Don't just take my word for it. Take at look at
            my portfolio of projects below.
          </p>
          <i id="down" class="fas fa-angle-down fa-10x" />
        </div>
      </div>
    );
  }
}

export default Home;
