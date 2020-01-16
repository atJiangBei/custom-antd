import React from 'react'
//import loadable from 'react-loadable'
import { HashRouter, Route } from 'react-router-dom'
import { components } from './map'
//import Loading from '@/basic/loading'
// const uploadImgComponent = loadable({
//   loader: () => import('@/pages/uploadImg'),
//   loading: Loading
// })

console.log(components)
const ContentRouter = () => {
  return (
    <>
      {/* <Route path="/index/uploadImg" component={uploadImgComponent}></Route> */}
    </>
  )
}

export default ContentRouter
