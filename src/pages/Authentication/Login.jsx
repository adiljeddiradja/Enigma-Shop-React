import  {Component} from 'react';
import authImg from '@/assets/auth.svg';


class Login extends Component {
    render() {
        const style = {
            width: '30rem',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            borderRadius: '1rem',


        }
        const buttonLogin = {
            width: '100%',
            height: '2 rem',
            marginTop: '1rem',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',


        }

        return (
            <>
                <section className="container">
                    <div className="card position-absolute top-50 start-50 translate-middle" style={style}>
                        <img src={authImg} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <div>
                                <h4 className="text-center mb-3">Login</h4>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control border-bottom border-0" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>

                                </div>
                                <div className="mb-3 " >
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control border-bottom border-0 "  id="exampleInputPassword1"/>
                                </div>
                                <div className="text-end">
                                    <a  href={"#"}>Lupa Password?</a>
                                </div>

                                <div className="d-flex justify-content-center bg-primary rounded-1"style={buttonLogin}>
                                    <button  type="submit" className="btn btn-primary  ">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </section>

            </>
        );
    }
}

export default Login;