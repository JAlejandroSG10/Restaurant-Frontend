import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell
} from '@coreui/react'

const Restaurant = () => {

  const navigate = useNavigate();
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(()=>{
    const getRestaurants = async() =>{
      const response = await Axios({
        url: 'http://localhost:1337/api/listrestaurant'
      });
      const lstRestaurants = Object.keys(response.data).map(i=> response.data[i]);
      setRestaurantData(lstRestaurants.flat());
    }

    getRestaurants();
  },[]);

  function handleCreateRestaurant (event){
    navigate('/restaurants/RestaurantForm');
  }

  function handleEdit(restaurantId){
    navigate(`/restaurants/RestaurantEditForm`);
  }

  const handleDisable = async(restaurantId) =>{
    try{
      var url = "http://localhost:1337/api/disablerestaurant/"+restaurantId;
      const response = await Axios.put(url);
      window.location.reload();
    }
    catch(e){
      console.log(e);
    }
  }

  

  const columns = [
    {
      title: 'Name',
      dataIndex: 'restaurantName'
    },
    {
      title: 'NIT',
      dataIndex: 'restaurantNit'
    },
    {
      title: 'Address',
      dataIndex: 'restaurantAddress'
    },
    {
      title: 'Phone',
      dataIndex: 'restaurantPhone'
    },
    {
      title: 'City',
      dataIndex: 'cityId'
    },
    {
      title: 'Options',
      
    }
  ]
  return(
    <div>
      <CButton onClick={handleCreateRestaurant}> New Restaurant </CButton>
      <CTable>
        <CTable>
          <CTableHead>
            <CTableRow>
              {columns.map((column, index) => (
                <CTableHeaderCell key = {index}>{column.title}</CTableHeaderCell>
              ))}
            </CTableRow>
          </CTableHead>
          <CTableBody>
              {restaurantData.map((restaurant, index) => (
                <CTableRow key = {index}>
                  {columns.map((column, columnIndex) => (
                    <CTableDataCell key={columnIndex}> {restaurant[column.dataIndex]} </CTableDataCell>
                  ))} 
                </CTableRow>
              ))}
          </CTableBody>
        </CTable>
      </CTable>
    </div>
  )
}
export default Restaurant