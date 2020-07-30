import React, {Component} from 'react';

import {Content} from './styles';

import Table from './Table';

class Board extends Component {
    constructor() {
        super();

        this.state = {
            reservations: []
        }

        this.loadReservations = this.loadReservations.bind(this);
    }

    loadReservations() {
        const data = [
            {
                traveler: 'Adam West',
                id: '31728A671',
                site: 'Deluxe',
                reservationDate: '20 Oct - 23 Oct 2020',
                bookingDate: '18 Oct 2020',
                guests: 3,
                price: 230,
                commision: 30,
                status: 1
            },
            {
                traveler: 'John Doe',
                id: '31728A671',
                site: 'Deluxe',
                reservationDate: '20 Oct - 23 Oct 2020',
                bookingDate: '18 Oct 2020',
                guests: 4,
                price: 280,
                commision: 80,
                status: 2
            },
            {
                traveler: 'Camila White',
                id: '31728A671',
                site: 'Deluxe',
                reservationDate: '20 Oct - 23 Oct 2020',
                bookingDate: '18 Oct 2020',
                guests: 1,
                price: 180,
                commision: 20,
                status: 3
            }
        ];

        this.setState({reservations: data});
    }

    componentWillMount() {
        this.loadReservations();
    }

    render() {
        return(
            <Content>
                <h1>Reservations</h1>
                
                <Table data={this.state.reservations} />
            </Content>
        )
    }
}

export default Board;