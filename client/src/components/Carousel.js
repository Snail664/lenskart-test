import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Carousel.css";

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className="text-center mt-2">
        <Slider {...settings}>
          {this.props.products.map(function (product) {
            return (
              <Link
                key={product.id}
                to={`/categories/${product.category}/products/${product.id}`}
              >
                <div className=" m-5 rounded shadow-sm">
                  <div>
                    <img
                      alt={product.name}
                      className="w-50 h-50 d-block m-auto"
                      src={product.url}
                      style={{ layout: "fill" }}
                    />
                  </div>
                  <h3 className="text-dark">{product.name}</h3>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    );
  }
}
export default Carousel;
