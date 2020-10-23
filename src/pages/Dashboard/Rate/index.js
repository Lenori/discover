import React, {Component} from 'react';

import {Content, ContentHeader} from './styles';

import Table from './Table';
import New from './New';

class Rate extends Component {
    constructor() {
        super();

        this.state = {
            plans: [],
            new: false
        }

        this.loadPlans = this.loadPlans.bind(this);
    }

    loadPlans() {
        const data = [
            {
                name: 'Standard rate',
                management: 'Automatic',
                policy: 'General',
                restrictions: 'No',
                sites: [
                    'Deluxe',
                    'Premium',
                    'Bronze',
                    'Star',
                    'Gold'
                ]
            }
        ];

        this.setState({plans: data});
    }

    componentWillMount() {
        this.loadPlans();
    }

    render() {
        return(
            <Content>
                <ContentHeader>
                    <h1>Rate plans</h1>
                    <button onClick={() => this.setState({new: true})}>Add new plan</button>
                </ContentHeader>

                {!this.state.new &&
                    <Table
                        data={this.state.plans}
                    />
                }

                {this.state.new &&
                    <New />
                }
            </Content>
        )
    }
}

export default Rate;