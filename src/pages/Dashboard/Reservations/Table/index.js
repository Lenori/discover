import React, {Component} from 'react';

import {Content, Confirmed, Cancelled, Expired} from './styles';;

class Table extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <Content>
                <table>
                    <tr>
                        <th>Traveler</th>
                        <th>Site</th>
                        <th>Reservation date(s)</th>
                        <th>Booking date</th>
                        <th>Guests</th>
                        <th>Price (USD)</th>
                        <th>Commision (USD)</th>
                        <th>Status</th>
                    </tr>
                    
                    {this.props.data.map(reservation => (
                        <tr>
                            <td><h2>{reservation.traveler}</h2><p>{reservation.id}</p></td>
                            <td>{reservation.site}</td>
                            <td>{reservation.reservationDate}</td>
                            <td>{reservation.bookingDate}</td>
                            <td>{reservation.guests}</td>
                            <td>{reservation.price}</td>
                            <td>{reservation.commision}</td>
                            <td>
                                {reservation.status == 1 &&
                                    <Confirmed>Confirmed</Confirmed>
                                }

                                {reservation.status == 2 &&
                                    <Cancelled>Cancelled</Cancelled>
                                }

                                {reservation.status == 3 &&
                                    <Expired>Expired</Expired>
                                }
                            </td>
                        </tr>
                    ))}
                </table>                
            </Content>
        )
    }
}

export default Table;