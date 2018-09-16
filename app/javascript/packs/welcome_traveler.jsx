// Path : app/javascript/welcome_traveler.jsx
import React from "react";
import ReactDOM from 'react-dom'
import PropTypes from "prop-types";

class WelcomeTraveler extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome {this.props.name}, </h1>

        <h3>Are you ready to travel?</h3>
      </div>
    );
  }
}

WelcomeTraveler.propTypes = {
  name: PropTypes.string
};

export default WelcomeTraveler;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <WelcomeTraveler name="Roger" />,
    document.body.appendChild(document.createElement('div')),
  )
});
