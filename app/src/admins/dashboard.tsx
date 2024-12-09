import { Container, Row, Col, Card } from "react-bootstrap";
import { Calendar2Fill, MicrosoftTeams, PeopleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";


export const Dashboard = () => {

    const navigate = useNavigate();
    return (
        <Container>
            <Row>
                <Col>
                    <Card onClick={() => navigate("/user/list")}>
                        <Card.Body>
                            <Card.Title>Usuarios:</Card.Title>
                            <Card.Text><PeopleFill /></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card onClick={() => navigate("/group/list")}>
                        <Card.Body>
                            <Card.Title>Equipos:</Card.Title>
                            <Card.Text><MicrosoftTeams /></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card onClick={() => navigate("/event/list")}>
                        <Card.Body>
                            <Card.Title>Eventos:</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}