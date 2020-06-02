import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [value, setValue] = useState('blabla')
  const onChange = (ev) => {
    setValue(ev.target.value)
  }
  const onClick = () => {
    history.push(`/${value}`)
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-400 hover:text-red-500 text-black font-bold rounded-lg border shadow-lg p-4">
          <input value={value} onChange={onChange} className="mr-2" type="text" />
          <button
          onClick={onClick}
            className="bg-blue-400 hover:text-yellow-400 text-white font-bold rounded-lg shadow-lg p-2"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
