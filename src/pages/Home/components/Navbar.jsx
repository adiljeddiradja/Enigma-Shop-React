import  {Component} from 'react';



export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-primary">
                    <div className="container">
                        <a className="navbar-brand text-white" href="">
                            <i>
                                <b> Enigma </b> Shop
                            </i>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item text">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  text-white" href="#">Pricing</a>
                                </li>
                                <li className="nav-item text-white">
                                    <a className="nav-link text-white" href="#">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

