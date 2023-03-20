import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css"
import "../PeopleCarousel/PeopleCarousel.scss";
import "../Trailers/Trailers.scss"

export default class Trailers extends Component {
    renderItems = () => {
        return this.props.trailers && this.props.trailers.map((item, i) => (
            <div className="trailer-item">
                <iframe width="420" height="315" title='iframe_trailer_item' src={`https://www.youtube.com/embed/${item.key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        ))
    }
    render() {
        return (
            <div className="trailer-container">
                <h2 className="item-details-main-summary__title wow fadeInLeft"
                    data-wow-delay=".2s"
                    data-wow-duration="1s"
                    style={{
                        visibility: "visible",
                        animationDuration: "1s",
                        animationDelay: "0.2s",
                        animationName: "fadeInLeft"
                    }}>Trailers</h2>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="people-gallery none wow fadeInDown"
                    containerClass="container-fluid"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1255
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 705,
                                min: 0
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1255,
                                min: 705
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    data-wow-delay=".5s"
                    data-wow-duration="1s"
                    style={{
                        visibility: "visible",
                        animationDuration: "1s",
                        animationDelay: "0.5s",
                        animationName: "fadeInDown"
                    }}
                >

                    {this.renderItems()}
                </Carousel>
            </div>
        )
    }
}