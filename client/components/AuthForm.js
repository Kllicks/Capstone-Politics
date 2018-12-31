import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = { email: '', password: ''};
    }

    onSubmit(event) {
        event.preventDefault();

        //never going to mutate the object inside callback itself so this is fine
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            //css for layout of the form
            <div className="row">
                <form onSubmit={this.onSubmit.bind(this)} className="col s4">
                    <div className="input-field">
                        <input 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>

                    <div className="errors">
                        {this.props.errors.map(error => <div key={error}>{error}</div>)}
                    </div>
                    <button className="btn waves-effect waves-light red">Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;