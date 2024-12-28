import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "sweetalert2/dist/sweetalert2.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check if the user is already logged in and redirect to dashboard if so
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:9090/api/login",
        { email, password }
      );

      const { token, data } = response.data;

      if (token) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("adminData", JSON.stringify(data));

        Swal.fire({
          icon: "success",
          title: "Berhasil Masuk!",
          text: response.data.message,
          confirmButtonText: "Lanjutkan",
        }).then(() => {
          navigate("/dashboard"); // Navigate to dashboard after login
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Gagal!",
          text: "Token tidak ditemukan. Silakan coba lagi.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal!",
        text: error.response?.data?.error || "Terjadi kesalahan, coba lagi.",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Belum punya akun?{" "}
          <button
            className="text-blue-400 underline"
            onClick={() => navigate("/register")}
          >
            Daftar
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
