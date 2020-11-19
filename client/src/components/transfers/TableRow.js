import React, { Component } from 'react'

export default class TableRow extends Component {
        render() {
                return (
                        this.props.header === true
                        ?<tr>
                                <th>{this.props.field1}</th>
                                <th>{this.props.field2}</th>
                                <th>{this.props.field3}</th>
                                <th>{this.props.field4}</th>
                        </tr>
                        :<tr>
                                <td>{this.props.field1}</td>
                                <td>{this.props.field2}</td>
                                <td>{this.props.field3}</td>
                                <td>{this.props.field4}</td>
                        </tr>
                )
        }
}
