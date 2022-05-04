import React from 'react'
import { Link } from 'react-router-dom'

export default function Add() {
  return (
      <Link to="/upload"> 
    <div className='add_btn'><p>+</p></div>
      </Link>
  )
}
