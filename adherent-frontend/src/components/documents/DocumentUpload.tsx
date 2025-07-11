import React, { useState } from "react";
import { uploadDocument } from "../../services/documentService";

const DocumentUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Veuillez sélectionner un fichier");

    const formData = new FormData();
    formData.append("file", file);

    try {
      await uploadDocument(formData);
      alert("Fichier envoyé !");
      window.location.reload();
    } catch {
      alert("Erreur lors de l’envoi du fichier");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-bold mb-2">Ajouter un document</h2>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mb-4" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Upload
      </button>
    </form>
  );
};

export default DocumentUpload;
