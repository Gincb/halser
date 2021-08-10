import { useEffect, useState } from 'react';
import { getCollection } from "../FirebaseApp"
import firebase from 'firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import AuthorsList from '../AuthorsList/AuthorsList';
import ArticlesList from '../ArticlesList/ArticlesList';

function Home() {
  const [articles, setArticles] = useState<any>(null);
  const [snapshots, loading, error] = useCollection(
    firebase.firestore().collection('articles').orderBy('createdAt', 'desc')
  );

  useEffect(() => {
    getCollection("articles", true).then((data) => {
      data && setArticles(data.docs)
    })
    // @ts-ignore
    snapshots && setArticles(snapshots.docs);
  }, []);

  return (
    loading ? <h1>Loading</h1> :
    <div className='home'>
      <div className='home_authors'>
        <h1 className='home_authors_title'>Discover Authors</h1><div className='home_authors_line'></div>
        <AuthorsList/>
      </div>
      <div className='home_articles'>
        <h1 className='home_articles_title'>Recent Articles</h1><div className='home_articles_line'></div>
        <ArticlesList articles={articles} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default Home;