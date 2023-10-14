import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mountainhicking from '../assets/images/png/mountain-hicking.png';
import machu from '../assets/images/png/machu-pichu.png';
import grand from '../assets/images/png/grand-canion.png'
import { Popular1, Popular2 } from './IconImg';
function Popularsection() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
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
            <section id="Destinations" className="bg_white overflow-hidden">
                <Container className='pb-5 pt-4 pt-5'>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={6} className='col-12 pb-sm-4 pb-lg-0 mb-4'>
                            <h4 className="ff-Inter fw_600 fs_56 text-black max-width_400 text-lg-start text-center">Find Popular Destination</h4>
                        </Col>
                        <Col lg={6} className='col-12 d-flex justify-content-md-end justify-content-center pb-5 pb-md-0 mb-4'>
                            <button className="first circle_btn me-2">
                               <Popular1/>
                            </button>
                            <button className="second circle_btn">
                               <Popular2/>
                            </button>
                        </Col>
                    </Row >
                    <Slider {...settings}>
                        <div className='px-2'>
                            <div className="slider_box me-4 pb-4">
                                <img src={mountainhicking} alt="mountain-hiking-tour" className="w-100 border_radius_16" />
                                <p className="ff-Inter fw_600 fs_22 text-black text-capitalize ps-2 mt-3 h-100">Mountain Hiking Tour</p>
                                <p className="f-Inter fs_14 fw_400 text_grey ps-2">Mountain Hiking Tour</p>
                                <div className="d-flex align-items-center justify-content-between" >
                                    <h3 className="ff-Inter fs_22 fw_600 ps-2 mt-4 pt-1" > $89 < span className="fs_16 fw_400" > /Person</span >
                                    </h3 >
                                    <a className="book-now_btn text_black text-nowrap" > Book Now</a >
                                </div >
                            </div >
                        </div >
                        <div className='px-2'>
                            <div className="slider_box me-4 pb-4">
                                <img src={mountainhicking} alt="machu-picchu-img" className="w-100 border_radius_16" />
                                <p className="ff-Inter fw_600 fs_22 text-black text-capitalize ps-2 mt-3 h-100">Machu Picchu, Peru</p>
                                <p className="ff-Inter fs_14 fw_400 text_grey ps-2" > Machu Picchu, Peru</p >
                                <div className="d-flex align-items-center justify-content-between" >
                                    <h3 className="ff-Inter fs_22 fw_600 ps-2 mt-4 pt-1" > $99 < span
                                        className="fs_16 fw_400" > /Person</span >
                                    </h3 >
                                    <a className="book-now_btn text_black text-nowrap" > Book Now</a >
                                </div >
                            </div >
                        </div >
                        <div className='px-2'>
                            <div className="slider_box me-4 pb-4">
                                <img src={grand} alt="grand-canyon" className="w-100 border_radius_16" />
                                <p className="ff-Inter fw_600 fs_22 text-black text-capitalize ps-2 mt-3 h-100">The Grand Canyon, Arizona
                                </p>
                                <p className="ff-Inter fs_14 fw_400 text_grey ps-2" > Mountain Hiking Tour</p >
                                <div className="d-flex align-items-center justify-content-between" >
                                    <h3 className="ff-Inter fs_22 fw_600 ps-2 mt-4 pt-1" > $70 < span
                                        className="fs_16 fw_400" > /Person</span >
                                    </h3 >
                                    <a className="book-now_btn text_black text-nowrap" > Book Now</a >
                                </div >
                            </div >
                        </div >
                        <div className='px-2'>
                            <div className="slider_box me-4 pb-4">
                                <img src={mountainhicking} alt="mountain-hiking-tour"
                                    className="w-100 border_radius_16" />
                                <p className="ff-Inter fw_600 fs_22 text-black text-capitalize ps-2 mt-3 h-100">Mountain Hiking Tour</p>
                                <p className="ff-Inter fs_14 fw_400 text_grey ps-2" > Mountain Hiking Tour</p >
                                <div className="d-flex align-items-center justify-content-between" >
                                    <h3 className="ff-Inter fs_22 fw_600 ps-2 mt-4 pt-1" > $89 < span
                                        className="fs_16 fw_400" > /Person</span >
                                    </h3 >
                                    <a className="book-now_btn text_black text-nowrap" > Book Now</a >
                                </div >
                            </div >
                        </div >
                        <div className='px-2'>
                            <div className="slider_box me-4 pb-4">
                                <img src={mountainhicking} alt="grand-canyon" className="w-100 border_radius_16" />
                                <p className="ff-Inter fw_600 fs_22 text-black text-capitalize ps-2 mt-3 h-100">The Grand Canyon, Arizona
                                </p>
                                <p className="ff-Inter fs_14 fw_400 text_grey ps-2" > Mountain Hiking Tour</p >
                                <div className="d-flex align-items-center justify-content-between" >
                                    <h3 className="ff-Inter fs_22 fw_600 ps-2 mt-4 pt-1" > $70 < span
                                        className="fs_16 fw_400" > /Person</span >
                                    </h3 >
                                    <a className="book-now_btn text_black text-nowrap" > Book Now</a >
                                </div >
                            </div >
                        </div >
                    </Slider >
                </Container >
            </section >

        </div >
    )
}

export default Popularsection
