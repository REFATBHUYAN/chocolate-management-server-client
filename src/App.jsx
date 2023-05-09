import { useState } from "react";
import TableRow from "./components/TableRow";
import { Link, useLoaderData } from "react-router-dom";

function App() {
  
  const data = useLoaderData();
  const [chocolates, setChocolates] = useState(data);
  // console.log(data);

  return (
    <>
      <div className="bg-[#FFFFFF] m-16">
        <h1 className="font-bold text-4xl text-center bg-yellow-700 py-2 w-1/2 mx-auto rounded-md">
          Chocolate Management System
        </h1>
        <Link to='/chocolate'><button className="border p-2 rounded-md my-5">New Chocolate</button></Link>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Country/Factory</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td>
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </td>
                  <td>Hot Pink chocolate</td>
                  <td>australia</td>
                  <td>Primium</td>
                  <td>
                    <div className="flex gap-2">
                      <button className="border bg-lime-400 p-2 rounded-md">Edit</button>
                      <button className="border bg-red-400 p-2 rounded-md">X</button>
                    </div>
                  </td>
                </tr> */}
                {
                  chocolates.map(chocolate =><TableRow 
                    key={chocolate._id} 
                    chocolate={chocolate} 
                    setChocolates={setChocolates}
                    chocolates={chocolates}
                    ></TableRow> )
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
