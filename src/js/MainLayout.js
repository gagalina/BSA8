import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import {NewUserField} from './NewUserField';
import {UserList} from './UserList';
import {User} from './User';



class MainLayout extends Component {

    render() {
        return(
            <div>Hello
                <UserList/>
                <NewUserField/>
                <User/>
            </div>

        )
    }
};

export {MainLayout};