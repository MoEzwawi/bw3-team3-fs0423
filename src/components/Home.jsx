import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Post from './Post';




const Home = () => {
  const [postData, setPostData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
        method: 'GET',

        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzMmUxMWRkOTllZjAwMTlhMDkyZWYiLCJpYXQiOjE2OTk5NTAwOTcsImV4cCI6MTcwMTE1OTY5N30.0Lrp33zzPyoU9V1bSkuoimzq5n89mmTJkFLONrDUqQI",
          'Content-Type': 'application/json',
        },

      });

      if (!response.ok) {
        throw new Error('Errore nella richiesta GET');
      }

      const data = await response.json();
      setPostData(data);
      console.log(data)
    } catch (error) {
      console.error('Errore durante la richiesta GET:', error.message);
    }
  };



  useEffect(() => {
    fetchData();
  }, []);

  return (

    <Container >
      <Col></Col>
      <Col>
      {postData.map(post => (
        < Row className='justify-content-center grow-0' key={post._id}>
          <Post image={post.user.image} username={post.username} 
          date1={post.createdAt} text={post.text} date2={post.updatedAt}
           id={post._id}/> 
        
        </Row >
      ))
      }
      </Col>
      <Col></Col>
    </Container >
  );
};

export default Home;