import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fb from  '..//img/icon_facebook.png'
import ig from  '..//img/icon_instagram.png'
import twt from  '..//img/icon_twitter.png'
import tcwh from  '..//img/icon_twitch.png'
import rct from  '..//img/Rectangle 74.png'


const Footer = () => {
  return (
    <div>
        <>
                <Container className='bg-light '>
                  <Row>
                    <Col xs="3">
                      <div className='d-flex flex-column'>
                        <p><small>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</small></p>
                        <p><small>binarcarrental@gmail.com</small></p>
                        <p><small>081-233-334-808</small></p>
                      </div>
                    </Col>
                    <Col>
                      <div className='d-flex flex-column'>
                        <p><b><small>Our Service</small></b></p>
                        <p><b><small>Why Us</small></b></p>
                        <p><b><small>Testimonial</small></b></p>
                        <p><b><small>Faq</small></b></p>
                      </div>
                    </Col>
                    <Col>
                      <div className='d-flex flex-column'>
                        <p>Connect with us</p>
                        <div className='d-flex flex-row gap-3'>
                        <img src={fb} alt="" />
                        <img src={ig} alt="" />
                        <img src={twt} alt="" />
                        <img src={tcwh} alt="" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className='' >
                        <p>Copyright Binar 2022</p>
                        <img src={rct} alt=""/>
                        </div>
                    </Col>
                  </Row>
                </Container>
        </>
    </div>
  )
}

export default Footer