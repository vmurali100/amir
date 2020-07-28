import React, { Component } from "react";
import axios from "axios";

export default class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
  async componentDidMount() {
    let allusers = await this.getusers();
    let users = allusers.data;
    this.setState({ users });
  }

  getusers() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  }
}
