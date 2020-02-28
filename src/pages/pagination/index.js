import React from 'react'

import Pagination from 'components/pagination'
import 'components/pagination/style/less'

const onShowSizeChange = function(current, pageSize) {
  console.log(current, pageSize)
}

function CustomPagination() {
  return (
    <>
      <Pagination defaultCurrent={1} total={50}></Pagination>
      <br />
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
    </>
  )
}

CustomPagination.tag = {
  tag: 'nav',
  path: '/pagination',
  label: 'Pagination 分页'
}

export default CustomPagination
