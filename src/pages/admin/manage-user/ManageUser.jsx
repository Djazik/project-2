import { useGetUsersQuery } from '../../../context/api/UserApi'
import UsersWrapper from '../../../components/users-wrapper/UsersWrapper'
import Footer from '../../../components/footer/Footer'

export const ManageUser = () => {
   let {data} = useGetUsersQuery()
  return (
    <div>
        <UsersWrapper isAdmin={true} users={data}/>
    </div>
  )
}

export default ManageUser