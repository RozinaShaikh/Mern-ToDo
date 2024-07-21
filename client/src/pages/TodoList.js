import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    await axios.get("http://localhost:5000/api/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }

  React.useEffect(() => { 
    fetchData();
  }, [data]);

  return (
    <div>
      <h3>Todo List</h3>
      <table className='table table-striped' style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((todoData, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{todoData.title}</td>
                <td>{todoData.description}</td>
                <Link to={`/edit/${todoData._id}`}>Edit</Link>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
