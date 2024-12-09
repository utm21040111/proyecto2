import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap"
import Swal from "sweetalert2";
import './participantsRegister.css';
import { IUser } from "../Types";

export const RegisterPartcipant = () => {

    const [data, setData] = useState<IUser>({
        nombre: "",
        password: "",
        mail: "",
        curp: "",
        rol: "participant"
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const tempoData: any = data;
        tempoData[e.target.name] = e.target.value;
        setData(tempoData);
    }

    const onSubmit = async () => {
        try {

            Swal.fire("Guardando Datos")
            Swal.showLoading();
            if (data) {
                data["rol"] = "participant"
            }
            await axios.post("http://localhost:4000/user/register", data);
            Swal.fire("Datos validados de manera exitosa", "", "success");
        } catch (error: any) {
            Swal.fire("Sucedio un error", (error as AxiosError).message, "error");
        }
    }

    return (
        <Container id="container">
            <Card.Title id="tittle">Bienvenido Participantes</Card.Title>
            <Card id="completeCard">
                <Card.Body>
                    <Card.Title id="cardTittle">Registro de participantes</Card.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre: </Form.Label>
                            <Form.Control name="nombre" placeholder="Ingresa tu nombre" onChange={onChange} id="inputBarra" type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña: </Form.Label>
                            <Form.Control  name="password" placeholder="Ingresa tu contraseña" onChange={onChange} id="inputBarra" type="password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email: </Form.Label>
                            <Form.Control name="mail" placeholder="Ingresa tu mail" onChange={onChange} id="inputBarra" type="email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>CURP: </Form.Label>
                            <Form.Control name="curp" placeholder="Ingresa tu curp" onChange={onChange} id="inputBarra" type="text"/>
                        </Form.Group>
                        <Form.Group id="sendButton">
                        <Button onClick={() => onSubmit()} > Enviar</Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}