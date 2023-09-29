"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    // console.log(params.id);
    const {id} = params;
    const [users, setusers] = useState([])

  const getUser = async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users/" + id)
    const data = result.data
    setusers(data)
    // console.log(data.username);
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>{JSON.stringify(users)}</div>
  )
}

export default page