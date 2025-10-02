import User from "./User";
import UserClass from "./UserClass";

import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
    //Api call
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste React web series</h2>
        <UserClass name={"Kumkum (classes)"} location={"Gujarat (class)"} />
      </div>
    );
  }
}

export default About;
