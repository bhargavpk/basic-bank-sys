import React, { Component } from 'react'

import ConfirmationModal from './ConfirmationModal'

export default class TransferContent extends Component {
        constructor(props){
                super(props)
                this.state = {
                        availableBalance:0,
                        activeUserId:'',
                        activeIndex:-1,
                        currentValue:0,
                        displayModal:false,
                        listRef:React.createRef()
                }
        }
        componentDidUpdate(prevProps, prevState){
                const userAcc = this.props.userList.filter(user => {
                        return this.props.id === user._id
                })
                if(this.props !== prevProps)
                {
                        this.setState({
                                availableBalance:userAcc[0].balance
                        })
                }
                if(this.state.errMessage !== ""){
                        setTimeout(() => {
                                this.setState({
                                        errMessage:"",
                                })
                        },4000)
                }
        }
        setActiveUser(id,index){
                const userListArr = this.state.listRef.current.childNodes
                if(this.state.activeIndex !== -1)
                {
                        userListArr[this.state.activeIndex].setAttribute("class","user-transfer-list-li")
                }
                userListArr[index].setAttribute("class","selected-user")
                this.setState({
                        activeUserId:id,
                        activeIndex:index
                })
        }
        inputTypeEvent = e => {
                if(e.target.value === '')
                {
                        this.setState({
                                currentValue:0
                        })
                        return
                }
                this.setState({
                        currentValue:parseFloat(e.target.value)
                })
        }
        makeTransfer = e => {
                fetch('/transfer',{
                        method:'PATCH',
                        headers:{
                                'Content-type':'application/json'
                        },
                        body:JSON.stringify({
                              sender:this.props.id,
                              reciever:this.state.activeUserId,
                              amount:this.state.currentValue
                        })
                }).then(res => res.json())
                .then(data => {
                        this.setState({
                                availableBalance:this.state.availableBalance-this.state.currentValue,
                                displayModal:false
                        })
                })
        }
        toggleModal = () => {
                this.setState({
                        displayModal:false
                })
        }
        clickEvent = () => {
                if(this.state.currentValue > this.state.availableBalance)
                {
                        this.setState({
                                errMessage:"Balance not enough!"
                        })
                }
                else if(this.state.activeIndex === -1)
                {
                        this.setState({
                                errMessage:"Click on a user to select"
                        })
                }
                else
                {
                        this.setState({
                                displayModal:true
                        })
                }
        }
        render() {
                const userListArr = this.props.userList.filter(user => {
                        return this.props.id !== user._id
                })
                return (
                        <div>
                                {this.state.displayModal?<ConfirmationModal
                                makeTransfer={this.makeTransfer}
                                toggleModal={this.toggleModal}
                                />:null}
                        <div id="transfer-container">
                                <div id="transfer-query-container">
                                        <input onKeyUp={this.inputTypeEvent}/>
                                        <button onClick={this.clickEvent}>Send</button>
                                </div>
                                {this.state.errMessage !== ""
                                ?<div id="error-message">{this.state.errMessage}</div>
                                :null}
                                <div id="balance-info">
                                        Available balance: {this.state.availableBalance}
                                </div>
                                <div id="user-transfer-list">
                                        <ul ref={this.state.listRef}>
                                                {userListArr.map((user,index) => (
                                                        <li
                                                        className="user-transfer-list-li"
                                                        onClick={() => {this.setActiveUser(user._id,index)}}>
                                                                {user.firstName+' '+user.lastName}
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                              </div>  
                        </div>
                )
        }
}
