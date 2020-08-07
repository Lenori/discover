import React, {Component} from 'react';

import {Content} from './styles';

import Menu from './Menu';

import Board from './Board';
import Reservations from './Reservations';
import Accounting from './Accounting';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            menu: 'accounting'
        }
    }

    render() {
        return(
            <Content>
                <Menu
                    menu={this.state.menu}
                    menuChange={(e) => this.setState({menu: e})}
                />

                {this.state.menu == 'dashboard' &&
                    <Board changeMenu={(e) => this.setState({menu: e})} />
                }

                {this.state.menu == 'reservations' &&
                    <Reservations />
                }

                {this.state.menu == 'accounting' &&
                    <Accounting />
                }
            </Content>
        )
    }
}

export default Dashboard;