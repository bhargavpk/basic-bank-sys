import React, { Component } from 'react'

import Header from '../components/home/Header'
import TransferContent from '../components/transfer/TransferContent'

import '../css/home.css'
import '../css/transfer.css'

export default class Transfer extends Component {
        constructor(props){
                super(props)
                this.state = {
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
        render() {
                return (
                        <div id="transfer-container">
                               <Header />
                                <TransferContent
                                id={this.props.match.params.id}
                                userList={this.state.userList}/>
                        </div>
                )
        }
}
