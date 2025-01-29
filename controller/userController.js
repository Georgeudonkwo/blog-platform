import User from '../models/user.js';

 const viewProfile = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId)
      .select('-password') // Exclude the password field
      .populate('followers', 'username') // Populate followers with usernames
      .populate('following', 'username'); // Populate following with usernames

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
 const updateProfile = async (req, res) => {
    const { userId } = req.params;
    const { username, email } = req.body;
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if the user is updating their own profile
      if (user._id.toString() !== req.user.id) {
        return res.status(403).json({ message: 'You are not authorized to update this profile' });
      }
  
      // Update the profile fields
      user.username = username || user.username;
      user.email = email || user.email;
  
      await user.save();
  
      res.status(200).json({ message: 'Profile updated successfully', user });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };
   const followUser = async (req, res) => {
    const { userId } = req.params; // ID of the user to follow/unfollow
    const currentUserId = req.user.id; // ID of the logged-in user
  
    try {
      const userToFollow = await User.findById(userId);
      const currentUser = await User.findById(currentUserId);
  
      if (!userToFollow || !currentUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if the current user is already following the target user
      const isFollowing = currentUser.following.includes(userId);
  
      if (isFollowing) {
        // Unfollow the user
        currentUser.following.pull(userId);
        userToFollow.followers.pull(currentUserId);
      } else {
        // Follow the user
        currentUser.following.push(userId);
        userToFollow.followers.push(currentUserId);
      }
  
      await currentUser.save();
      await userToFollow.save();
  
      res.status(200).json({
        message: isFollowing ? 'Unfollowed successfully' : 'Followed successfully',
        currentUser,
        userToFollow,
      });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };
  export {viewProfile,updateProfile,followUser};