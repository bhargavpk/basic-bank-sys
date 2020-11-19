import React, { Component } from 'react'

export default class HomeInfo extends Component {
        render() {
                return (
                        <div id="home-info">
                                <div className="info-head">Transfer money in 3 simple steps:</div>
                                <div className="info-field">1) Click on 'View customers' and select the sender</div>
                                <div className="info-field">2) Enter a valid amount and click among recipients</div>
                                <div className="info-field">3) Click Send and confirm transfer request!</div>
                        </div>
                )
        }
}
