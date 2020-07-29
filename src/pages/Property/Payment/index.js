import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import Select from 'react-select';

import selectStyles from '../../../styles/selectInputStyles';

import {Content, Half, Form, HalfInput, Checkbox, Controls, Span} from './styles';

class Payment extends Component {
    constructor() {
        super();

        this.state = {
            timeBefore: null,
            timeBeforeType: null,
            timeBeforeTypes: [
                {label: 'Minutes', value: 'Minutes'},
                {label: 'Hours', value: 'Hours'},
                {label: 'Days', value: 'Days'}
            ],
            pets: false,
            currency: null,
            americanExpress: false,
            maestro: false,
            visa: false,
            discover: false,
            euro: false,
            unionPay: false,
            diners: false,
            jcb: false,
            invoiceName: null
        }

        this.loadCurrencies = this.loadCurrencies.bind(this);
        this.submit = this.submit.bind(this);
    }

    loadCurrencies() {
        const currencies = [
            {label: 'GBP', value: 'GBP'},
            {label: 'USD', value: 'USD'},
            {label: 'BRL', value: 'BRL'}
        ];

        this.setState({currencies: currencies});
    }

    submit(e) {
        e.preventDefault();

        this.props.nextStep(this.state);
    }

    componentDidMount() {
        this.loadCurrencies();
    }

    render() {
        return(
            <Content>
                <Form>
                    <form onSubmit={(e) => this.submit(e)}>
                        <Half>
                            <section>
                                <HalfInput>
                                    <p>Time before cancellation</p>
                                    <InputMask
                                        onChange={(e) => this.setState({timeBefore: e.target.value})}
                                        required
                                        mask="99"
                                        alwaysShowMask
                                        maskChar="_"
                                    />
                                </HalfInput>
                                <HalfInput noTitle>
                                    <Select
                                        options={this.state.timeBeforeTypes}
                                        styles={selectStyles}
                                        onChange={e => this.setState({timeBeforeType: e.value})}
                                        placeholder=''
                                    />
                                </HalfInput>
                            </section>
                            <Checkbox>
                                <input
                                    type="checkbox"
                                    onChange={(e) => this.setState({pets: !this.state.pets})}
                                />
                                <p>Pets are allowed</p>
                            </Checkbox>
                            <p>Currency type*</p>
                            <Select
                                options={this.state.currencies}
                                styles={selectStyles}
                                onChange={e => this.setState({currency: e.value})}
                                placeholder=''
                            />
                            <section>
                                <Checkbox>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => this.setState({americanExpress: !this.state.americanExpress})}
                                    />
                                    <p>American Express</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => this.setState({maestro: !this.state.maestro})}
                                    />
                                    <p>Maestro</p>
                                </Checkbox>
                            </section>
                            <section>
                                <Checkbox>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => this.setState({visa: !this.state.visa})}
                                    />
                                    <p>Visa</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => this.setState({discover: !this.state.discover})}
                                    />
                                    <p>Discover</p>
                                </Checkbox>
                            </section>
                            <section>
                                <Checkbox>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => this.setState({euro: !this.state.euro})}
                                    />
                                    <p>Euro/Mastercard</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => this.setState({unionPay: !this.state.unionPay})}
                                    />
                                    <p>UnionPay debit card</p>
                                </Checkbox>
                            </section>
                            <section>
                                <Checkbox>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => this.setState({diners: !this.state.diners})}
                                    />
                                    <p>Diners Club</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => this.setState({jcb: !this.state.jcb})}
                                    />
                                    <p>JCB</p>
                                </Checkbox>
                            </section>
                        </Half>
                        <Half>
                            <p>Name on which invoice should be generated (legal/company)*</p>
                            <input required onChange={(e) => this.setState({invoiceName: e.target.value})} />

                            <Checkbox>
                                <input
                                    type="checkbox"
                                    name="correctInformation"
                                    required
                                />
                                <p>I have agreed that all information provided is correct to my knowledge</p>
                            </Checkbox>
                            <Checkbox>
                                <input
                                    type="checkbox"
                                    name="TermsConditions"
                                    required
                                />
                                <p>I accept <a href='#'>Terms & Conditions</a> and <a href='#'>Privacy Policy</a></p>
                            </Checkbox>

                            <Controls>
                                <Span onClick={() => this.props.previous()}>Previous</Span>
                                <Span onClick={() => this.props.saveDraft()}>Save draft</Span>

                                <button>Finish</button>
                            </Controls>
                        </Half>
                    </form>
                </Form>
            </Content>
        )
    }
}

export default Payment;