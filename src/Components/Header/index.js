import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from  '../../Components/img/Mobil.png'

const Header = () => {
  return (
    <>
        <Container fluid className="bg-light gap-5">
            <Row>
                <Col xs="6">
                    <Container className="bg-light">
                    <h3 class="mb-3"><b>Sewa & Rental Mobil Terbaik di Kawasan Salatiga </b></h3>
                    <p class="mb-3">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik
                        dengan harga terjangkau. Selalu siap melayani kebutuhan untuk sewa mobil
                        selama 24 jam.</p>
                    </Container>
                </Col>
                <Col xs="6">
                    <img className="w-100 bg-full body" src={img1} alt="" />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Header