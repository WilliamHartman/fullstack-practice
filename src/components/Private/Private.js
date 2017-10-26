import React, { Component } from 'react';
import './Private.css';
import { getUserInfo } from './../../ducks/users';
import { connect } from 'react-redux';

class Private extends Component {

    componentDidMount = () => {
      this.props.getUserInfo();
    }
    
    render(){
        return (
            <div>
                <h1>Private Component</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userData: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo } )(Private);