
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CodeIcon extends Component {
  render() {
    var defaults = {
      'aria-hidden': true,
      height: 16,
      width: 14,
      viewBox: '0 0 14 16',
      style: {
        display: 'inline-block',
        verticalAlign: 'text-top',
        fill: 'currentColor',
      },
    };
    return (
      <svg {...defaults} {...this.props}>
        <path fillRule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/>
      </svg>
    );
  }
}
export default CodeIcon;
