import Navbar from '../components/Navbar';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-2 text-blue-700">Welcome 👋</h1>
          <p className="text-gray-600 text-lg">
            This is your personal dashboard. Use the menu to navigate to your documents or update your profile.
          </p>
        </div>
      </main>
    </div>
  );
}
