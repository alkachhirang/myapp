import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headerimg from '../assets/images/png/hero-section-img.png'
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './IconImg';

function Header() {
    function opennav() {
        document.getElementById("navbar").classNameList.toggle("start-0");
        document.body.classNameList.toggle("overflow-hidden")
        document.getElementById("menubtn-icon").classNameList.toggle("cross");
    }
    return (
        <div>
            <section className="bg_white">
                <Container>
                    <Row>
                        <nav className="pt-4 pb-3">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="me-1">
                                       <Header6/>
                                    </span>
                                    <h2 className="ff-sen fw_700 fs_20 text-black mr_72">Salty</h2>
                                    <ul id="navbar"
                                        className="d-flex mb-0 flex-column list-unstyled flex-lg-row gap-5 justify-content-center align-items-center mobile_view z_index_3">
                                        <li className="position-relative">
                                            <a onClick={opennav} href=" #home"
                                                className="text_blue fs_16 fw_400 letter_spacing_1 nav-line ff-poppins">Home</a>
                                        </li>
                                        <li className="position-relative">
                                            <a onClick={opennav} href="#About-us"
                                                className="text_blue ff-poppins fs_16 fw_400 letter_spacing_1 nav-line">About us</a>
                                        </li>
                                        <li className="position-relative">
                                            <a onClick={opennav} href="#Destinations"
                                                className="text_blue ff-poppins fs_16 fw_400 letter_spacing_1 nav-line">Destinations</a>
                                        </li>
                                        <li className="position-relative">
                                            <a onClick={opennav} href="#Tours"
                                                className="text_blue ff-poppins fs_16 fw_400 letter_spacing_1 nav-line">Tours</a>
                                        </li>
                                        <li className="position-relative">
                                            <a onClick={opennav} href="#Blog"
                                                className="text_blue ff-poppins fs_16 fw_400 letter_spacing_1 nav-line">Blog</a>
                                        </li>
                                        <li className="d-flex align-items-baseline nav_button d-block d-lg-none cursor_pointer"
                                            data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <a href="" className="text_orange ff-poppins fs_16 fw_500 letter_spacing_1">Book Now</a>
                                            <span className="ms-1">
                                               <Header4/>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex align-items-baseline nav_button d-none d-lg-block cursor_pointer" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    <a href="" className="text_orange ff-poppins fs_16 fw_500 letter_spacing_1">Book Now</a>
                                    <span className="ms-1">
                                        <Header5/>
                                    </span>
                                </div>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div
                                                className="btn-cross d-flex justify-content-center align-items-center position-absolute right-3 top-6">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center h-500">
                                                <iframe width="100%" height="100%"
                                                    src="https://www.youtube.com/embed/98kYg52aQeY?si=nLdwqcgQvHumEED0"
                                                    title="YouTube video player" frameborderr="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="menubtn-icon" onClick={opennav} className="d-lg-none z_index_3 pe-2 pt-2">
                                    <div className="line"></div>
                                    <div className="line1 my-2"></div>
                                    <div className="line2"></div>
                                </div>
                            </div>
                        </nav>
                    </Row>
                </Container>
            </section>
            <section className="bg_white">
                <Container>
                    <Row className='pt-3'>
                        <Col lg={6} className='col-12 d-flex align-items-center justify-content-center mb-sm-5'>
                            <div>
                                <h2 className="ff-sen fs_84 fw_700 text-black text-capatilize pb-3 text-lg-start text-center">Discover the Best Lovely
                                    Places</h2>
                                <p className="fs_18 fw_400 ff-inter text-black opacity-75 max-width_500 text-lg-start text-center">Plan and book your
                                    perfect
                                    trip with expert advice, travel tips, destination information and inspiration from
                                    us.
                                </p>
                                <Container>
                                    <Row className='row big_button justify-content-center align-items-center mt_44 mw_500'>
                                        <Col sm={5} className='col-6 d-flex justify-content-center align-items-center btn_line position-relative'>
                                            <div>
                                                <h3 className="ff-inter fs_18 fw_500 mb-0">Where</h3>
                                                <div className="d-flex align-items-baseline justify-content-center">
                                                    <p className=" mb-0 ff-inter fs_12 fw_400 text_grey">Center Point, Lo...
                                                    </p>
                                                    <span className="ps-2">
                                                        <Header1/>

                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={5} className='col-6 d-flex justify-content-center align-items-center'>
                                            <div>
                                                <h3 className="ff-inter fs_18 fw_500 mb-0">Date</h3>
                                                <div className="d-flex align-items-baseline justify-content-center">
                                                    <p className=" mb-0 ff-inter fs_12 fw_400 text_grey">09th March,2021</p>
                                                    <span className="ps-2">
                                                        <Header2/>
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={2} className='d-flex justify-content-center align-items-center mt-sm_3'>
                                            <span className="">
                                                <Header3/>
                                            </span>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col lg={6} className='col-12 d-flex align-items-center justify-content-center mb-5 pt-5 pt-lg-0'>
                            <img src={headerimg} alt="hero-section-img" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>

        </div >
    )
}

export default Header
