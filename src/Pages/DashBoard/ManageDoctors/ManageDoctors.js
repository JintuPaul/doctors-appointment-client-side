import { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`doctor ${doctor.name} deleted successfully`);
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h4 className="text-3xl font-semibold my-5">Manage Doctors</h4>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>SPECIALITY</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.length &&
              doctors?.map((doctor, i) => (
                <tr key={doctor?._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-20 rounded-full">
                        <img src={doctor?.image} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor?.name}</td>
                  <td>{doctor?.specialty}</td>
                  <td>
                    <label
                      onClick={() => setDeletingDoctor(doctor)}
                      htmlFor="confirmationModal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={"are you sure you want to delete"}
          message={`if you delete ${deletingDoctor.name} if can't undone`}
          closeModal={closeModal}
          successAction={handleDeleteDoctor}
          successDeleteButton="delete"
          modalData={deletingDoctor}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
