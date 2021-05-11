import React from 'react'
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            activePage: "myfeeds"
        }
    }

    Navigate = (navigate) => {
        if (navigate === 'myfeeds') {
            this.props.history.push("/");
            this.setState({ activePage: "myfeeds" })
        }
        else {
            this.props.history.push("/colorstrip");
            this.setState({ activePage: "colorstrip" })
        }
    }

    render() {
        const { activePage } = this.state
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Task - Menucart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {activePage === 'myfeeds' ? <><li className="nav-item active">
                            <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => this.Navigate("myfeeds")}>My feeds <span className="sr-only">(current)</span></a>
                        </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => this.Navigate("colorstrip")}>Color Strips</a>
                            </li></> : <><li className="nav-item">
                                <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => this.Navigate("myfeeds")}>My feeds <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => this.Navigate("colorstrip")}>Color Strips</a>
                            </li></>}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)