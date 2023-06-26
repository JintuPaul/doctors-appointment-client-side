import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = () => {
        setDeletingDoctor(null);
      };
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data;
        }
    })
    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('make admin successfully')
                refetch()
            }
        })
    }
    const handleDeleteUsers = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              toast.success(`Users ${user.name} deleted successfully`);
            }
          });
      };
    return (
        <div>
            <h4 className='text-3xl font-semibold my-5'>All Users</h4>

            <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, i) => <tr
                            key={user._id}
                        >
                            <th>{i+1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{
                                user?.role !== 'admin' &&
                                    <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-sm text-xs">MakeAdmin</button>
                                }
                            </td>
                            
                            <td>
                    <label
                      onClick={() => handleDeleteUsers(user)}
                      htmlFor="confirmationModal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
                  </td>
                        </tr>)
                    }
                </tbody>
            </table>  
        </div>
        {deletingDoctor && (
        <ConfirmationModal
          title={"are you sure you want to delete"}
          message={`if you delete ${deletingDoctor.name} if can't undone`}
          closeModal={closeModal}
          successAction={handleDeleteUsers}
          successDeleteButton="delete"
          modalData={deletingDoctor}
        ></ConfirmationModal>
      )}
        </div>
    );
};

export default AllUsers;