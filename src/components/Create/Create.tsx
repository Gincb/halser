import app from '../FirebaseApp';
import ArticleAuthor from "../ArticleAuthor/ArticleAuthor";
import CreateArticle from "../CreateArticle/CreateArticle";

function Create() {
  const { currentUser } = app.auth();
  return (
    <div className='create'>
      <ArticleAuthor userUid={currentUser.uid}/>
      <CreateArticle/>
    </div>
  );
}

export default Create;