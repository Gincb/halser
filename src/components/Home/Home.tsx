import AuthorsList from '../AuthorsList/AuthorsList';
import ArticlesList from '../ArticlesList/ArticlesList';

function Home() {
  return (
    <div className='home'>
      <div className='home_authors'>
        <h1 className='home_authors_title'>Trending Authors</h1><div className='home_authors_line'></div>
        <AuthorsList/>
      </div>
      <div className='home_articles'>
        <h1 className='home_articles_title'>Recent Articles</h1><div className='home_articles_line'></div>
        <ArticlesList/>
      </div>
    </div>
  );
}

export default Home;