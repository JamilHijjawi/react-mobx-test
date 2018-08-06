import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Name extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
