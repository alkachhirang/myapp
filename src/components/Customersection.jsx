import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import customerimg from '../assets/images/png/customer-img.png';
import star from '../assets/images/png/star-img.png';
import { Circle1, Circle2 } from './IconImg';

function Customersection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    };
    return (
        <div>
            <section className="bg_white">
                <Container className='pb-5 pb-4 pt_100'>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={6} className='col-12 d-flex align-items-center justify-content-center pb-sm-5 pb-lg-0'>
                            <div>
                                <img src={customerimg} alt="mans-img" className="w-100 " />
                            </div>
                        </Col>
                        <Col lg={6} className='col-12 pt-5 pt-lg-0 position-relative'>
                            <div className="orange_line d-none d-lg-block"></div>
                            <h5 className="ff-Inter fw_600 fs_56 text-black max-width_467 mt-3 mb-4 text-lg-start text-center">A customer said about us:
                            </h5>
                            <Slider {...settings}>
                                <div>
                                    <div className="customer-slider_box">
                                        <p className="ff-Inter fs_18 fw_400 text_grey max-width_473 mb-3">Salty helped me a lot in
                                            finding the best place for our first outdoor adventure trip. They responded very
                                            quickly and
                                            gave me a detailed account of the place—its history, as well as its best features.
                                        </p>
                                        <img src={star} alt="Star-img" />
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex flex-column mt-4 pb-4">
                                                <h3 className="ff-Inter fs_20 fw_500">Andrew Sarma</h3>
                                                <p className="ff-Inter fs_12 fw_400">Enterpreneur</p>
                                            </div>
                                            <div>
                                                <button className="black circle_btn me-2">
                                                    <Circle1 />
                                                </button>
                                                <button className="white circle_btn">
                                                    <Circle2 />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="customer-slider_box">
                                        <p className="ff-Inter fs_18 fw_400 text_grey max-width_473 mb-3">Salty helped me a lot in
                                            finding the best place for our first outdoor adventure trip. They responded very
                                            quickly and
                                            gave me a detailed account of the place—its history, as well as its best features.
                                        </p>
                                        <img src={star} alt="Star-img" />
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex flex-column mt-4 pb-4">
                                                <h3 className="ff-Inter fs_20 fw_500">Andrew Sarma</h3>
                                                <p className="ff-Inter fs_12 fw_400">Enterpreneur</p>
                                            </div>
                                            <div>
                                                <button className="black circle_btn me-2">
                                                    <Circle1 />
                                                </button>
                                                <button className="white circle_btn">
                                                    <Circle2 />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="customer-slider_box">
                                        <p className="ff-Inter fs_18 fw_400 text_grey max-width_473 mb-3">Salty helped me a lot in
                                            finding the best place for our first outdoor adventure trip. They responded very
                                            quickly and
                                            gave me a detailed account of the place—its history, as well as its best features.
                                        </p>
                                        <img src={star} alt="Star-img" />
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex flex-column mt-4 pb-4">
                                                <h3 className="ff-Inter fs_20 fw_500">Andrew Sarma</h3>
                                                <p className="ff-Inter fs_12 fw_400">Enterpreneur</p>
                                            </div>
                                            <div>
                                                <button className="black circle_btn me-2">
                                                   <Circle1/>
                                                </button>
                                                <button className="white circle_btn">
                                                   <Circle2/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="customer-slider_box">
                                        <p className="ff-Inter fs_18 fw_400 text_grey max-width_473 mb-3">Salty helped me a lot in
                                            finding the best place for our first outdoor adventure trip. They responded very
                                            quickly and
                                            gave me a detailed account of the place—its history, as well as its best features.
                                        </p>
                                        <img src={star} alt="Star-img" />
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex flex-column mt-4 pb-4">
                                                <h3 className="ff-Inter fs_20 fw_500">Andrew Sarma</h3>
                                                <p className="ff-Inter fs_12 fw_400">Enterpreneur</p>
                                            </div>
                                            <div>
                                                <button className="black circle_btn me-2">
                                                   <Circle1/>
                                                </button>
                                                <button className="white circle_btn">
                                                   <Circle2/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="customer-slider_box">
                                        <p className="ff-Inter fs_18 fw_400 text_grey max-width_473 mb-3">Salty helped me a lot in
                                            finding the best place for our first outdoor adventure trip. They responded very
                                            quickly and
                                            gave me a detailed account of the place—its history, as well as its best features.
                                        </p>
                                        <img src={star} alt="Star-img" />
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex flex-column mt-4 pb-4">
                                                <h3 className="ff-Inter fs_20 fw_500">Andrew Sarma</h3>
                                                <p className="ff-Inter fs_12 fw_400">Enterpreneur</p>
                                            </div>
                                            <div>
                                                <button className="black circle_btn me-2">
                                                    <Circle1 />
                                                </button>
                                                <button className="white circle_btn">
                                                    <Circle2 />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div >
    )
}

export default Customersection
