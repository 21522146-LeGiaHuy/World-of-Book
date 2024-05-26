import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent() {
  return (
    <Card style={{ width: '240px', height: '340px' }}>
      <Card.Img style={{height: '190px'}} variant="top" src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_183396.jpg" />
      <Card.Body style={{border: 3}}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{padding: 40}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;