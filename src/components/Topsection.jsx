import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import grid1 from '../assets/images/png/grid-1.png'
import grid2 from '../assets/images/png/grid-2.png'
import grid3 from '../assets/images/png/grid-3.png'
import grid4 from '../assets/images/png/grid-4.png'
import grid5 from '../assets/images/png/grid-5.png'
import grid6 from '../assets/images/png/grid-6.png'
function Topsection() {
    return (
        <div>
            <div id="Blog" className="bg_white pt-5 pt-4">
                <div className="container">
                    <div className="text-center">
                        <h2 className="fs_56 fw_600 ff-Inter" data-aos="zoom-in-up">Top Destinations</h2>
                        <p className="fs_16 fw_400 ff-Inter text-black opacity-75 pt-3 pb-4 m-0" data-aos="zoom-in-up">Sost
                            Brilliant reasons Entrada
                            should be your
                            one-stop-shop!</p>
                        <ul className=" gap-14 nav nav-pills mb-3 d-flex justify-content-center destinated_navbtn navbtn"
                            id="pills-tab" role="tablist" data-aos="zoom-in-up">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                    aria-selected="true">London</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                    aria-selected="false">Bangkok</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                    aria-selected="false">England</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-singapore-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-singapore" type="button" role="tab"
                                    aria-controls="pills-singapore" aria-selected="false">Singapore</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-ittaly-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-ittaly" type="button" role="tab" aria-controls="pills-ittaly"
                                    aria-selected="false">Italy</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                aria-labelledby="pills-home-tab" tabIndex="0">
                                <div className="grid-box pt-5 pt-1">
                                    <div className="grid-items grid-item1 position-relative tab-pane fade show active"
                                        role="tabpanel" tabIndex="0">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid1} alt="grid-item1.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-item2 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid2} alt="grid-item2.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-item3 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid3} alt="grid-item3.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-item4 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid4} alt="grid-item4.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-item5 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid5} alt="grid-item5.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-item6 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid6} alt="grid-item6.webp"
                                            className="w-100 h-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                aria-labelledby="pills-profile-tab" tabIndex="0">
                                <div className="grid-box pt-5 pt-1">
                                    <div className="grid-items grid-img1 position-relative tab-pane fade show active"
                                        role="tabpanel" tabIndex="0">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid2} alt="grid-item2.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-img2 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid3} alt="grid-item3.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-img3 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid1} alt="grid-item1.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-img4 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid6} alt="grid-item6.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-img5 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid5} alt="grid-item5.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-img6 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid4} alt="grid-item4.webp"
                                            className="w-100 h-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                                aria-labelledby="pills-contact-tab" tabIndex="0">
                                <div className="grid-box pt-5 pt-1">
                                    <div className="grid-items grid-Destinations1 position-relative tab-pane fade show active"
                                        role="tabpanel" tabIndex="0">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid1} alt="grid-item1.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-Destinations2 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid3} alt="grid-item3.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-Destinations3 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid2} alt="grid-item2.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-Destinations4 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid4} alt="grid-item4.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-Destinations5 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid6} alt="grid-item6.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-Destinations6 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid5} alt="grid-item5.webp"
                                            className="w-100 h-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-singapore" role="tabpanel"
                                aria-labelledby="pills-singapore-tab" tabIndex="0">
                                <div className="grid-box pt-5 pt-1">
                                    <div className="grid-items grid-Singapore1 position-relative tab-pane fade show active"
                                        role="tabpanel" tabIndex="0">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid6} alt="grid-item6.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-Singapore2 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid4} alt="grid-item4.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-Singapore3 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid2} alt="grid-item2.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-Singapore4 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid1} alt="grid-item1.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-Singapore5 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid3} alt="grid-item3.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-Singapore6 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid6} alt="grid-item6.webp"
                                            className="w-100 h-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-ittaly" role="tabpanel" aria-labelledby="pills-ittaly-tab"
                                tabIndex="0">
                                <div className="grid-box pt-5 pt-1">
                                    <div className="grid-items grid-item1 position-relative tab-pane fade show active"
                                        role="tabpanel" tabIndex="0">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid1} alt="grid-item1.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-item2 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid2} alt="grid-item2.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-item3 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid3} alt="grid-item3.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-item4 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid4} alt="grid-item4.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-item5 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid5} alt="grid-item5.webp"
                                            className="w-100 h-100" />
                                    </div>
                                    <div className="grid-items grid-item6 position-relative">
                                        <a className="small-btn fs_14 ff-Inter fw_500" href="">3.5</a>
                                        <div className="position-absolute bottom-7 left-7">
                                            <p className="fs_20 fw_600 ff-Inter text-white m-0 pb-2">Vientam</p>
                                            <p className="fs_14 fw_400 ff-Inter text-white m-0">Worefall</p>
                                        </div>
                                        <img src={grid6} alt="grid-item6.webp"
                                            className="w-100 h-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Topsection
