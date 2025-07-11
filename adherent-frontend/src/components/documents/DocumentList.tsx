import React, { useEffect, useState } from "react";
import { getDocuments } from "../../services/documentService";
import { DocumentData } from "../../types/document";

const DocumentList: React.FC = () => {
  const [documents, setDocuments] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocuments()
      .then(setDocuments)
      .catch(() => alert("Erreur lors du chargement"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement des documents...</p>;

  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div key={doc.id} className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">{doc.title}</h3>
          <p className="text-sm text-gray-600">
            Ajouté le : {doc.createdAt ? new Date(doc.createdAt).toLocaleDateString() : ""}
          </p>
          <a
            href={doc.filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Télécharger / Voir
          </a>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
