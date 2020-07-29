import React, {Component} from 'react';

import {toast} from 'react-toastify';

import {Content, Form, Items, Site, Header, Body, Info, Buttons, Controls, Span} from './styles';

import Edit from './Edit';
import New from './New';

class Sites extends Component {
    constructor() {
        super();

        this.state = {
            edit: false,
            new: false,
            sites: [],
            site: null,
            index: null
        }

        this.loadSites = this.loadSites.bind(this);
        this.submit = this.submit.bind(this);
        this.addSite = this.addSite.bind(this);
        this.editSite = this.editSite.bind(this);
        this.deleteSite = this.deleteSite.bind(this);
    }

    loadSites() {

        const sites = [
            {
                title: 'Deluxe',
                price: '50.00',
                pax: 12,
                rv: 35,
                weekDiscount: 7,
                monthDiscount: 10,
                wheel: true,
                classA: true,
                classB: false,
                classC: false,
                popup: false,
                tent: true,
                toy: false,
                travelTrailer: false,
                salesTax: false,
                stateTax: false,
                countryTax: false,
                otherTax: false
            },
            {
                title: 'Deluxe',
                price: '50.00',
                pax: 12,
                rv: 35,
                weekDiscount: 7,
                monthDiscount: 10,
                wheel: true,
                classA: true,
                classB: false,
                classC: false,
                popup: false,
                tent: true,
                toy: false,
                travelTrailer: false,
                salesTax: false,
                stateTax: false,
                countryTax: false,
                otherTax: false
            },
            {
                title: 'Deluxe',
                price: '50.00',
                pax: 12,
                rv: 35,
                weekDiscount: 7,
                monthDiscount: 10,
                wheel: true,
                classA: true,
                classB: false,
                classC: false,
                popup: false,
                tent: true,
                toy: false,
                travelTrailer: false,
                salesTax: false,
                stateTax: false,
                countryTax: false,
                otherTax: false
            }
        ];

        this.setState({sites: sites});
    }

    addSite(data) {
        const sites = this.state.sites;

        sites.push(data);

        // call to add site on database
        
        this.setState({sites: sites, new: false});
    }

    editSite(index, data) {
        const sites = this.state.sites;

        sites[index] = data;

        // call to edit site on database
        
        this.setState({sites: sites, edit: false});
    }

    deleteSite(index) {
        const sites = this.state.sites;

        sites.splice(index, 1);

        // call to delete site from database

        this.setState({sites: sites});
    }

    submit(e) {
        e.preventDefault();

        if (this.state.sites.length == 0) {
            toast.error('Please add at least one site.');
            return;
        }

        this.props.nextStep(this.state);
    }

    componentDidMount() {
        this.loadSites();
    }

    render() {
        return(
            <Content>
                {!this.state.edit && !this.state.new &&
                    <Form>
                        <button onClick={() => this.setState({new: true})}>New site</button>

                        <Items>
                            {this.state.sites.map((site, index) => (
                                <Site>
                                    <Header>
                                        <h2>{site.title}</h2>
                                        <p>${site.price}</p>
                                    </Header>
                                    <Body>
                                        <Info>
                                            <p>{site.pax} Pax</p>
                                            <p>{site.rv} ft Max Length</p>
                                        </Info>
                                        <Buttons>
                                            <p onClick={() => this.setState({site: site, index: index, edit: true})}>Edit</p>
                                            <p onClick={() => this.deleteSite(index)}>Delete</p>
                                        </Buttons>
                                    </Body>
                                </Site> 
                            ))}       
                        </Items>

                        <Controls>
                            <Span onClick={() => this.props.previous()}>Previous</Span>

                            <button onClick={(e) => this.submit(e)}>Proceed</button>
                        </Controls>
                    </Form>
                }

                {this.state.edit &&
                    <Edit
                        index={this.state.index}
                        site={this.state.site}
                        editSite={(index, data) => this.editSite(index, data)}
                        goBack={() => this.setState({edit: false})}
                    />
                }

                {this.state.new &&
                    <New
                        addSite={(data) => this.addSite(data)}
                        goBack={() => this.setState({new: false})}
                    />
                }
            </Content>
        )
    }
}

export default Sites;