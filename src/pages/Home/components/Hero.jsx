import  {Component} from 'react';
import  keranjang from '@/assets/keranjang.png';


export default class Hero extends Component {
    render() {
        return (
          <>
              <div className="container row g-0 text-center">
                  <div className="col-sm-6 col-md-8 d-flex align-items-center justify-content-center mt-5">
                      <div className="col-6 text-start ">

                          <h3>Selamat Datang Di Enigma Shop</h3>
                          <h3><b>Pusat Kebutuhan Belanja Anda</b></h3>
                          <h5>Temukan Segala Kebutuhan Makanan Anda dan
                              kelontong di Sini!
                          </h5>
                          <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                              been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                              a galley of type and scrambled it to make a type specimen book. </p>


                          <div className="d-flex">
                              <div className="d-flex justify-content-start">
                                  <button className="btn btn-primary px-5 rounded-0">Belanja Sekarang</button>
                              </div>
                              <div className="d-flex justify-content-end ms-3 ">
                                  <button type="button" className="btn btn-outline-primary  rounded-0 px-5"> Kontak Kami</button>
                              </div>

                          </div>

                      </div>


                  </div>
                  <div className="col-6 col-md-4 d-flex justify-content-center mb-3 mt-5">
                      <img className="img-fluid"  src={keranjang}/>
                  </div>
              </div>

        {/*end section heroes*/}



          </>

        );
    }
}

