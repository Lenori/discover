import React, {Component} from 'react';

import {Content} from './styles';

import PropertyInformation from './Information';

class Property extends Component {
    constructor() {
        super();

        this.state = {
            step: 1
        }
    }

    render() {
        return(
            <Content>
                {this.state.step == 1 &&
                    <PropertyInformation />
                }
            </Content>
        )
    }
}

export default Property;