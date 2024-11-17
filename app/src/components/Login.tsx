import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import './Login.css';


export const Login = () =>{
    return (
       
        <Container>
             <Card.Title id="tittle">Bienvenido al Login</Card.Title>
            <Card id="card1">
                <Card.Body>

                    <Card.Title id="cardTittle">Iniciar Sesion</Card.Title>
                    <Row>
                        <Col>
                        <Card.Title>Usuario:</Card.Title>
                        <Form.Control/>
                        <Card.Title>Contraseña:</Card.Title>
                        <Form.Control/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button>Ingresar</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        ¿Has olvidado tu contraseña? 
                        </Col>
                        <Col>
                        Recuperala <a>aqui</a> 
                        </Col>
                        <Col>
                        ¿Aun no cuentas con una cuenta?
                        </Col>
                        <Col>
                           Resgistrate <a>aqui</a>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}