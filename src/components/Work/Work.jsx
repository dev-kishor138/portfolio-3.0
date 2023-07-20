import "./work.css";
import image1 from "../../assets/img/product1.jpg"
import image2 from "../../assets/img/product2.jpg"
import image3 from "../../assets/img/product3.jpg"
import image4 from "../../assets/img/product4.jpg"

const works = [
    {
        name: "",
        image: image1,
        link: ""
    },
    {
        name: "",
        image: image2,
        link: ""
    },
    {
        name: "",
        image: image3,
        link: ""
    },
    {
        name: "",
        image: image4,
        link: ""
    },
]

const Work = () => {
    return (
        <section className="work" id="work">
            <div className="heading">
                <h2>Our Latest Work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod soluta magnam, similique facilis aliquid magni.</p>
            </div>
            <div className="content">

                {
                    works.map((data, index) => <div key={index} className="workBx">
                        <img src={data.image} alt="" />
                    </div>)
                }

            </div>
            <div className="heading">
                <a href="#" className="btn">View More</a>
            </div>
        </section>
    );
};

export default Work;