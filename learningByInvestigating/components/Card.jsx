import React from 'react'
import PropTypes from 'prop-types';
class Card extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

// Card.propTypes={
//   children: PropTypes.element.isRequired
// }
// // import PropTypes from 'prop-types';

Card.propTypes = {
  name:'Sourya' // only ONE element
};

export default Card