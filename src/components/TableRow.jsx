import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({chocolate, setChocolates, chocolates}) => {
    const {_id,category,name,country} = chocolate;
    const handleDelete = (_id) =>{
      // console.log(_id)
      fetch(`http://localhost:5000/chocolate/${_id}`,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if(data.deletedCount>0){
          alert('deleted successfully')
          const remaining = chocolates.filter(choc => choc._id !== _id);
          setChocolates(remaining);
        }
      })

    }
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{country}</td>
        <td>{category}</td>
        <td>
          <div className="flex gap-2">
            <Link to={`/chocolate/edit/${_id}`}><button className="border bg-lime-400 p-2 rounded-md">Edit</button></Link>
            <button onClick={() => handleDelete(_id)} className="border bg-red-400 p-2 rounded-md">X</button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
