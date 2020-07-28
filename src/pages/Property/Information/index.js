import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import Select from 'react-select';
import {FaCloudUploadAlt} from 'react-icons/fa'

import selectStyles from '../../../styles/selectInputStyles';

import {Content, Half, Form, ImageInput, ImagePreview, HalfInput, Controls, Span} from './styles';

import Location from './Location';

class PropertyInformation extends Component {
    constructor() {
        super();

        this.state = {
            pname: null,
            image: null,
            imageURL: null,
            email: null,
            website: null,
            fax: null,
            phone: null,
            checkin: null,
            checkout: null,
            address: null,
            country: null,
            state: null,
            city: null,
            latitude: null,
            longitude: null
        }

        this.submit = this.submit.bind(this);
        this.loadCountries = this.loadCountries.bind(this);
        this.updateImage = this.updateImage.bind(this);
        this.updateCountry = this.updateCountry.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    loadCountries() {
        const countries = [
            {
                value: 'USA',
                label: 'USA',
                states: [
                    {
                        value: 'Illinois',
                        label: 'Illinois',
                        cities: [
                            {
                                value: 'Chicago',
                                label: 'Chicago'
                            }
                        ]
                    },
                    {
                        value: 'New York',
                        label: 'New York',
                        cities: [
                            {
                                value: 'New York',
                                label: 'New York'
                            }
                        ]
                    }
                ]
            },
            {
                value: 'Country 1',
                label: 'Country 1',
                states: [
                    {
                        value: 'Country 1 State 1',
                        label: 'Country 1 State 1',
                        cities: [
                            {
                                value: 'Country 1 State 1 City 1',
                                label: 'Country 1 State 1 City 1'
                            }
                        ]
                    },
                    {
                        value: 'Country 1 State 2',
                        label: 'Country 1 State 2',
                        cities: [
                            {
                                value: 'Country 1 State 2 City 1',
                                label: 'Country 1 State 2 City 1'
                            }
                        ]
                    }
                ]
            },
            {
                value: 'Country 2',
                label: 'Country 2',
                states: [
                    {
                        value: 'Country 2 State 1',
                        label: 'Country 2 State 1',
                        cities: [
                            {
                                value: 'Country 2 State 1 City 1',
                                label: 'Country 2 State 1 City 1'
                            }
                        ]
                    },
                    {
                        value: 'Country 2 State 2',
                        label: 'Country 2 State 2',
                        cities: [
                            {
                                value: 'Country 2 State 2 City 1',
                                label: 'Country 2 State 2 City 1'
                            }
                        ]
                    }
                ]
            }
        ];

        this.setState({countries: countries});
    }

    updateImage(image) {
        const reader = new FileReader();
        const url = reader.readAsDataURL(image);

        reader.onloadend = () => {
            this.setState({
                imageURL: [reader.result]
            })
          };
    }

    updateCountry(selection) {
        this.setState({
            country: selection.value,
            states: selection.states
        });
    }

    updateState(selection) {
        this.setState({
            state: selection.value,
            cities: selection.cities
        });
    }

    submit(e) {
        // handle submit for login
        
        e.preventDefault();
        const data = this.state;
    }

    componentDidMount() {
        this.loadCountries();
    }

    render() {
        return(
            <Content>
                <Form>
                    <form onSubmit={(e) => this.submit(e)}>
                        <Half>
                            <p>Property Name*</p>
                            <input onChange={(e) => this.setState({pname: e.target.value})} required></input>

                            {!this.state.imageURL &&
                                <ImageInput>
                                    <FaCloudUploadAlt />
                                    <p>Upload main image</p>
                                    <input type="file" value={this.state.image} onChange={e => this.updateImage(e.target.files[0])} />
                                </ImageInput>
                            }

                            {this.state.imageURL &&
                                <ImagePreview>
                                    <img src={this.state.imageURL} />
                                    <p onClick={() => this.setState({image: null, imageURL: null})}>Remove</p>
                                </ImagePreview>
                            }

                            <p>E-mail</p>
                            <input onChange={(e) => this.setState({email: e.target.value})}></input>

                            <p>Website</p>
                            <input onChange={(e) => this.setState({website: e.target.value})}></input>

                            <section>
                                <HalfInput>
                                    <p>Phone number*</p>
                                    <InputMask
                                        onChange={(e) => this.setState({phone: e.target.value})}
                                        required
                                        mask="+999 99 999 99"
                                        alwaysShowMask
                                        maskChar="_"
                                    />
                                </HalfInput>
                                <HalfInput>
                                    <p>Fax</p>
                                    <InputMask
                                        onChange={(e) => this.setState({fax: e.target.value})}
                                        required
                                        mask="+999 99 999 99"
                                        alwaysShowMask
                                        maskChar="_"
                                    />
                                </HalfInput>
                            </section>

                            <section>
                                <HalfInput>
                                    <p>Check-in*</p>
                                    <InputMask
                                        onChange={(e) => this.setState({checkin: e.target.value})}
                                        required
                                        mask="99:99"
                                        alwaysShowMask
                                        maskChar="_"
                                    />
                                </HalfInput>

                                <HalfInput>
                                    <p>Check-out*</p>
                                    <InputMask
                                        onChange={(e) => this.setState({checkout: e.target.value})}
                                        required
                                        mask="99:99"
                                        alwaysShowMask
                                        maskChar="_"
                                    />
                                </HalfInput>
                            </section>
                        </Half>
                        <Half>
                            <p>Address*</p>
                            <input onChange={e => this.setState({address: e.value})} required></input>

                            <section>
                                <HalfInput>
                                    <p>Country*</p>
                                    <Select
                                        options={this.state.countries}
                                        styles={selectStyles}
                                        onChange={e => this.updateCountry(e)}
                                        placeholder=''
                                    />
                                </HalfInput>

                                <HalfInput>
                                    <p>State*</p>
                                    <Select
                                        options={this.state.states}
                                        styles={selectStyles}
                                        onChange={e => this.updateState(e)}
                                        placeholder=''
                                    />
                                </HalfInput>
                            </section>     

                            <section>
                                <HalfInput>
                                    <p>City*</p>
                                    <Select
                                        options={this.state.cities}
                                        styles={selectStyles}
                                        onChange={e => this.setState({city: e.value})}
                                        placeholder=''
                                    />
                                </HalfInput>

                                <HalfInput>
                                    <p>Zip*</p>
                                    <input onChange={(e) => this.setState({zip: e.target.value})} required></input>
                                </HalfInput>
                            </section>

                            <section>
                                <HalfInput>
                                    <p>Latitude</p>
                                    <input onChange={(e) => this.setState({latitude: e.target.value})}></input>
                                </HalfInput>

                                <HalfInput>
                                    <p>Longitude</p>
                                    <input onChange={(e) => this.setState({longitude: e.target.value})}></input>
                                </HalfInput>
                            </section>

                            <Location
                                address={`${this.state.country}, ${this.state.state}, ${this.state.city}, `}
                            />

                            <Controls>
                                <Span>Previous</Span>
                                <Span>Save as draft</Span>

                                <button>Proceed</button>
                            </Controls>
                        </Half>
                    </form>
                </Form>
            </Content>
        )
    }
}

export default PropertyInformation;