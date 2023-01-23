import { MDBBtn } from 'mdb-react-ui-kit';
const Contact = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1>Contact Us</h1>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <MDBBtn type="submit" color='info'>Submit</MDBBtn>
            </form>
        </div>);
}

export default Contact;