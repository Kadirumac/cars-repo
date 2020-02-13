import {Form,Button} from 'react-bootstrap';
import './App.css';
import React, { Component, useState,useEffect } from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';
<<<<<<< HEAD
import HeaderSider from './components/HeaderSider';
=======

>>>>>>> 7f43b3bddf61eb4b5cc5ff9bcb61ab8b2f9532c3

 const style = {
  auto:{
    width:"400px",
    height:"auto",
    margin:" auto"
  },
  img:{
    width:"225px",
    height:"149px",
    marginLeft:"50px"
  },
  brand: {
    color: "white",
    backgroundColor: "#000",
    opacity:"0.7",
    padding: "10px",
    fontFamily: "Arial",
    margin:"0 auto",
    textAlign:"center",
    borderRadius:"5px"
  }

 }





function Axios() {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://cars-demo-app.herokuapp.com/cars '
  )
    console.log(data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  
  return (
      <div style={style.auto}>

        {data.map(e => (<div>
              <img style={style.img} src={e.imgUrl}></img>
              <h3 style={e.brandColor}>{e.brand}</h3>
          </div>))}
      <button onClick={refetch}>refetch</button>
    </div>
  )
}

const App = ()=>{

    const [list,setList] = React.useState([]);   

    return(
        <div>
<<<<<<< HEAD
      <HeaderSider/>
=======
      
>>>>>>> 7f43b3bddf61eb4b5cc5ff9bcb61ab8b2f9532c3
     <Axios/>
     </div>
    )
}




export default App