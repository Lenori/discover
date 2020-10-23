import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {FaChartArea, FaTag, FaBookmark, FaHome, FaBook, FaTimes} from 'react-icons/fa';

import {Content, Item, SubMenus, SubMenu} from './styles';

class Menu extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <Content show={this.props.showMenu}>
                <FaTimes onClick={() => this.props.toggleMenu()} />
                <Link to='/dashboard'>
                    <Item
                        selected={this.props.menu == 'dashboard' ? true : false}>
                        <FaChartArea />
                        <h2>Dashboard</h2>
                    </Item>
                </Link>

                <Item
                    blockHover>
                    <FaTag />
                    <h2>Price and Availability</h2>
                </Item>
                <SubMenus>

                    <Link to='/dashboard/calendar'>
                        <SubMenu
                            selected={this.props.menu == 'calendar' ? true : false}
                        >Calendar</SubMenu>
                    </Link>

                    <Link to='/dashboard/rate'>
                        <SubMenu
                            selected={this.props.menu == 'rate' ? true : false}
                        >Rate plan</SubMenu>
                    </Link>

                </SubMenus>

                <Link to='/dashboard/reservations'>
                    <Item
                        selected={this.props.menu == 'reservations' ? true : false}>
                        <FaBookmark />
                        <h2>Reservations</h2>
                    </Item>
                </Link>

                <Link to='/dashboard/property'>
                    <Item
                        onClick={() => this.props.menuChange('property')}
                        selected={this.props.menu == 'property' ? true : false}>
                        <FaHome />
                        <h2>Property Management</h2>
                    </Item>
                </Link>

                <Link to='/dashboard/accounting'>
                    <Item
                        onClick={() => this.props.menuChange('accounting')}
                        selected={this.props.menu == 'accounting' ? true : false}>
                        <FaBook />
                        <h2>Accounting</h2>
                    </Item>
                </Link>
            </Content>
        )
    }
}

export default Menu;