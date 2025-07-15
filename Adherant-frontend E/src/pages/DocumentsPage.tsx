import Navbar from '../components/Navbar';
import DocumentCard from '../components/DocumentCard';

export default function DocumentsPage() {
  const docs = [
    { name: 'Passport.pdf', uploadedAt: '2025-07-15' },
    { name: 'Contract.docx', uploadedAt: '2025-07-14' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Your Documents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {docs.map((doc, idx) => (
            <DocumentCard key={idx} name={doc.name} uploadedAt={doc.uploadedAt} />
          ))}
        </div>
      </main>
    </div>
  );
}
