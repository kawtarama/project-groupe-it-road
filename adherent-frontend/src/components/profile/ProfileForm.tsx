import React, { useEffect, useState } from "react";
import { getUserProfile, updateUserProfile } from "../../services/userService";
import { UserProfile } from "../../types/user";

const ProfileForm: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    getUserProfile().then((data) => {
      setUser(data);
      setForm({ name: data.name, email: data.email, phone: data.phone || "" });
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserProfile(form);
      alert("Profil mis à jour !");
    } catch {
      alert("Erreur lors de la mise à jour");
    }
  };

  if (!user) return <p>Chargement...</p>;

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-lg">
      <h2 className="text-xl font-bold mb-4">Mon profil</h2>
      <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 border mb-4" />
      <input name="email" value={form.email} onChange={handleChange} className="w-full p-2 border mb-4" />
      <input name="phone" value={form.phone} onChange={handleChange} className="w-full p-2 border mb-4" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Enregistrer</button>
    </form>
  );
};

export default ProfileForm;
