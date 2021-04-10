/* eslint-disable react/static-property-placement */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  static propTypes = {
    history: PropTypes.object,
  };

  constructor(props) {
    super();
    this.profileNameEntered = this.profileNameEntered.bind(this);
  }

  userName = React.createRef();

  profileNameEntered(event) {
    event.preventDefault();
    const userName = this.userName.current.value;
    this.props.history.push(`/portfolio/${userName}`);
  }

  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.profileNameEntered}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.userName}
            placeholder="Store Name"
            required
          />
          <button type="submit">Visit Store</button>
        </form>
      </>
    );
  }
}
