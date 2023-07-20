import "./about.css";
import aboutImage from "../../assets/img/img1.jpg";

const About = () => {
    return (
        <section id="about">
            <div className="heading">
                <h2>About Me</h2>
            </div>
            <div className="content">
                <div className="contentBx w50">
                    <h3>I`m a Front End Web Developer.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod necessitatibus alias temporibus incidunt iusto commodi ad molestias, doloribus tempore aperiam placeat rem dolor. Modi quam non optio consequuntur, debitis commodi quibusdam. Totam explicabo sint, aperiam recusandae expedita optio laudantium nostrum! Culpa eum quasi eveniet illum totam omnis dignissimos, necessitatibus veritatis quaerat expedita ex, quibusdam quam voluptate ab sequi aspernatur fugit temporibus dolores odio pariatur dicta quos reiciendis.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo provident ipsam! Beatae tempora voluptates voluptatem, rerum harum ea dicta nihil culpa! Assumenda quis non magni inventore dolor natus, quas aut rerum ut alias, libero, ducimus doloribus fugit voluptate. Nulla vel, eaque magni eum accusamus inventore velit reiciendis assumenda repudiandae.</p>
                </div>
                <div className="w50">
                    <img src={aboutImage} alt="" />
                </div>
            </div>
        </section>
    );
};

export default About;