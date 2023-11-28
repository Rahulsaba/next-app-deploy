"use client"
import  {serverLogin} from "../api/config";


export default function Login() {
  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    serverLogin(formData);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder="email"
        className="text-black"
      />
      <br />

      <input
        type="password"
        name="password"
        placeholder="password"
        className="text-black"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}