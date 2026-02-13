import React, { useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = async (data) => {
    try {
      const { name, photoURL } = data;
      await updateUserProfile(name, photoURL);
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
          <h3 className='font-bold'>Update Your Profile</h3>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input {...register('name', { required: 'Name is required' })} type='text' placeholder='Your name' className='input input-bordered' />
            {errors.name && <span className='text-sm text-red-500'>{errors.name.message}</span>}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Photo URL</span>
            </label>
            <input {...register('photoURL', { required: 'Photo URL is required' })} type='text' placeholder='Photo URL' className='input input-bordered' />
            {errors.photoURL && <span className='text-sm text-red-500'>{errors.photoURL.message}</span>}
          </div>
          <div className='form-control mt-6'>
            <button type='submit' className='btn bg-green text-white'>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
