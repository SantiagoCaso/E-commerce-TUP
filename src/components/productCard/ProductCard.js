import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup  from 'react-bootstrap/ListGroup';

const ProductCard = ({id, image, name, size, color}) => {
  return (
    <Card style={{width: '18rem'}}>
        <Card.Img variant='top' src={image}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup variant="flush">
            <ListGroup.Item>talle</ListGroup.Item>
            <ListGroup.Item>color</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Button /*{onClick={}}*/>Comprar</Button>
      </Card.Body>
       
    </Card>
  )
}

export default ProductCard