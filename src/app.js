import React from 'react'
import './app.css'
import Layout from './basic/layout'
import { HashRouter, Route } from 'react-router-dom'
export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" component={Layout}></Route>
      </HashRouter>
    )
  }
}
