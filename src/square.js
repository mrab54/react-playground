import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

/* eslint-disable import/prefer-default-export */
export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  render() {
    const { value } = this.state;
    return (
      <button type="button" className="square" onClick={() => this.setState({ value: 'X' })}>
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.number.isRequired,
};
