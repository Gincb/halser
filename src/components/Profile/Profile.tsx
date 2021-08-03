import { useState } from "react"
import ProfileCard from "../ProfileCard/ProfileCard"
import EditProfileCard from "../EditProfileCard/EditProfileCard"

function Profile() {
  const [editMode, setEditMode] = useState<boolean>(false)

  return (
    <div className="profile">
      {editMode ? (
        <EditProfileCard />
      ) : (
        <ProfileCard setEditMode={setEditMode} />
      )}
    </div>
  )
}

export default Profile
