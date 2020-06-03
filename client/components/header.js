import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { user, repository } = useParams()
  return (
    <nav className="flex item-center justify-between flex-wrap bg-teal-400 p-6 text-white font-bold">
      <div className="text-white" id="repository-name">
        {repository || user || 'Welcome'}
      </div>
      <div className="flex justify-end">
        {user && (
            <Link className="hover:text-black text-white mr-2" to="/" id="go-back">
              go home
            </Link>
        )}
        {repository && (
            <Link className="hover:text-black text-white" to={`/${user}`} id="go-repository-list">
              go back
            </Link>
        )}
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
