import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/images/png/footer-img.png';
import { Facebook, Instagram, Twitter } from './IconImg';

function Footersection() {
    return (
        <div>
            <section className="bg_white pt-5">
                <Container className='pb_80'>
                    <Row>
                        <Col lg={4} className='col-12 mb-5 mb-lg-0'>
                            <div className="d-flex align-items-center gap-2 pb-3">
                                <img src={logo} alt="logo-img" />
                                <h4 className="ff-sen fw_700 fs_20">Salty</h4>
                            </div>
                            <p className="ff-inter fs_16 fw_400 max-width_141 text-black opacity-75 mb-4 pb-1">Enjoy the touring
                                with Salty
                            </p>
                            <div className="d-flex gap-2">
                                <div className="footer-link d-flex align-items-center justify-content-center">
                                    <a href="https://www.facebook.com/" target="_blank"
                                        className="d-flex align-items-center justify-content-center">
                                       <Facebook/>
                                    </a>
                                </div >
                                <div className="footer-link d-flex align-items-center justify-content-center" >
                                    <a href="https://www.instagram.com/accounts/login/" target="_blank"
                                        className="d-flex align-items-center justify-content-center" >
                                       <Instagram/>
                                    </a >
                                </div >
                                <div className="footer-link d-flex align-items-center justify-content-center" >
                                    <a href="https://twitter.com/login" target="_blank"
                                        className="d-flex align-content-center justify-content-center" >
                                        <Twitter/>
                                    </a >
                                </div >
                            </div >
                        </Col >
                        <Col lg={8} className='col-12'>
                            <Row className='justify-content-center'>
                                <Col lg={3} className='col-6' >
                                    <ul className="padding-left_0">
                                        <li>
                                            <a href=""
                                                className="ff-inter fs_18 fw_500 text-black mb_15 d-inline-block">Resources</a>
                                        </li>
                                        <li className="position-relative nav-line">
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34">Download</a>
                                        </li>
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34" > Help
                                                Center</a >
                                        </li >
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34" > Guide
                                                Book</a >
                                        </li >
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34" > App
                                                Directory</a >
                                        </li >
                                    </ul >
                                </Col >
                                <Col lg={3} className='col-6'>
                                    <ul className="padding-left_0">
                                        <li>
                                            <a href=""
                                                className="ff-inter fs_18 fw_500 text-black  mb_15 d-inline-block">Travellers</a>
                                        </li>
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34" > Why
                                                Travellers</a >
                                        </li >
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34" > Enterprice</a >
                                        </li >
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34 text-nowrap" > Customer
                                                Stories</a >
                                        </li >
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34" > Instagram
                                                post</a >
                                        </li >
                                    </ul >
                                </Col >
                                <Col lg={3} className='col-6'>
                                    <ul className="padding-left_0">
                                        <li>
                                            <a href=""
                                                className="ff-inter fs_18 fw_500 text-black  mb_15 d-inline-block">Company</a>
                                        </li>
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34" > Travelling</a >
                                        </li >
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34" > About
                                                Locato</a >
                                        </li >
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34" > Success</a >
                                        </li >
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34" > Information</a >
                                        </li >
                                    </ul >
                                </Col >
                                <Col lg={3} className='col-6'>
                                    <ul className="padding-left_0">
                                        <li>
                                            <a href="" className="ff-inter fs_18 fw_500 text-black  mb_15 d-inline-block">Get
                                                App</a>
                                        </li>
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34" > App
                                                Store</a >
                                        </li >
                                        <li className="position-relative nav-line" >
                                            <a href=""
                                                className="fs_14 fw_400 ff-inter text-black opacity-75 line_height_34" > Google
                                                Play Store</a >
                                        </li >
                                    </ul >
                                </Col >
                            </Row >
                        </Col >
                    </Row >
                </Container >
            </section >
        </div >
    )
}

export default Footersection
