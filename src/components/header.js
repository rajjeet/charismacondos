import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css";

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h3>
        <Link id={'home-link'} to="/">
          {siteTitle}
        </Link>
      </h3>
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
