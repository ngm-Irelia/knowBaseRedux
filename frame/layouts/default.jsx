import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* import { Provider } from 'react-redux';
import store from 'build/store/store';

import { Header } from 'build/common/common'; */

class DefaultLayout extends Component {

    render() {
        return (
            <div id={ this.props.id } className={ this.props.id }>
                { this.props.children }
                {/* <div>cccccccc</div>
                <Provider store={store}>
                    <div>
                        <div>aaaaa</div>
                        <Header />
                        
                    </div>
                </Provider>  */}
                
            </div>
        );
    }

}

DefaultLayout.propTypes = {
    children: PropTypes.node
};

export default DefaultLayout;
