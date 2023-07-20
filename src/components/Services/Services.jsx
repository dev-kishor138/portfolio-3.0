import ServiceData from "./ServiceData";
import "./service.css"


const Services = () => {
    return (
        <section className="services" id="services">
            <div className="heading white">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, recusandae molestias molestiae adipisci voluptatibus perspiciatis.</p>
            </div>
            <div className="service-content">
                {
                    ServiceData.map((data, index) => <div key={index} className="servicesBx">
                        <img src={data.image} alt="" />
                        <h2>{data.title}</h2>
                        <p>{data.details}</p>
                    </div>)
                }

            </div>
        </section>
    );
};

export default Services;