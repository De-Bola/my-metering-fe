import React, {useEffect, useState} from 'react'
import { getCustomerById } from '../services/customerService'

const Home = () => {
    const [userDetails, setUserDetails] = useState({}) 
    let userId = '92fadd5f-1f5b-4e7b-85a5-c70b81142172'

  useEffect(() => {
    getCustomerById(userId)
      .then(response => {
        setUserDetails(response.data)
      })
      .catch(error => {
        console.error("There was an error fetching the customer data!", error);
      });
  }, []);

  return (
    <div>{userDetails?.data?.userName}</div>
  )
}

export default Home