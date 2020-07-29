import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import {toast} from 'react-toastify';

import {Content, Half, Form, Site, Header, Body, Info, HalfInput, Checkbox, Controls, Span} from './styles';

class Edit extends Component {
    constructor() {
        super();

        this.state = {
            title: null,
            price: null,
            pax: null,
            rv: null,
            weekDiscount: null,
            monthDiscount: null,
            wheel: false,
            classA: false,
            classB: false,
            classC: false,
            popup: false,
            tent: false,
            toy: false,
            travelTrailer: false,
            salesTax: false,
            stateTax: false,
            countryTax: false,
            otherTax: false
        }

        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        const data = this.state;

        if (
            !data.title ||
            !data.price ||
            !data.pax ||
            !data.rv
        ) {
            toast.error('Please fill all required fields.');
            return;
        }

        this.props.editSite(this.props.index, data);
    }

    componentDidMount() {
        this.setState({
            title: this.props.site.title,
            price: this.props.site.price,
            pax: this.props.site.pax,
            rv: this.props.site.rv,
            weekDiscount: this.props.site.weekDiscount,
            monthDiscount: this.props.site.monthDiscount,
            wheel: this.props.site.wheel,
            classA: this.props.site.classA,
            classB: this.props.site.classB,
            classC: this.props.site.classC,
            popup: this.props.site.popup,
            tent: this.props.site.tent,
            toy: this.props.site.toy,
            travelTrailer: this.props.site.travelTrailer,
            salesTax: this.props.site.salesTax,
            stateTax: this.props.site.stateTax,
            countryTax: this.props.site.countryTax,
            otherTax: this.props.site.otherTax   
        }, () => console.log(this.state));
    }

    render() {
        return(
            <Content>
                <Form>
                    <form onSubmit={(e) => this.submit(e)}>
                        <Half>
                            <Site>
                                <Header>
                                    <h2>{this.state.title}</h2>
                                    <p>${this.state.price}</p>
                                </Header>
                                <Body>
                                    <Info>
                                        <p>{this.state.pax} Pax</p>
                                        <p>{this.state.rv} ft Max Length</p>
                                    </Info>
                                </Body>
                            </Site>
                        </Half>
                        <Half>
                            <section>
                                <HalfInput>
                                    <p>Title*</p>
                                    <input
                                        value={this.state.title}
                                        onChange={(e) => this.setState({title: e.target.value})}
                                    />
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>Price*</p>
                                    <InputMask
                                        mask="99.99"
                                        value={this.state.price ? this.state.price : ''}
                                        onChange={(e) => this.setState({price: e.target.value})}
                                    />
                                    <h1>$</h1>
                                </HalfInput>
                            </section>
                            <section>
                                <HalfInput>
                                    <p>Max occupancy*</p>
                                    <InputMask
                                        mask="99"
                                        value={this.state.pax ? this.state.pax : ''}
                                        onChange={(e) => this.setState({pax: e.target.value})}
                                    />
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>RV max length*</p>
                                    <InputMask
                                        mask="99"
                                        value={this.state.rv ? this.state.rv : ''}
                                        onChange={(e) => this.setState({rv: e.target.value})}
                                    />
                                    <h1>Ft</h1>
                                </HalfInput>
                            </section>
                            <section>
                                <HalfInput withIcon>
                                    <p>7 nights discount</p>
                                    <InputMask
                                        mask="99"
                                        value={this.state.weekDiscount ? this.state.weekDiscount : ''}
                                        onChange={(e) => this.setState({weekDiscount: e.target.value})}
                                    />
                                    <h1>%</h1>
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>30 nights discount</p>
                                    <InputMask
                                        mask="99"
                                        value={this.state.monthDiscount ? this.state.monthDiscount : ''}
                                        onChange={(e) => this.setState({monthDiscount: e.target.value})}
                                    />
                                    <h1>%</h1>
                                </HalfInput>
                            </section>
                            
                            <section>
                                <Checkbox>
                                    <input
                                        checked={this.state.wheel}
                                        onChange={() => this.setState({wheel: !this.state.wheel})}
                                        type="checkbox"
                                        name="wheel"
                                    />
                                    <p>5th wheel</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        checked={this.state.classA}
                                        onChange={() => this.setState({classA: !this.state.classA})}
                                        type="checkbox"
                                        name="classA"
                                    />
                                    <p>Class A motorhome</p>
                                </Checkbox>
                            </section>

                            <section>
                                <Checkbox>
                                    <input
                                        checked={this.state.classB}
                                        onChange={() => this.setState({classB: !this.state.classB})}
                                        type="checkbox"
                                        name="classB"
                                    />
                                    <p>Class B motorhome</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        checked={this.state.classC}
                                        onChange={() => this.setState({classC: !this.state.classC})}
                                        type="checkbox"
                                        name="classC"
                                    />
                                    <p>Class C motorhome</p>
                                </Checkbox>
                            </section>

                            <section>
                                <Checkbox>
                                    <input
                                        checked={this.state.popup}
                                        onChange={() => this.setState({popup: !this.state.popup})}
                                        type="checkbox"
                                        name="popup"
                                    />
                                    <p>Popup</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        checked={this.state.tent}
                                        onChange={() => this.setState({tent: !this.state.tent})}
                                        type="checkbox"
                                        name="tent"
                                    />
                                    <p>Tent</p>
                                </Checkbox>
                            </section>

                            <section>
                                <Checkbox>
                                    <input
                                        checked={this.state.toy}
                                        onChange={() => this.setState({toy: !this.state.toy})}
                                        type="checkbox"
                                        name="toy"
                                    />
                                    <p>Toy hauler</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        checked={this.state.travelTrailer}
                                        onChange={() => this.setState({travelTrailer: !this.state.travelTrailer})}
                                        type="checkbox"
                                        name="travelTrailer"
                                    />
                                    <p>Travel trailer</p>
                                </Checkbox>
                            </section>

                            <section>
                                <Checkbox>
                                    <input
                                        checked={this.state.salesTax}
                                        onChange={() => this.setState({salesTax: !this.state.salesTax})}
                                        type="checkbox"
                                        name="salesTax"
                                    />
                                    <p>Sales tax</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        checked={this.state.stateTax}
                                        onChange={() => this.setState({stateTax: !this.state.stateTax})}
                                        type="checkbox"
                                        name="stateTax"
                                    />
                                    <p>State tax</p>
                                </Checkbox>
                            </section>

                            <section>
                                <Checkbox>
                                    <input
                                        checked={this.state.countryTax}
                                        onChange={() => this.setState({countryTax: !this.state.countryTax})}
                                        type="checkbox"
                                        name="countryTax"
                                    />
                                    <p>Country tax</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        checked={this.state.otherTax}
                                        onChange={() => this.setState({otherTax: !this.state.otherTax})}
                                        type="checkbox"
                                        name="otherTax"
                                    />
                                    <p>Other tax</p>
                                </Checkbox>
                            </section>

                            <Controls>
                                <Span onClick={() => this.props.goBack()}>Go back</Span>

                                <button onClick={(e) => this.submit(e)}>Save</button>
                            </Controls>
                        </Half>
                    </form>
                </Form>
            </Content>
        )
    }
}

export default Edit;