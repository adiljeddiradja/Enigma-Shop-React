import {Component} from 'react';
export default class ContactUs extends Component {
    render() {
        const styleTextArea = {
            height: '100px'

        }
        return (
         <>
         <section className="container">
            <h4 className="mt-5">Kontak Kami</h4>
             <div>
                 <form>
                     <div className="mb-3">
                         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                         <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp"/>
                         <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
                     </div>
                     <div className="form-floating mb-3">
                         <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                   style={styleTextArea}></textarea>
                         <label htmlFor="floatingTextarea2">Comments</label>
                     </div>

                     <button type="submit" className="btn btn-primary">Submit</button>
                 </form>
             </div>
         </section>
         </>
        );
    }
}

