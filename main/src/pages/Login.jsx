import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      console.log("Login attempt with:", { email: formData.email });
      // In a real app, you would call your authentication API here
      navigate("/home");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8">
        <h2 className="text-2xl font-semibold mb-6 text-left">Login</h2>

        <div className="mb-4">
          <InputField
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            label="Email"
            error={errors.email}
            required
          />
        </div>

        <div className="mb-6 relative">
          <InputField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            label="Password"
            error={errors.password}
            required
          />
          <button
            type="button"
            className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500 hover:text-gray-700"
            onClick={togglePassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-green-500 hover:text-green-700 font-medium"
          >
            Register Now
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
