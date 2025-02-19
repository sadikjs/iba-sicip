"use client";
import { useState } from "react";
import "./loginStyle.css";
import { loginCredentials } from "@/app/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [error, setError] = useState(false);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await loginCredentials(formData);
      if (!!response.error) {
        setError(response.error);
      } else {
        console.log("user front", response);
        router.push("/");
      }
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  }
  return (
    <div className="register">
      <span className="registerTitle">Login</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          name="email"
          placeholder="Enter your email..."
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="registerInput"
          placeholder="Enter your password..."
          required
        />
        <button className="registerButton" type="submit">
          Login
        </button>
      </form>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <p>
          <Link href="/register" className="underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
