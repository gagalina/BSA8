import React, {Component}  from 'react';
import UserRow from './UserRow'


export default class UserList extends Component {


    render() {

        let listItem = this.props.users.map((el) => {
            return <UserRow key={el.id} value={el} showCurrentUser={this.props.showCurrentUser} deleteUser={this.props.deleteUser}/>
        });

        return (
            <div>
                <ul>
                    {listItem}
                </ul>
            </div>
        )
    }
}

