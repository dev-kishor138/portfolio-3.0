import './contact.css'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="heading white">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quibusdam, sunt enim ea ex illum.</p>
            </div>
            <div className="content">
                <div className="contactInfo">
                    <h3>Contact Infornation</h3>
                    <div className="contactInfoBx">
                        <div className="box">
                            <div className="icon">
                                <FaLocationDot />
                            </div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>4671 Sugar Camp Road,<br />Owatonna,Minnesota,<br />55060</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon">
                                <FaPhone />
                            </div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>507-474-6094</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon">
                                <FaEnvelope />
                            </div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>wrub7d78i0e@temporary-mail.net</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="formBx">
                    <form>
                        <h3>Message Me</h3>
                        <input type="text" name="" placeholder="Full Name" />
                        <input type="email" name="" placeholder="Email" />
                        <textarea name="" id="" placeholder="Your Message"></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;