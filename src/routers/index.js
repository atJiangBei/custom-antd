import React from 'react'
//import loadable from 'react-loadable'
import { HashRouter, Route } from 'react-router-dom'
import { components } from './map'
//import Loading from '@/basic/loading'
// const uploadImgComponent = loadable({
//   loader: () => import('@/pages/uploadImg'),
//   loading: Loading
// })

const ContentRouter = () => {
  return (
    <>
      {components.map(main => {
        return (
          <Route
            path={main.path}
            key={main.path}
            component={main.component}
          ></Route>
        )
      })}
      {/* <Route path="/index/uploadImg" component={uploadImgComponent}></Route> */}
    </>
  )
}

export default ContentRouter
