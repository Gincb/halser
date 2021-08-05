import { useCollectionData } from 'react-firebase-hooks/firestore';
import app from '../FirebaseApp';
import ArticleCard from '../ArticleCard/ArticleCard';

export type Props = {
  userId: number;
};

function ProfileArticleList(props: Props) {
  const articleCollection = app.firestore().collection('articles');

  const dbQuery = articleCollection.where('userUid', '==', props.userId);

  const [articles] = useCollectionData(dbQuery, { idField: 'id' });

  return (
    <div className='profile-posts'>
      <h2 className='profile-posts_header'>{articles?.length + ' Posts'}</h2>
      <div className='profile-posts_list'>
        {articles && articles.length !== 0 ? (
            articles.map((article: any) => {
              return (
                <ArticleCard
                  key={Math.random() + " article"}
                  userUid={article.userUid}
                  content={article.content}
                  title={article.title}
                  image={article.media}
                  createdAt={article.createdAt}
                />
              )
            })
          ) : (
            <h1>Currently empty</h1>
          )}
      </div>
    </div>
  );
}

export default ProfileArticleList;
