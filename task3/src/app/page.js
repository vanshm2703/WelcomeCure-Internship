'use client';
import './../app/globals.css'
import PatientTable from './PatientTable';
import SearchBar from './SearchBar';

import NavBar from './navbar'

function MyApp() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <PatientTable />
      
    </>
  )
}

export default MyApp
