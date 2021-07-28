import app from '../FirebaseApp';

function Profile() {
  function handleSignOut() {
    //sign out from the app
    app.auth().signOut();
  }

  return (
    <div className='profile'>
      <h1>Profile</h1>
      <button onClick={handleSignOut}> Log out </button>
    </div>
  );
}

export default Profile;