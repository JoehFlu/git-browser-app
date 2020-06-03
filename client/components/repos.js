import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Repos = (props) => {
  const { user } = useParams()
  return (
    <div>
      <br />
      {props.repos.map((repo) => (
        <div className="bg-teal-400 hover:text-black text-white p-2 mb-2" key={repo.id}>
          <Link to={`/${user}/${repo.name}`}>{repo.name}</Link>
        </div>
      ))}
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)
