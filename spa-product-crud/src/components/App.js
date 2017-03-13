import React, {Component} from "react";
import {Link} from "react-router";
import NavLink from "./NavLink";


class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Products CRUD</Link>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <NavLink to="/">Products</NavLink>
                            <NavLink to="/about">About</NavLink>
                        </ul>
                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                            </div>
                        </form>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
                <footer className="panel panel-default">
                    <div className="text-center">
                        &copy;Igor Rybak
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
