import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    // Api call
    const data = await fetch("https://api.github.com/users/biyondspace");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Child Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");

    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @vkumkum200</h4>
      </div>
    );
  }
}
export default UserClass;

/***
 *
 * -----Mounting--------
 *
 * Constructor (dummy)
 * Render (dummy)
 *       <HTML dummy>
 * Component Did Mount
 *       <Api Call>
 * <this.setState> -> State variable is Update
 *
 * ------Update----------
 *     render (Api data)
 *     <HTML (new api data)>
 *     Component Did Update
 *
 *
 */
