import React, { Component } from 'react'

export default class HomeContent extends Component {

        clickEvent = () => {
                this.props.toggleDisplayListStatus();
        }

        render() {
                return (
                        <div id="home-content">
                                <div id="main-user-nav-bar">
                                        <div id="user-nav-bar">
                                                <button onClick={this.clickEvent}>View customers</button>
                                        </div>
                                </div>
                        </div>
                )
        }
}
