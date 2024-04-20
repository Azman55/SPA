import React from 'react';
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

function Form() {
  const { register, handleSubmit, formState: { errors }, control } = useForm();
  const options = [
    { label: 'Select a Language', value: '' },
    { label: 'English', value: 'English' },
    { label: 'Bangla', value: 'Bangla' },
    { label: 'Arabic', value: 'Arabic' },
  ];

  console.log(errors);

  function getData(data) {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(getData)}>
        <div className="m-4 p-3 border border-blue-950 rounded-xl md:flex md:justify-center md:items-center">
          <div className="md:w-1/3 flex justify-center items-center">
            <label className="block text-gray-700 text-xl font-bold m-5 p-2" htmlFor="name">Name:</label>
            <input className="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" {...register("Name", { required: "Name is required" })} placeholder="Name" />
            {errors.Name && <p className="text-red-500 text-md italic ml-5 block w-full md:w-full">Name is required</p>}
          </div>
          <div className="md:w-1/3 flex justify-center items-center">
            <label className="block text-gray-700 text-xl font-bold m-5 p-2" htmlFor="email">Email:</label>
            <input className="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" {...register("Email", { required: "Email is required" })} placeholder="Email" />
            {errors.Email && <p className="text-red-500 text-md italic ml-5 block w-full md:w-full">Email is required</p>}
          </div>
          <div className="md:w-1/3 flex justify-center items-center">
            <label className="block text-gray-700 text-xl font-bold m-5 p-2" htmlFor="language">Language:</label>
            <Controller
              name="language"
              control={control}
              defaultValue={options[0]} 
              rules={{ required: "Language is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={options}
                />
              )}
            />
          </div>
          <button className='p-2 m-2 border border-stone-600 rounded-2xl hover:bg-slate-500' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;


