import { Container } from "react-bootstrap"
import { ShowList } from "../components/showList"

export const ListTeams = () => {
    return (
        <Container>
            <h1>Teams</h1>
            <ShowList entity="team" />
        </Container>
    )
}