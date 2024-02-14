import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurantCard({restaurant}) {
    console.log(restaurant);
  return (
    <Link to={`/view-restaurant/${restaurant.id}`} style={{color:'white',textDecoration:'none'}}>
    <Card>
      <Card.Img style={{height:'350px',borderRadius:'30px'}} className='p-2' variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          <p>Cuisine:{restaurant.cuisine_type}</p>
        </Card.Text>
        <Card.Text>
          {restaurant.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    
  )
}

export default RestaurantCard