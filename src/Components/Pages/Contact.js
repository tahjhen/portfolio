import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="container" data-aos="flip-up">
      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button close"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACT</span>
              <span>ME</span>
            </div>
            <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
          </div>
          <div className="screen-body-item">
            <div className="app-form">
              <form
                action="https://formsubmit.co/3016432673bd4237b4e3aca0ed2231cc"
                method="POST"
              >
                <div className="app-form-group">
                  <input
                    name="name"
                    type="text"
                    className="app-form-control"
                    placeholder="NAME"
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    name="email"
                    type="email"
                    placeholder="EMAIL"
                  />
                </div>
                <div className="app-form-group">
                  <input
                    name="number"
                    className="app-form-control"
                    placeholder="CONTACT NO"
                  />
                </div>
                <div className="app-form-group message">
                  <input
                    className="app-form-control"
                    name="message"
                    placeholder="MESSAGE"
                  />
                </div>
                <div className="app-form-group buttons">
                  <button type="submit" className="app-form-button">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
