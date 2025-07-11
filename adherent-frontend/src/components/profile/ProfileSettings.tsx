import React, { useState } from "react";

const ProfileSettings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="bg-white p-6 rounded shadow max-w-lg mt-6">
      <h2 className="text-lg font-bold mb-4">Paramètres</h2>
      <label className="flex items-center space-x-2">
        <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
        <span>Recevoir des notifications</span>
      </label>
    </div>
  );
};

export default ProfileSettings;
