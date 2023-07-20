import "./banner.css"

const Banner = () => {
    return (
        <section className="banner" id="home">
            <div className="textBx">
                <h2>Hello, I`m<br /><span>Kishor Mahmud.</span></h2>
                <h3>I`m a Front End Developer</h3>
                <a href="#" className="btn">About Me</a>
            </div>
        </section>
    );
};

export default Banner;