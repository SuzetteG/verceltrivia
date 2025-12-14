// ...existing code...
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";

export default function CharactersPage() {
  const { error, data, loading } = useCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <h1>Characters page, SUCCESSFUL deploy</h1>
      <Row>
        {data.characters.results.map((character) => (
          <Col key={character.id}>
            <Link to={`/${character.id}`}>
              <Card id={character.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
