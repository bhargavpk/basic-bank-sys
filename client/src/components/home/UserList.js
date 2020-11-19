import React, { Component } from 'react';

export default class UserList extends Component {
        constructor(props){
                super(props);
                this.state = {
                        users:[{
                                name:'Bhargav'
                        },{
                                name:'Argul'
                        },{
                                name:'Janya'
                        },{
                                name:'Bhargav'
                        },{
                                name:'Argul'
                        },{
                                name:'Janya'
                        },{
                                name:'Bhargav'
                        },{
                                name:'Argul'
                        },{
                                name:'Janya'
                        }]
                }
        }

        render() {
                return (
                        <div
                        style={{
                                display:this.props.displayList
                        }}
                        id="user-list-container">
                                <ul>
                                        {
                                                this.props.userList.map(nameObj => (
                                                        <li><a href={"/transfer/"+nameObj._id}>{nameObj.firstName + ' ' + nameObj.lastName}</a></li> 
                                                ))
                                        }
                                </ul>
                        </div>
                )
        }
}
