import React, { Suspense } from 'react'
import User from './User'

const suspense = () => {
  return (
    <Suspense>
      <User />
    </Suspense>
  )
}

export default suspense