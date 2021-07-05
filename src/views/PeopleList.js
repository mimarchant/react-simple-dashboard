import { Col, Divider, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/PeopleList.css';

function PeopleList(props) {

    const [people, setPeople] = useState(null);
    const url = "https://jsonplaceholder.typicode.com/users"
    
    

    function fetchData(url){
        axios({
            method: 'GET',
            url: url
        })
        .then(res=>{
            console.log(res)
            setPeople(res.data)
        })
        .catch(err => console.error(err))
    }

  
    useEffect(() => {
      fetchData(url)
      
    }, []);
    
    return (
        <div className='container'>
            <Row>
                <Col xs={24} sm={24} lg={24}>
                    <h1>People List:</h1>
                </Col>
            </Row>
            <Divider />
            {
                !!people &&
                people.map((person, idx)=>{
                    return(
                        <h2  className='peopleList' key={idx}><Link target='_blank' to={`/users/details/${person.id}`}>{person.name}</Link></h2>
                    )
                })
            }
        </div>
    );
}

export default PeopleList;