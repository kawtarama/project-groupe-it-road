import Navbar from '../components/Navbar';
import ProfileForm from '../components/ProfileForm';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-xl mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Edit Your Profile</h2>
          <ProfileForm />
        </div>
      </main>
    </div>
  );
}
