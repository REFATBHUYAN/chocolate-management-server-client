import React from "react";
import { Link } from "react-router-dom";

const AddChocolate = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        // console.log(name, country, category);
        const chocolate = {
            name,
            country,
            category
        }
        fetch('http://localhost:5000/chocolate',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(chocolate)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }

  return (
    <div className="bg-[#FFFFFF] m-16">
      <h1 className="font-bold text-4xl text-center bg-yellow-700 py-2 w-1/2 mx-auto rounded-md">
        Chocolate Management System
      </h1>
      <Link to="/">
        <button className="border p-2 rounded-md my-5">All Chocolate</button>
      </Link>
      <div>
        <div className="text-center">
          <h1 className="font-bold text-2xl">New Chocolate</h1>
          <p>add the new chocolate here</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered w-full rounded-md"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <label className="">
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  className="input input-bordered w-full rounded-md"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="">
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  className="input input-bordered w-full rounded-md"
                />
              </label>
            </div>
            <input type="submit" value="ADD CHOCOLATE" className="btn w-full p-2 bg-slate-600 text-white rounded-md my-5" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChocolate;
