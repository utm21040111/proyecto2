import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import './createTeam.css';

export const CreateTeam = () => {
    return (
        <Container id="container">
            <Card.Title id="tittle">Bienvenido a Equipo</Card.Title>
            <Card id="card1">
                <Card.Body>
                    <Card.Title className="text-center">Crear un Nuevo Equipo</Card.Title>
                    <Form>
                        <Row className="mt-3">
                            <Col>
                                <Form.Control type="text" placeholder="Nombre del equipo" name="nombre" id="inputBarra" />
                                <Form.Control type="text" placeholder="Nombre del líder" name="lider" id="inputBarra"/>
                            </Col>
                        </Row>

                        <Row>
                            <Col id="sendButton">
                                <Button>Crear equipo</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};