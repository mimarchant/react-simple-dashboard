import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
            {
                !!people &&
                people.map((person, idx)=>{
                    return(
                        <h1 className='ppl' key={idx}>{person.name}</h1>
                    )
                })
            }
        </div>
    );
}

export default PeopleList;