import React, {Component}  from 'react';

export default class User extends Component {

    shouldComponentUpdate(nextProps) {
        return (this.props.currentUser !== nextProps.currentUser)
    };

    render() {

        return(
            <div className="page-header">
                <h2>{this.props.currentUser.name}</h2>
                <h3>{this.props.currentUser.id}</h3>
            </div>
        )
    }
};

