import { useState, useEffect, useContext } from "react"
import { AuthContext } from '../../Auth';
import app from '../FirebaseApp'
import {getUserDoc} from '../FirebaseApp'
import ProfileCard from "../ProfileCard/ProfileCard"
import EditProfileCard from "../EditProfileCard/EditProfileCard"
import ProfileArticleList from "../ProfileArticleList/ProfileArticleList"

function Profile() {
  const { currentUser } = useContext(AuthContext);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [profileInformation, setProfileInformation] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getUserDoc(app.auth().currentUser).then(data => {
      setProfileInformation(data);
      setLoading(false);
    });
  }, []);
  console.log(currentUser.uid)
  return (
    <div className="profile">
      {loading ? 'loading...' :
      (editMode ? (
        <EditProfileCard setEditMode={setEditMode} profileInfo={profileInformation}/>
      ) : (
        <>
        <ProfileCard setEditMode={setEditMode}  profileInfo={profileInformation} setProfileInformation={setProfileInformation}/>
        <ProfileArticleList userId={currentUser.uid}/>
        </>
      ))}
    </div>
  )
}

export default Profile
