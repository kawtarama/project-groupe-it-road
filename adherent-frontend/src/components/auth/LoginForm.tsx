import React, { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (error) {
      alert("Identifiants incorrects");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Connexion</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        className="w-full p-2 border mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
        Se connecter
      </button>
    </form>
  );
};

export default LoginForm;
