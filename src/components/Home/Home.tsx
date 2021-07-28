import AuthorsList from '../AuthorsList/AuthorsList';

function Home() {
  return (
    <div className='home'>
      <div className='home_authors'>
        <h1>Trending Authors</h1>
        <AuthorsList/>
      </div>
    </div>
  );
}

export default Home;