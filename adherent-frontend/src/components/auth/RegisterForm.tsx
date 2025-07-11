import React, { useState } from "react";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(form);
      alert("Inscription réussie !");
      navigate("/");
    } catch (err) {
      alert("Erreur lors de l’inscription");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Inscription</h2>
      <input name="name" placeholder="Nom complet" className="w-full p-2 border mb-4" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" className="w-full p-2 border mb-4" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Mot de passe" className="w-full p-2 border mb-4" onChange={handleChange} required />
      <button type="submit" className="bg-green-500 text-white p-2 w-full rounded">S’inscrire</button>
    </form>
  );
};

export default RegisterForm;
