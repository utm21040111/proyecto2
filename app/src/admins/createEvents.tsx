import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './createEvents.css'

interface IMetric {
    description: string;
    max_points: number;
}

interface IEvent {
    title: string;
    maxRound: number;
    metrics: IMetric[];
}

export const CreateEvent = () => {
    const emptyMetric = {
        description: "",
        max_points: 0
    };

    const [event, setEvent] = useState<IEvent>({
        title: "",
        maxRound: 0,
        metrics: [emptyMetric]
    });

    const addMetric = () => {
        const data = event;
        data.metrics.push(emptyMetric);
        setEvent({ ...data });
    };

    // Elimina la ,etreica en el indice del array especificado
    const removeMetric = (index: number) => {
        const data = event;
        data.metrics.splice(index, 1);
        setEvent({ ...data });
    };

    return (
        <Container id="container">
            <Card.Title id='cardTittle'>Bienvenido al portal para crear un evento</Card.Title>
            <Card className='m-3'>
                <Card.Body>
                    <Card.Title id='cardTittle'>Crear evento</Card.Title>
                    <Form>
                        <Row className='mb-3'>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Titulo del evento</Form.Label>
                                    <Form.Control name="title" type='text' placeholder='Ingresa el titulo de evento' maxLength={50} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Numero de rondas</Form.Label>
                                    <Form.Control name="maxRound" type='number' placeholder='Ingresa el # de rondas' min={0} max={10}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className='text-center'>
                                <Form.Label>Metricas:</Form.Label>
                                {
                                    event.metrics.map((metric, i) => (
                                        <Row key={i} className='mb-3 align-items-center'>
                                            <Col>
                                                <Form.Label>Descripción:</Form.Label>
                                                <Form.Control name="description" type='text' placeholder='Ingresa la descripcion del evento' maxLength={50}/>
                                            </Col>
                                            <Col>
                                                <Form.Label>Calificación maxima:</Form.Label>
                                                <Form.Control type='number' name="max_points" placeholder='Ingresa la calificacion maxima' min={1} max={10}/>
                                            </Col>
                                            <Col xs="auto" id="containerEliminar">
                                                <Button id="btnEliminar" onClick={() => removeMetric(i)}> Eliminar</Button>
                                            </Col>
                                        </Row>
                                    ))
                                }
                                <Row>
                                    <Col id='contMetric'>
                                        <Button variant='info' onClick={() => addMetric()} id='btnMetric'>Agregar metrica</Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Row>
                        <hr />
                        <Row>
                            <Col id='sendButton'>
                                <Button>Guardar evento</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};
