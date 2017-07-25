import React, {Component}  from 'react';

export default class NewUserField extends Component {
    handleSubmit(e){
        e.preventDefault();

        let newUserName = this.refs.nameInput.value;
        let newUserId = this.refs.idInput.value;

        let newUserData = {
            name: newUserName,
            id: newUserId
        };

        this.props.addNewUser(newUserData);
    };



    render() {

        return(
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="nameInput">Name</label>
                <input type="text" id="nameInput" ref="nameInput"/>
                <label htmlFor="idInput">Id</label>
                <input type="number" id="idInput" ref="idInput"/>
                <button type="submit">Add</button>
            </form>
        )
    }
}

