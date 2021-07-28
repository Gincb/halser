import app from '../FirebaseApp';

function Create() {
  function handleSignOut() {
    //sign out from the app
    app.auth().signOut();
  }

  return (
    <div className='create'>
      <h1>Create</h1>
      <button onClick={handleSignOut}> Log out </button>
    </div>
  );
}

export default Create;