import React from "react";
import RegisterForm from "../components/auth/RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <RegisterForm />
    </div>
  );
};

export default Register;
