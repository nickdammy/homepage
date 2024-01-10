import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <div>
        <footer className="footer mt-auto py-3" style={{backgroundColor: 'antiquewhite'}}>
          <div>
          <p style={{textAlign:'center' }}></p>
          <p><Link to="/contactus">Contact US</Link></p>
          <p><Link to="/aboutus">About US</Link></p>
        </div>
      </footer>
    </div>
  )
}