import React, { Component } from 'react'

import Header from '../components/home/Header';
import HomeContent from '../components/home/HomeContent';
import UserList from '../components/home/UserList'
import HomeInfo from '../components/home/HomeInfo'

import '../css/home.css'

export default class Home extends Component {
        constructor(props){
                super(props)
                this.state = {
                        displayList:'none',
                        userList:[]
                }

        }

        componentDidMount(){
                fetch('http://localhost:9000/users',{
                        method:'GET'
                }).then(res => res.json())
                .then(data => {
                        this.setState({
                                userList:data.users
                        })
                })
        }

        toggleDisplayListStatus =  () => {
                if(this.state.displayList === 'block')
                        this.setState({
                                displayList: 'none'
                        })
                else
                        this.setState({
                                displayList: 'block'
                        })
        }

        render() {
                return (
                        <div id="home-container">
                                <Header />
                                <HomeContent toggleDisplayListStatus={this.toggleDisplayListStatus}/>
                                <UserList displayList={this.state.displayList}
                                userList={this.state.userList}
                                />
                                <HomeInfo />
                        </div>
                )
        }
}
