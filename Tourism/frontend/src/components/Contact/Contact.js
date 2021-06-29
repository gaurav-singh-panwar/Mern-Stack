import React, { Component } from "react";
import customer from "./customer.png";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  render() {
    return (
      <div className="q">
        <div className="container">
          <div className="container text-left">
            <br></br>
            <br></br>
            <h1 className="d">
              {" "}
              <img src={customer}></img>&nbsp;Contact Us
            </h1>
            <br></br>

            <h1>Director General's Office</h1>
            <br></br>
            <h5>
              {" "}
              <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;Phone Number
              <br></br>
              <br></br>+91 **********{" "}
            </h5>
            <br></br>
            <h5>
              {" "}
              <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;Email
              <br></br>
              <br></br>Tourism.Agency@gmail.com{" "}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
