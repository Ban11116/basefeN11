import React, { memo } from 'react'
import BestSellingProducts from './BestSellingProducts '
import SpecialOffers from './SpecialOffers '

const products = () => {
  return (
    <>
     <BestSellingProducts/>
     <SpecialOffers/>
    </>
  )
}

export default memo(products)