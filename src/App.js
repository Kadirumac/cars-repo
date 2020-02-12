import {Form,Button} from 'react-bootstrap';
import './App.css';
import React, { Component, useState,useEffect } from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';


 

const myP = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

function Axios() {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://cars-demo-app.herokuapp.com/cars '
  )
    console.log(data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  
  return (
    <div>

        {data.map(e => (<div>
              <img src={e.imgUrl}></img>
              <p style={myP}>{e.brand}</p>
          </div>))}
      <button onClick={refetch}>refetch</button>
    </div>
  )
}

const App = ()=>{

    const [list,setList] = React.useState([]);   

    return(
        <div>
      
     <Axios/>
     </div>
    )
}




export default App