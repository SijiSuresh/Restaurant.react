import React , {useState,useEffect} from 'react';
import {Row , Col} from 'react-bootstrap';
import RestaurantCard from './RestaurantCard';

function Home() {

    //state to hold data from Api call
    const[restaurants,setRestaurants] = useState([])

    //function to get data from  api
    const fetchData = async ()=>{
       const result = await  fetch('/restaurants.json')
       result.json().then(
        data =>{
            setRestaurants(data.restaurants);
        }
       )
    }
     console.log(restaurants);

    useEffect(() => {
      fetchData()
    },[])
    

  return (
    <Row>
        {
            restaurants.map(item=>(
              <Col className='px-5 py-3' sm={6} md={4}>
               <RestaurantCard restaurant={item} />
               </Col>

            ))
        }
    </Row>
  )
}

export default Home