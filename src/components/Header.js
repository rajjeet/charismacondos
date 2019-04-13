import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css";

const Header = ({ siteTitle }) => (
  <header>
      <div>
        <Link id={'home-link'} to="/">
          <p>{siteTitle}</p>
        </Link>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
