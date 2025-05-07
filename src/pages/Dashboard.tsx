import { useEffect, useState } from "react";
interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
const Dashboard=()=>{
    const [tableData, setTableData]=useState<User[]>([]);

    const fetchCall=async ()=>{

        try{
            const response = await fetch("https://reqres.in/api/users?page=1",{
                headers: {
                    "x-api-key": "reqres-free-v1"
                } 
            }
            );
            const data = await response.json()
            setTableData(data?.data);
            console.log(data)

        }catch(err){
            //
            console.log(err)
        }

    }

    useEffect(()=>{
        fetchCall()
    },[])

    return (
        <div>
            <h1>Dashboard</h1>
            <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Avatar</th>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="w-10 h-10 rounded-full mx-auto"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.first_name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.last_name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

        </div>
        

    )
}
export default Dashboard;