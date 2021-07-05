import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Divider, Row, Statistic } from 'antd';
import '../assets/styles/Dashboard.css';
import DemoBar from '../components/DemoBar';
import DemoPie from '../components/DemoPie';







const DashBoard = () => {

    
    
    const [state, setState] = useState(null);
    const url = "https://jsonplaceholder.typicode.com/users/1"
    
    function fetchData(url){
        axios({
            method: 'GET',
            url: url
        })
        .then(res=>{
            console.log(res)
            setState(res.data)
        })
        .catch(err => console.error(err))
    }

  
    useEffect(() => {
      fetchData(url)
      console.log(state)
    }, []);


    return(
        <>


        <div className="container">
            <Row gutter={25}>
                <Col xs={24} sm={12} lg={6}>
                    {
                        !!state &&
                        <Statistic style={{backgroundColor: "#9E376B", height: "75px"}} title={'Name'} value={state.name}  className='cardContainer' />
                    }
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    {
                        !!state &&
                        <Statistic style={{backgroundColor: "#EB8ABB", height: "75px"}} title={'Username'} value={state.username}  className='cardContainer' />
                    }
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    {
                        !!state &&
                        <Statistic style={{backgroundColor: "#A1E3A1", height: "75px"}} title={'Email'} value={state.email}  className='cardContainer' />
                    }
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    {
                        !!state &&
                        <Statistic style={{backgroundColor: "#25A324", height: "75px"}} title={'Website'} value={state.website}  className='cardContainer' />
                    }
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    {
                        !!state &&
                        <Statistic style={{backgroundColor: "#9E376B", height: "75px"}} title={'Phone'} value={state.phone.substring(0,13)}  className='cardContainer' />
                    }
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    {
                        !!state &&
                        <Statistic style={{backgroundColor: "#EB8ABB", height: "75px"}} title={'Address'} value={`${state.address.street}, ${state.address.city.substring(0,4)}...`}  className='cardContainer' />
                    }
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    {
                        !!state &&
                        <Statistic style={{backgroundColor: "#A1E3A1", height: "75px"}} title={'Company'} value={state.company.name}  className='cardContainer' />
                    }
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    {
                        !!state &&
                        <Statistic style={{backgroundColor: "#25A324", height: "75px"}} title={'Company Motto'} value={`${state.company.catchPhrase.substring(0,13)}...`}  className='cardContainer' />
                    }
                </Col>
            </Row>
            <Divider />
            <Row gutter={20}>
                <Col xs={24} sm={24} lg={12} className='graphChart'>
                    <h3 className='graphTitle'>Total followers per year</h3>
                    <DemoBar  />
                </Col>
                <Col xs={24} sm={24} lg={12}>
                    <h3 className='graphTitle'>Total sales per year</h3>
                    <DemoPie />
                </Col>

            </Row>
        </div>
        </>
    );
};

export default DashBoard;