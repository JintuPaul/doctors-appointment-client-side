import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();
  const { data, specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {

          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          // save doctor information to the database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/manageDoctors");
            });
        }
      });
  };

  return (
    <div>
      <h4 className="text-3xl font-semibold my-5">Add A doctor</h4>
      <div className="w-96 shadow-xl rounded-xl p-10">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium font-sans">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full "
              {...register("name", { required: "Email Address is required" })}
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium font-sans">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full "
              {...register("email", { required: "Email Address is required" })}
            />
            {errors.email && (
              <p role="alert" className="text-red-600">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-lg font-medium font-sans">
                specialty
              </span>
            </label>
            <select
              {...register("specialty")}
              className="select select-ghost w-full max-w-xs"
            >
              {data &&
                data.map((specialty) => (
                  <option key={specialty._id} value={specialty.name}>
                    {specialty.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text text-lg font-medium font-sans">
                Photo
              </span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full "
              {...register("image", { required: "photo is required" })}
            />
            {errors.image && (
              <p role="alert" className="text-red-600">
                {errors.image?.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            className="rounded-xl text-center cursor-pointer py-2 px-5 bg-slate-700 w-full text-white font-semibold"
            value="Add Doctor"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
