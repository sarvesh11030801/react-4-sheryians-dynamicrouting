"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import link from 'next/link'

const page = () => {
  const [users, setusers] = useState([])

  const getUser = async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users")
    // console.log(result);
    const data = result.data
    // console.log(data);
    
    // Or

    // const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    // console.log(data);
    setusers(data)
  }

  useEffect(() => {    // Function ko automatically call karne ka kam kar raha hay useEffect
    getUser()
  }, [])
  
  return (
    <>
    <button onClick = {getUser}>Get Data</button>
    <div>
      <ul>
        {users.map((e) => {
          return <li>{e.username} --- <a href = {`/${e.id}`}>Explore</a></li>
        })}
      </ul>
    </div>
    </>
  )
}

export default page