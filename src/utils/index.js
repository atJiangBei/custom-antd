import loadable from 'react-loadable'
import Loading from '@/basic/loading'

function LoadableComponent(path) {
  return loadable({
    loader: () => import(path),
    loading: Loading
  })
}

export { LoadableComponent }
