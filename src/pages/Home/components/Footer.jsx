import {Component} from 'react';
import {IconBrandInstagram, IconBrandLinkedin, IconBrandPaypal, IconBrandTwitter} from "@tabler/icons-react";


export default class Footer extends Component {
    render() {

        return (
           <>
               <footer className="container-fluid bg-primary mt-4">
                   <div className=" text-center">
                       <div className="row text-white">
                           <div className="col-12 col-md-6 col-lg-3 container">
                               <div className="container d-flex justify-content-around text-start">
                                   <ul className=" list-group-flush bg-primary mt-4 ">
                                       <h5>Keperluan Rumah</h5>
                                       <li className="mt-2 list-group-item">An item</li>
                                       <li className="list-group-item">A second item</li>
                                       <li className="list-group-item">A third item</li>
                                       <li className="list-group-item">A fourth item</li>
                                       <li className="list-group-item">And a fifth one</li>
                                   </ul>
                               </div>
                           </div>
                           <div className="col-12 col-md-6 col-lg-3 container">
                               <div className="container d-flex justify-content-around text-start">
                                   <ul className=" list-group-flush bg-primary mt-4 ">
                                       <h5>Makanan & Minuman</h5>
                                       <li className="mt-2 list-group-item">An item</li>
                                       <li className="list-group-item">A second item</li>
                                       <li className="list-group-item">A third item</li>
                                       <li className="list-group-item">A fourth item</li>
                                       <li className="list-group-item">And a fifth one</li>
                                   </ul>
                               </div>
                           </div>
                           <div className="col-12 col-md-6 col-lg-3 container">
                               <div className="container d-flex justify-content-around text-start">
                                   <ul className=" list-group-flush bg-primary mt-4 ">
                                       <h5>Lain lain </h5>
                                       <li className="mt-2 list-group-item">An item</li>
                                       <li className="list-group-item">A second item</li>
                                       <li className="list-group-item">A third item</li>
                                       <li className="list-group-item">A fourth item</li>
                                       <li className="list-group-item">And a fifth one</li>
                                   </ul>
                               </div>
                           </div>
                           <div className="col-12 col-md-6 col-lg-3 container">
                               <div className="container d-flex justify-content-around text-start">
                                   <ul className=" list-group-flush bg-primary mt-4 ">
                                       <h5>Ikuti Kami</h5>
                                       <li className="mt-2 list-group-item list-unstyled">An item</li>
                                       <li className="list-group-item">
                                           <IconBrandInstagram/>
                                           <IconBrandPaypal/>
                                           <IconBrandTwitter/>
                                           <IconBrandLinkedin/>
                                       </li>
                                       <li className="list-group-item">Berlangganan sekarang</li>
                                       <li className="list-group-item text-bg-light text-white w-75">.</li>
                                       <li className="list-group-item border-1 ">
                                           <button type="button" className="btn btn-outline-light rounded-0 mt-2">Berlangganan</button>
                                       </li>

                                   </ul>
                               </div>
                           </div>

                       </div>
                   </div>

               </footer>
           </>
        );
    }
}

