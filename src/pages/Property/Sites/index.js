import React, {Component} from 'react';

import {toast} from 'react-toastify';

import Switch from 'react-switch';

import {Content, Form, Items, Site, Header, Body, Info, Buttons, SitesList, SiteItem, Controls, Span} from './styles';

import Edit from './Edit';
import EditSite from './EditSite';
import NewType from './NewType';

class Sites extends Component {
    constructor() {
        super();

        this.state = {
            edit: false,
            editSite: false,
            addSites: false,
            numberOfNewSites: null,
            new: false,
            sites: [],
            site: null,
            index: null,
            siteIndex: null
        }

        this.loadSites = this.loadSites.bind(this);
        this.submit = this.submit.bind(this);
        this.addSiteType = this.addSiteType.bind(this);
        this.addSites = this.addSites.bind(this);
        this.editSiteType = this.editSiteType.bind(this);
        this.editSite = this.editSite.bind(this);
        this.deleteSiteType = this.deleteSiteType.bind(this);
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
                otherTax: false,
                sites: []
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
                otherTax: false,
                sites: []
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
                otherTax: false,
                sites: [
                    {siteName: 'teste', active: true}
                ]
            }
        ];

        this.setState({sites: sites});
    }

    addSiteType(data) {
        const sites = this.state.sites;

        sites.push(data);

        // call to add site on database
        
        this.setState({sites: sites, new: false});
    }

    addSites() {
        const Newsites = [];

        for (let i = 1; i <= this.state.numberOfNewSites; i++) {
            let site = {
                siteName: `New site ${i}`
            };

            Newsites.push(site);
        }

        const sites = this.state.sites;

        sites[this.state.index].sites = Newsites;

        this.setState({
            sites: sites,
            addSites: null
        });
    }

    editSiteType(index, data) {
        const sites = this.state.sites;

        sites[index] = data;

        // call to edit site type on database
        
        this.setState({sites: sites, edit: false});
    }

    editSite(typeIndex, itemIndex, data) {
        const sites = this.state.sites;

        sites[typeIndex].sites[itemIndex] = data;

        console.log(sites[typeIndex].sites[itemIndex]);

        // call to edit site on database
        
        this.setState({sites: sites, editSite: false});
    }

    deleteSiteType(index) {
        const sites = this.state.sites;

        sites.splice(index, 1);

        // call to delete site type from database

        this.setState({sites: sites});
    }

    deleteSite(typeIndex, itemIndex) {
        const sites = this.state.sites;

        sites[typeIndex].sites.splice(itemIndex, 1);

        // call to delete site from database

        this.setState({sites: sites});
    }

    submit(e) {
        e.preventDefault();

        if (this.state.sites.length == 0) {
            toast.error('Please add at least one site type.');
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
                {!this.state.edit && !this.state.new && !this.state.editSite &&
                    <Form>
                        <button onClick={() => this.setState({new: true})}>New site type</button>

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
                                        {!this.state.addSites &&
                                            <Buttons>
                                                <p onClick={() => this.setState({site: site, index: index, addSites: true})}>Add sites</p>
                                                <p onClick={() => this.setState({site: site, index: index, edit: true})}>Edit</p>
                                                <p onClick={() => this.deleteSiteType(index)}>Delete</p>
                                            </Buttons>
                                        }

                                        {this.state.addSites && this.state.index == index &&
                                            <Buttons>
                                                <input type='number' min='1' max='5' onChange={(e) => this.setState({numberOfNewSites: e.target.value})} />
                                                <p onClick={() => this.addSites()}>Done</p>
                                            </Buttons>
                                        }
                                    </Body>
                                    {!this.state.addSites &&
                                        <SitesList>
                                            {site.sites.map((item, itemIndex) => (
                                                <SiteItem>
                                                    <h2>{item.siteName}</h2>
                                                    <Switch checked={item.active} />
                                                    <p onClick={() => this.setState({editSite: true, site: site, index: index, siteIndex: itemIndex})}>Edit</p>
                                                    <p onClick={() => this.deleteSite(index, itemIndex)}>Delete</p>
                                                </SiteItem>
                                            ))}
                                        </SitesList>
                                    }
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
                        editSite={(index, data) => this.editSiteType(index, data)}
                        goBack={() => this.setState({edit: false})}
                    />
                }

                {this.state.editSite &&
                    <EditSite
                        index={this.state.index}
                        site={this.state.site}
                        siteIndex={this.state.siteIndex}
                        editSite={(typeIndex, siteIndex, data) => this.editSite(typeIndex, siteIndex, data)}
                        goBack={() => this.setState({editSite: false})}
                    />
                }

                {this.state.new &&
                    <NewType
                        addSiteType={(data) => this.addSiteType(data)}
                        goBack={() => this.setState({new: false})}
                    />
                }
            </Content>
        )
    }
}

export default Sites;