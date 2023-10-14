import React from 'react'
import Container from 'react-bootstrap/Container';
import { NewSlatter } from './IconImg';
function Newslattersection() {
    return (
        <div>
            <section className="bg_white pt-5 pt-4 pt-3 pb-5 pb-4" data-aos="fade-down" data-aos-easing="linear"
                data-aos-duration="500">
                <Container className='background-img rounded-4 pt-5 pt-4 pb-5 pb-4'>
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <div>
                            <h2 className="fs_40 fw_600 ff-Inter text-center pb-2">Sign up to our newsletter</h2>
                            <p className="fs_16 fw_400 ff-Inter text_grey text-center mw-415 m-0 pb-5">Reciev latest news,
                                update, and many other
                                things
                                every week.</p>
                        </div>
                        <div className="email-box d-flex align-items-center justify-content-between" >
                            <input type="text" name="Enter Your email address" placeholder="Enter Your email address"
                                className="email rounded-5 fw_400 fs_14 ff-Inter opacity-75" />
                            <div className="d-flex justify-content-end small-box" >
                                <a href="">
                                   <NewSlatter/>
                                </a>
                            </div >
                        </div >
                    </div >
                </Container >
            </section >

        </div >
    )
}

export default Newslattersection
