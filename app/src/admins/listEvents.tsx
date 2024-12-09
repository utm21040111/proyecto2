import { Container } from "react-bootstrap";
import { ShowList } from "../components/showList";

export const ListEvents = () => {
  return (
    <Container>
      <ShowList entity="event" />
    </Container>
  )
}