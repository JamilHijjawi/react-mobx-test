import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@observer
export default class List extends Component {
    render() {
        return (
            <ul>
                {this.props.BirdStore.birds.map(b => <li key={b}>{b}</li>)}
            </ul>
        )
    }
}
