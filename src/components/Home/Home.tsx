import app from '../FirebaseApp';
import Nav from '../Nav/Nav';

function Home() {
  function handleSignOut() {
    //sign out from the app
    app.auth().signOut();
  }

  return (
    <div className='home'>
      <Nav/>
      <h1>Wassup</h1>
      <button onClick={handleSignOut}> Log out </button>
    </div>
  );
}

export default Home;