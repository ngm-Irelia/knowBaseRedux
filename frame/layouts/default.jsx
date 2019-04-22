import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultLayout extends Component {

    render() {
        return (
            <div id={ this.props.id } className={ this.props.id }>
                { this.props.children }
            </div>
        );
    }

}

DefaultLayout.propTypes = {
    children: PropTypes.node
};

export default DefaultLayout;
