import React from "react"
import { Link } from 'gatsby'
const Header = ({siteTitle}) => (
      <div className="text-center header-style caption">
        <Link
          to="/"
        >
          <h1>{siteTitle}</h1>
        </Link>
        <h1 className="display-3"><strong>Wonder</strong><small> Hair Salon</small></h1>

        <h3 >Let's wonder together!</h3>
        
      </div>
)

export default Header