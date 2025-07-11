import React from "react";
import DocumentUpload from "../components/documents/DocumentUpload";
import DocumentList from "../components/documents/DocumentList";

const Documents: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mes documents</h1>
      <DocumentUpload />
      <DocumentList />
    </div>
  );
};

export default Documents;
