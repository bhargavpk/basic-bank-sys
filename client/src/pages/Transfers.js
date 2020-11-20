import React, { Component } from 'react'

import TableRow from '../components/transfers/TableRow'
import '../css/transfers.css'

export default class Transfers extends Component {
        
        constructor(props){
                super(props)
                this.state = {
                        transfers:[]
                }
        }
        
        componentDidMount(){
                fetch('http://localhost:9000/transfers')
                .then(res => res.json())
                .then(data => {
                        this.setState({transfers:data.transfers})
                })
        }
        
        render() {
                return (
                        <div id="transfers-table">
                                <h1>Transfer History</h1>
                                <table style={{
                                        width:'90%',
                                        margin:'auto'
                                        }}>
                                <TableRow field1="Sender" field2="Reciever" field3="Amount" header={true} field4="Transfer date"/>
                                {
                                        this.state.transfers.map(transfer => (   
                                                <TableRow
                                                        field1={transfer.sender.firstName+' '+transfer.sender.lastName}
                                                        field2={transfer.reciever.firstName+' '+transfer.reciever.lastName}
                                                        field3={transfer.amount}
                                                        field4={transfer.createdAt.split('T')[0]}
                                                        header={false}
                                                />
                                        ))
                                }
                                </table>
                        </div>
                )
        }
}
