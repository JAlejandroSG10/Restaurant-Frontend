import { element, exact } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Restaurant = React.lazy(()=> import('./views/management/restaurants/restaurant/Restaurant.js'))
const RestaurantForm = React.lazy(() => import('./views/management/restaurants/restaurant/RestaurantForm'))
const RestaurantEditForm = React.lazy(()=> import('./views/management/restaurants/restaurant/RestaurantEditForm'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/Restaurants', name: 'Restaurants', exact: true},
  { path: '/restaurants/Restaurant', name: 'Restaurant', element: Restaurant},
  { path: '/restaurants/RestaurantForm', name: 'RestaurantForm', element: RestaurantForm},
  { path: '/restaurants/RestaurantEditForm', name: 'RestaurantEditForm', element: RestaurantEditForm}
]

export default routes