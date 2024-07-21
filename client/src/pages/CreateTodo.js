import React from "react";
import Customform from "../components/Forms";
import axios from "axios";
import { toast } from "react-toastify";

let initialState = {
  title: "",
  description: "",
};

const CreateTodo = () => {
  const [data, setData] = React.useState(initialState);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/add', data)
      .then((res) => {
        toast.success("Todo added successfully");
      }).catch((err) => {
        toast.error("Error adding todo");
      });
  };

  return (
    <Customform handleSubmit={handleSubmit} handleChange={handleChange}  values={data}/>
  );
};

export default CreateTodo;
