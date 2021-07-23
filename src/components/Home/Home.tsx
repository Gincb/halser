import app from '../FirebaseApp';

function Landing() {
  function handleSignOut() {
    //sign out from the app
    app.auth().signOut();
  }

  return (
    <div className='home'>
      <h1>Wassup</h1>
      <button onClick={handleSignOut}> Log out </button>
    </div>
  );
}

export default Landing;