import React, { Component } from 'react'

export default class ConfirmationModal extends Component {
        render() {
                return (
                        <div style={{
                                position:'absolute',
                                width:'100%',
                                height:'100%',
                                zIndex:'10',
                                backgroundColor:'rgb(0,0,0,0.5)'
                        }}>
                               <div style={{
                                       position:'fixed',
                                       width:'15rem',
                                       minWidth:'7rem',
                                       height:'7rem',
                                       top:'35%',
                                       left:'41%',
                                       backgroundColor:'white',
                                       border:'black solid 2px',
                                       textAlign:'center',
                                       fontSize:'1.25rem',
                                       padding:'0.5rem 0.5rem 0 0.5rem'
                               }}>
                                <div style={{
                                        paddingBottom:'1rem'
                                }}>
                                       Are you sure you want to proceed with the payment?
                                </div>
                                <div style={{
                                        display:'flex',
                                        justifyContent:'space-around'
                                }}>  
                                       <button style={{
                                               display:'block',
                                               position:'relative',
                                               bottom:'2px',
                                               float:'left',
                                               color:'green',
                                               border:'1px solid green',
                                               borderRadius: '5px',
                                               fontSize:'1rem',
                                               width:'3rem'
                                       }}
                                       onClick={this.props.makeTransfer}
                                       >Yes</button>
                                       <button style={{
                                               display:'block',
                                               position:'relative',
                                               bottom:'2px',
                                               float:'right',
                                               color:'red',
                                               border:'1px solid red',
                                               borderRadius:'5px',
                                               fontSize:'1rem',
                                               width:'3rem'
                                       }}
                                       onClick={this.props.toggleModal}
                                       >No</button>
                                </div>
                                </div> 
                        </div>
                )
        }
}
