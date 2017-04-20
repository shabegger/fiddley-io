'use strict';

const PropTypes = require('prop-types');
const React = require('react');

const style = {
  resize: 'none'
};

class Editor extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
  }

  render() {
    const { onChange, value } = this.props;

    return (
      <textarea className="fiddley" style={style}
                onChange={onChange} value={value} />
    );
  }
}

module.exports = Editor;
