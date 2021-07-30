import AuthorsList from '../AuthorsList/AuthorsList';

function Home() {
  return (
    <div className='home'>
      <div className='home_authors'>
        <h1 className='home_authors_title'>Trending Authors</h1><div className='home_authors_line'></div>
        <AuthorsList/>
      </div>
    </div>
  );
}

export default Home;