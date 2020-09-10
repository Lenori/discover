import React, {Component} from 'react';

import {Content} from './styles';

import Header from '../../components/Header';
import Menu from './Menu';

import Board from './Board';
import Reservations from './Reservations';
import Accounting from './Accounting';
import Property from './Property';
import Calendar from './Calendar';
import Rate from './Rate';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            menu: 'calendar'
        }
    }

    render() {
        return(
            <>
            <Header internal />
            <Content>
                <Menu
                    menu={this.state.menu}
                    menuChange={(e) => this.setState({menu: e})}
                />

                {this.state.menu == 'dashboard' &&
                    <Board changeMenu={(e) => this.setState({menu: e})} />
                }

                {this.state.menu == 'calendar' &&
                    <Calendar />
                }

                {this.state.menu == 'rate' &&
                    <Rate />
                }

                {this.state.menu == 'reservations' &&
                    <Reservations />
                }

                {this.state.menu == 'accounting' &&
                    <Accounting />
                }

                {this.state.menu == 'property' &&
                    <Property />
                }
            </Content>
            </>
        )
    }
}

export default Dashboard;