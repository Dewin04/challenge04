import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Form , Button} from 'react-bootstrap';
import "./Home.css"

const Home = () => {

  const [data, setData] = useState();

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://rent-cars-api.herokuapp.com/admin/car',
      headers: { }
    })
    .then(function (response) {
      setData(response.data)
    });
  
  }, [])
  const listData = data?.map((item) => {
    return(
      <>
        <ol key={item.id}>
          <li>{item.id}</li>
          <li>{item.name}</li>
          <li>{item.category}</li>
          <li>{item.price}</li>
          <li>{item.status.toString()}</li>
        </ol>
      </>
    )
  })

  console.log(data)
  return (
    <>
      <Container className='container-search'>
      </Container>
      <div>{listData}</div>
    </>
  )
}

export default Home