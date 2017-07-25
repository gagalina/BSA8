import React, {Component}  from 'react';

export default class UserRow extends Component {

    render() {
        let id = this.props.value.id;


        return (
            <li onClick={() => this.props.showCurrentUser(id)}
                data-id={this.props.value.id}>{this.props.value.name}
                <button type="button" onClick={() => this.props.deleteUser(this.props.value.id)}>Delete</button>
            </li>
        )
    }
}

