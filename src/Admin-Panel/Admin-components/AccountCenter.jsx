import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import "../styles/admin-account.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AccountCenter = () => {
  const { user, updateProfileImage, changePassword, logout } = useAuth();
  const [profileImageFile, setProfileImageFile] = useState("");
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const navigate = useNavigate();

  const handleProfileImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImageFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setIsUpdatingProfile(true);

    try {
      if (profileImageFile) {
        await updateProfileImage(profileImageFile);
        toast.success("Profile updated successfully!");
        setProfileImageFile("");
      }
    } catch (error) {
      toast.error("Error updating profile. Please try again.");
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.warning("New passwords do not match.");
      return;
    }

    if (passwordData.currentPassword === passwordData.newPassword) {
      toast.warning("Current and new password must be different.");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast.warning("New password must be at least 6 characters long.");
      return;
    }

    setIsChangingPassword(true);

    try {
      const success = await changePassword(
        passwordData.currentPassword,
        passwordData.newPassword
      );
      if (success) {
        toast.success("Password changed successfully. Logging out...");
        setTimeout(() => {
          logout();
          navigate("/admin/login"); // Redirect to login page
        }, 2000);
      } else {
        toast.error("Current password is incorrect.");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setIsChangingPassword(false);
    }
  };

  return (
    <>
      <div className="admin-account">
        {/* Header */}
        <div className="admin-account-header">
          <h1 className="admin-account-title">Account Center</h1>
          <p className="admin-account-subtitle">
            Profile Image and Password settings
          </p>
        </div>

        <div className="admin-account-sections">
          {/* Profile Section */}
          <div className="admin-account-section">
            <div className="admin-section-header">
              <h2 className="admin-section-title">Profile Information</h2>
            </div>

            <form onSubmit={handleProfileUpdate} className="admin-profile-form">
              <div className="admin-profile-image-section">
                <div className="admin-current-avatar">
                  <img
                    src={
                      profileImageFile ||
                      user?.profileImage
                    }
                    alt="Profile"
                    className="admin-profile-avatar"
                  />
                </div>

                <div className="admin-profile-upload">
                  <label htmlFor="profile-image" className="admin-form-label">
                    Update Profile Image
                  </label>
                  <input
                    type="file"
                    id="profile-image"
                    className="admin-form-file"
                    accept="image/*"
                    onChange={handleProfileImageUpload}
                  />
                  <p className="admin-form-help">
                    Upload a new profile image (JPG, PNG)
                  </p>
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Email Address</label>
                <input
                  
                  type="email"
                  className="admin-form-input"
                  value={user?.email || ""}
                  disabled
                />
                <p className="admin-form-help">Email cannot be changed</p>
              </div>

              <div className="admin-form-actions">
                <button
                  type="submit"
                  className="admin-button-primary"
                  disabled={isUpdatingProfile || !profileImageFile}
                >
                  {isUpdatingProfile ? "Updating..." : "Update Profile"}
                </button>
              </div>
            </form>
          </div>

          {/* Password Section */}
          <div className="admin-account-section">
            <div className="admin-section-header">
              <h2 className="admin-section-title">Change Password</h2>
            </div>

            <form
              onSubmit={handlePasswordChange}
              className="admin-password-form"
            >
              <div className="admin-form-group">
                <label htmlFor="current-password" className="admin-form-label">
                  Current Password *
                </label>
                <input
                  type="password"
                  id="current-password"
                  className="admin-form-input"
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      currentPassword: e.target.value,
                    }))
                  }
                  required
                  placeholder="Enter current password"
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="new-password" className="admin-form-label">
                  New Password *
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="admin-form-input"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      newPassword: e.target.value,
                    }))
                  }
                  required
                  placeholder="Enter new password"
                  minLength={6}
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="confirm-password" className="admin-form-label">
                  Confirm New Password *
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="admin-form-input"
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                  required
                  placeholder="Confirm new password"
                  minLength={6}
                />
              </div>

              <div className="admin-form-actions">
                <button
                  type="submit"
                  className="admin-button-primary"
                  disabled={isChangingPassword}
                >
                  {isChangingPassword ? "Changing..." : "Change Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCenter;
