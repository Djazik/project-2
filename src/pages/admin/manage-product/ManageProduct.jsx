import React from 'react'
import { useGetProductQuery } from '../../../context/api/ProductApi'
import { ProductWrapper } from '../../../components/productwrapper'
import Footer from '../../../components/footer/Footer'

const ManageProduct = () => {
    let {data: productData}  = useGetProductQuery()
    console.log(productData)
  return (
    <div>
        <ProductWrapper isAd={true}  isAdmin={true} products={productData}/>
    </div>
  )
}

export default ManageProduct