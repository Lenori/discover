import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import {toast} from 'react-toastify';

import {Content, Half, Form, HalfInput, Checkbox, Controls, Span} from './styles';

class NewType extends Component {
    constructor() {
        super();

        this.state = {
            title: null,
            price: null,
            pax: null,
            rv: null,
            sites: []
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

        this.props.addSiteType(data);
    }

    render() {
        return(
            <Content>
                <Form>
                    <form onSubmit={(e) => this.submit(e)}>
                        <Half>
                        <section>
                                <HalfInput>
                                    <p>Title*</p>
                                    <input onChange={(e) => this.setState({title: e.target.value})}></input>
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>Price*</p>
                                    <InputMask
                                        mask="99.99"
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
                                        onChange={(e) => this.setState({pax: e.target.value})}
                                    />
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>RV max length*</p>
                                    <InputMask
                                        mask="99"
                                        onChange={(e) => this.setState({rv: e.target.value})}
                                    />
                                    <h1>Ft</h1>
                                </HalfInput>
                            </section>
                        </Half>
                        <Half>
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

export default NewType;