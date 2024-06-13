
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function player({name, age, jerseyNumber, nationality, image, team}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{color: 'blue'}}>
          {team}
        </Card.Text>
        <Card.Text style={{color: 'blue'}}>
          {nationality}
        </Card.Text>
        <Card.Text style={{color: 'blue'}}>
          {age}
        </Card.Text>
        <Button variant="primary">{jerseyNumber}</Button>
      </Card.Body>
    </Card>
  );
}


player.defaultProps = {
    name: 'Unknown Player',
    age: 'Unknown Age',
    jerseyNumber: 'Unknown Jersey Number',
    nationality: 'Unknown Nationality',
    image: 'https://via.placeholder.com/150', // Placeholder image
    team: 'Unknown Team'
  };

export default player;