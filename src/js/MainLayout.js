import React, {Component}  from 'react';
import '../css/index.css';
import NewUserField from './NewUserField';
import UserList from './UserList';
import User from './User';


export default class MainLayout extends Component {

    constructor() {
        super();
        this.state = {
            users: [
                {
                    name: "John Snow",
                    id: 1
                },
                {
                    name: "Angelina Jolie",
                    id: 2
                },
                {
                    name: "Christopher Nolan",
                    id: 3
                }],
            currentUser: {},
        };
    };

    componentWillMount() {
        let user = this.state.users[0];
        this.setState(() => {
            Object.assign(this.state.currentUser, user);
        });
    };

    showCurrentUser(id) {
        let currentUser = this.state.users.find((el) => {
            return (el.id === id)
        });
        this.setState(() => {
            Object.assign(this.state.currentUser, currentUser);
        });
    };

    addNewUser(newUser) {
        let userArray = this.state.users;
        userArray.push(newUser);
        this.setState(() => {
            Object.assign(this.state.users, userArray);
        });
    };


    deleteUser(id) {
        let userArray = this.state.users;
        let userIndex = null;
        this.state.users.map((el, index) => {
             (el.id === id) ? userIndex = index : null;
        });
        userArray.splice(userIndex, 1);
        this.setState(() => {
            Object.assign(this.state.users, userArray);
        });
    }

    render() {
        let showCurrentUser = this.showCurrentUser.bind(this);
        let addNewUser = this.addNewUser.bind(this);
        let deleteUser = this.deleteUser.bind(this);

        return (
            <div>Hello
                <UserList users={this.state.users} showCurrentUser={showCurrentUser} deleteUser={deleteUser}/>
                <NewUserField addNewUser={addNewUser}/>
                <User currentUser={this.state.currentUser}/>
            </div>

        )
    };
};


