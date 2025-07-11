import React from "react";

interface Props {
  url: string;
}

const DocumentViewer: React.FC<Props> = ({ url }) => {
  return (
    <div className="w-full h-[80vh] mt-4">
      <iframe src={url} className="w-full h-full border rounded" title="Document Viewer" />
    </div>
  );
};

export default DocumentViewer;
