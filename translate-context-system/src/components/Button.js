import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Gửi đi';
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>{(value) => this.renderSubmit(value)}</LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;