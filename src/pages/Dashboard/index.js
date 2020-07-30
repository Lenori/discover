import React, {Component} from 'react';

import {Content} from './styles';

import Menu from './Menu';

import Board from './Board';
import Reservations from './Reservations';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            menu: 'reservations'
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

{               this.state.menu == 'reservations' &&
                    <Reservations />
                }
            </Content>
        )
    }
}

export default Dashboard;