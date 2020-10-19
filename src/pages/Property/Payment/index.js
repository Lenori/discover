import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import Select from 'react-select';

import selectStyles from '../../../styles/selectInputStyles';

import {Content, Half, Form, HalfInput, Checkbox, Controls, Span} from './styles';

class Payment extends Component {
    constructor() {
        super();

        this.state = {
            rateName: null,
            invoiceName: null,
            depositOptions: [],
            deposit: null,
            cancellation: null,
            pet: null,
            guest: null,
            standardRate: false
        }

        this.submit = this.submit.bind(this);
    }

    loadDepositOptions() {
        const options = [
            {value: 'fnight', label: '1st night'},
            {value: 'bnight', label: 'Night before'},
        ];

        this.setState({depositOptions: options});
    }

    submit(e) {
        e.preventDefault();

        this.props.nextStep(this.state);
    }

    componentWillMount() {
        this.loadDepositOptions();
    }

    render() {
        return(
            <Content>
                <Form>
                    <form onSubmit={(e) => this.submit(e)}>
                        <Half>
                            <p>Rate name</p>
                            <input required onChange={(e) => this.setState({rateName: e.target.value})} />
                            <section>
                                <HalfInput>
                                    <p>Deposit</p>
                                    <Select
                                        options={this.state.depositOptions}
                                        styles={selectStyles}
                                        onChange={e => this.setState({deposit: e.value})}
                                        placeholder=''
                                    />  
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>Cancellation</p>
                                    <InputMask
                                        mask="99.99"
                                        onChange={(e) => this.setState({cancellation: e.target.value})}
                                    />
                                    <h1>$</h1>
                                </HalfInput>
                            </section>
                            <section>
                                <HalfInput withIcon>
                                    <p>Price per pet</p>
                                    <InputMask
                                        mask="99.99"
                                        onChange={(e) => this.setState({pet: e.target.value})}
                                    />
                                    <h1>$</h1>
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>Price per guest</p>
                                    <InputMask
                                        mask="99.99"
                                        onChange={(e) => this.setState({guest: e.target.value})}
                                    />
                                    <h1>$</h1>
                                </HalfInput>
                            </section>                         
                        </Half>
                        <Half>
                            <p>Name on which invoice should be generated (legal/company)*</p>
                            <input required onChange={(e) => this.setState({invoiceName: e.target.value})} />

                            <Checkbox>
                                <input
                                    type="checkbox"
                                    name="standardRate"
                                    onChange={() => this.setState({standardRate: !this.state.standardRate})}
                                    required
                                />
                                <span></span>
                                <p>Check as standard rate</p>
                            </Checkbox>

                            <Checkbox>
                                <input
                                    type="checkbox"
                                    name="correctInformation"
                                    required
                                />                                
                                <span></span>
                                <p>I have agreed that all information provided is correct to my knowledge</p>
                            </Checkbox>
                            <Checkbox>
                                <input
                                    type="checkbox"
                                    name="TermsConditions"
                                    required
                                />                                
                                <span></span>
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