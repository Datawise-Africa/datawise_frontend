import {useState, useEffect} from 'react'
import Loader from '../blog/Loader' 
import apiService from '../../services/apiService'
import Section from '../../components/HomePage/Section'

const UsersDashboard = () => {
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await apiService.get("/users/staffs/");
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.log('Failed to fetch blogs', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  // if (isLoading) {
  //   return <Loader />
  // }
  
  // console.log('users', users)

  return (
    <div className='flex justify-center items-center'>
      <div className="text-center">
        <p>Users Dashboard Coming Soon</p>
      </div>
    </div>
  )
    // <div className='container mx-auto py-10'>
    //   <h2 className="text-2xl font-semibold mb-6">Users Dashboard</h2>
    //   <div className=''>
    //     <table className='min-w-full'>
    //       <thead className='text-n-1'>
    //         <tr>
    //           <th className=''>Avatar</th>
    //           <th className=''>First Name</th>
    //           <th className=''>Last Name</th>
    //           <th className=''>Job Title</th>
    //           <th className=''>LinkedIn URL</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {users.map((user, index) => (
    //           <tr key={index} className="">
    //             <td className=''>
    //               <img src={user?.avatar} alt="avatar" className='w-10 h-10 rounded-full object-cover'/>
    //             </td>
    //             <td className=''>{user?.user?.first_name}</td>
    //             <td className=''>{user?.user?.last_name}</td>
    //             <td className=''>{user?.title}</td>
    //             <td className=''>
    //               <a href={user?.linkedin_url} target='_blank' rel='noopener noreferrer' className='hover:underlin'>{user?.linkedin_url}</a>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

  
}

export default UsersDashboard