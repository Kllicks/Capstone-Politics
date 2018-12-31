import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';


class Header extends Component {
    onLogoutClick() {
        this.props.mutate({
            refetchQueries: [{ query }]
        });
    }

    renderButtons() {
        const { loading, user } = this.props.data;

        if (loading) { return <div />; }

        if(user) {
            return (
                <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
            );
        } else {
            return (
                <div>
                    <li>
                        Please click Signup or Login to get started:
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </div>
            );
        }
    }

    render() {
        // console.log(this.props.data);
        return (
            <nav>
                <div className="nav-wrapper indigo darken-4">
                    <Link to="/" className="brand-logo left">
                    <i className="material-icons">star</i>
                        Home
                    </Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        );
    }

}

//stack for multiple
export default graphql(mutation) (
    graphql(query)(Header)
);