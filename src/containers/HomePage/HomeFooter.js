import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {
    
    render() {
        return (
            <div className="home-footer ">
                <p>&copy; Crit Đặng. 2021. More information. <a target="_blank" href='#'>Click Here</a> </p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    //lấy biến thông qua props
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
