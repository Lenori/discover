import React, {Component} from 'react';

import {Content, Form} from './styles';

class Signin extends Component {
    constructor() {
        super();

        this.state = {
            email: null,
            password: null,
            forgotPassword: false
        }

        this.submit = this.submit.bind(this);
        this.recover = this.recover.bind(this);
    }

    submit(e) {
        // handle submit for login
        
        e.preventDefault();
        const data = this.state;
    }

    recover(e) {
        // handle submit for recover password

        e.preventDefault();
        const data = this.state.email;
    }

    render() {
        return(
            <Content>
                {!this.state.forgotPassword &&
                    <>
                    <h1>Welcome</h1>

                    <p>Login to your account to get started</p>

                    <Form>
                        <form onSubmit={(e) => this.submit(e)}>
                            <p>Email Address*</p>
                            <input onChange={(e) => this.setState({email: e.target.value})} required type="email"></input>

                            <p>Password*</p>
                            <input onChange={(e) => this.setState({password: e.target.value})} required type="password"></input>

                            <button>Login</button>

                            <span onClick={() => this.setState({forgotPassword: true})}>Forgot your password?</span>
                            <span onClick={() => this.props.signup()}>Don’t have an account? Signup!</span>
                        </form>
                    </Form>
                    </>
                }

                {this.state.forgotPassword &&
                    <>
                    <p>Type your email to recover your password</p>

                    <Form>
                        <form onSubmit={(e) => this.recover(e)}>
                            <p>Email Address*</p>
                            <input onChange={(e) => this.setState({email: e.target.value})} required type="email"></input>

                            <button>Recover</button>

                            <span onClick={() => this.setState({forgotPassword: false})}>Go back to login</span>
                            <span onClick={() => this.props.signup()}>Don’t have an account? Signup!</span>
                        </form>
                    </Form>
                    </>
                }
            </Content>
        )
    }
}

export default Signin;