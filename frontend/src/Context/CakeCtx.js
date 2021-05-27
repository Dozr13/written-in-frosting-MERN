import React, {createContext, useContext, useState, useEffect} from 'react'
import axios from 'axios'


export const CakeContext = createContext(null)

export const CakeProvider = (props) => {
  const [cakes, setCakes] = useState([])


  // const createOrder = (orderNumber, loanNumber, orderStatus, address, city, state, zip, user, client) => {
  //   axios.post('http://localhost:3013/work-orders/add', {orderNumber, loanNumber, orderStatus, address, city, state, zip, user, client}).then(({data}) => {
  //     setOrders(data)
  //   }).catch(error => console.log(error))
  // }

  const readCakes = () => {
    axios.get('http://localhost:3013/cakes/').then(({data}) => {
      console.log(data)
      setCakes(data)
    }).catch(error => console.log(error))
  }

  // const updateOrder = (orderNumber, loanNumber, orderStatus, address, city, propertyState, postalCode, user, client, id) => {
  //   axios.put(`http://localhost:3013/work-orders/update/${id}`, {orderNumber, loanNumber, orderStatus, address, city, propertyState, postalCode, user, client}).then(({data}) => {
  //     setOrders(data)
  //   }).catch(error => console.log(error))
  // }


  // const deleteOrder = (id) => {
  //   axios.delete(`http://localhost:3013/work-orders/${id}`).then((data) => {
  //     console.log(data)
  //   }).catch(error => console.log(error))
  // }


  return (
    <CakeContext.Provider value={{cakes, readCakes}}>
      {props.children}
    </CakeContext.Provider>
  )
}