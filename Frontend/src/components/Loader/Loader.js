import React, { Component } from 'react';
import './Loader.scss';

class Loader extends Component {

  // Sets the opacity to 0 100ms after component mounted and removes loader from DOM 2 seconds after
  componentDidMount() {
    setTimeout(async () => {

      document.querySelector('.loader-container').style.transition = 'opacity 3s';
      document.querySelector('.loader-container').style.opacity = '0';

      setTimeout(async () => {
        document.querySelector('.loader-container').remove();
      }, 1000);

    }, 100);
  }

  render() {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      </div>
    );
  }
}

export default Loader;
