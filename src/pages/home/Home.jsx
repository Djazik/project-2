import React from 'react'
import UsersWrapper from '../../components/users-wrapper/UsersWrapper'
import { useGetUsersQuery } from '../../context/api/UserApi'
import { useGetProductQuery } from '../../context/api/ProductApi'
import { ProductWrapper } from '../../components/productwrapper'
import Main from '../../components/main/Main'
import Feature from '../../components/feature/Feature'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
// import Login from '../login/Login'

const Home = () => {
   let {data, error, isLoading, isError, isSuccess}=  useGetUsersQuery()
   let {data: productData } = useGetProductQuery()
   console.log(productData)
  return (
    <div>
            <Main/>
            <Feature/>
            <ProductWrapper isAdmin={false} products={productData}/> 
            <UsersWrapper isAdmin={false} users={data}/>
            <Contact/>
            <Footer/>
            {/* <Login/> */}
    </div>
  )
}

export default Home