import {Component} from 'react';
import jempol from '@/assets/jempol.jpg';
import testimoni2 from '@/assets/testimoni2.jpg';

class Testimonial extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h4 className="mt-5 text-center"><b>Testimoni</b></h4>

                    <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
                        <div className="col">
                            <div className="card h-100">
                                <img src={jempol} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={testimoni2} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a short card.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={testimoni2} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural
                                        lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={testimoni2} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        );
    }
}

export default Testimonial;