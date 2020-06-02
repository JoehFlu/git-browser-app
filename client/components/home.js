import React from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import Head from './head'
import Main from './main'
import DummyView from './dummy-view'
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Home" />
      <div> Hello World from Home, {user}</div>
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:user" component={() => <DummyView />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
