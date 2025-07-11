const Profile = require('../models/Profile');

exports.getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ where: { userId: req.user.id } });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMyProfile = async (req, res) => {
  try {
    const updated = await Profile.update(req.body, {
      where: { userId: req.user.id },
    });
    res.json({ message: 'Profile updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
