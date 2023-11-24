"use client"

import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function onSubmit(event) {
    event.preventDefault()


      const response = axios.post('https://reqres.in/api/login', {
        email,
        password
      }).then(function (response) {
        console.log(response);
      })
        .catch(function (error) {
          console.log(error, 'error');
        });
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <br />

      <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}