type Props = {
  name: string;
  uploadedAt: string;
};

export default function DocumentCard({ name, uploadedAt }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">Uploaded: {uploadedAt}</p>
      <button className="mt-3 px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
        Download
      </button>
    </div>
  );
}
