import './style.css';



export default function Contact() {
    return (
        <div className="text-center">
            <h1 className="title"> Contact Me</h1>

            <br></br>
            
            <div className="row justify-content-center">

                <div className="contactInfo col-3" style={{ marginTop: "3rem" }}>
                    
                    <p className="contact" style={{ fontSize: "18px" }}>Email: <a href="mailto:karina.clausen.11@gmail.com" target="_blank" rel="noreferrer">
                        karina.clausen.11@gmail.com</a></p>

                    <p className="contact" style={{ fontSize: "18px" }}>
                        Cell: (952) 220 - 7395</p>

                    <p className="contact" style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/karina-clausen-5049aaa9/" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>

                </div>
            </div>
        </div>
    );

}