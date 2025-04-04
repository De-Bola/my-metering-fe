import React, {useEffect, useState} from 'react'
import { getCustomerById } from '../services/customerService'

const Home = () => {
    const [userDetails, setUserDetails] = useState({}) 
    let userId = '2'

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