import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import axios, { AxiosError } from "axios";
import { useState } from "react"
import './Login.css';
import Swal from "sweetalert2";

export const Login = () => {


    const [data, setData] = useState({});

    const onChange = (e: any) => {
        e.preventDefault()
        const tempoData: any = data;
        tempoData[e.target.name] = e.target.value;
        setData(tempoData);
    }

    const onSubmit = async () => {
        try {

            Swal.fire("Guardando Datos")
            Swal.showLoading();
            await axios.post("http://localhost:4000/user/login", data);
            Swal.fire("Datos validados con exito", "", "success");
        } catch (error: any) {
            Swal.fire("Algo salio mal", (error as AxiosError).message, "error");
        }
    }

    return (

        <Container id="container">
            <Card.Title id="tittle">Bienvenido al Login</Card.Title>
            <Card id="card1">
                <Card.Body>

                    <Card.Title id="cardTittle">Iniciar Sesion</Card.Title>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Email: </Form.Label>
                                <Form.Control name="mail" placeholder="Ingresa tu mail" onChange={onChange} id="inputBarra" type="email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña: </Form.Label>
                                <Form.Control name="password" placeholder="Ingresa tu contraseña" onChange={onChange} id="inputBarra" type="password" />
                            </Form.Group>

                        </Col>

                    </Row>
                    <Row>
                        <Col id="sendButton">
                            <Button onClick={() => onSubmit()}>Ingresar</Button>
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
                            Resgistrate <a href="/registro" >aqui</a>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}