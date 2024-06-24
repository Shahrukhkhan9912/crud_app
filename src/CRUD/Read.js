import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

const Read = () => {
  const URL = "http://localhost:3001/data";

  const [apiData, setAPIData] = useState([]);

  const getAPIData = () => {
    axios.get(URL).then((response) => {
      setAPIData(response.data);
      console.log(response);
    });
  };

  useEffect(() => { 
    getAPIData();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>User Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Edit Button</th>
            <th>Delete Button</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((userData, index) => {
            return (
              <tr key={index}>
                <td> {userData.id}</td>
                <td> {userData.name} </td>
                <td> {userData.user_name} </td>
                <td> {userData.age} </td>
                <td> {userData.phone} </td>
                <td> <Button variant="success"> Edit </Button> </td>
                <td> <Button variant="danger" > Delete </Button> </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Read;
