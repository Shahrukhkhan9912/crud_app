import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const URL = "http://localhost:3001/data";
  const history = useNavigate();

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();

  const postUserData = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
      try {
        await axios.post(URL, {
          name: name,
          user_name: username,
          age: age,
          phone: phone,
        });
        history("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    postUserData();
  }, []);

  return (
    <>
      <Form>
        <Form.Label>Name</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Label>User Name</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Enter Your User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Form.Label>Age</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Enter Your Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <Form.Label> Phone </Form.Label>
        <Form.Control
          className="mb-3"
          type="number"
          placeholder="Enter Your Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button variant="primary" onClick={postUserData} type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Create;
