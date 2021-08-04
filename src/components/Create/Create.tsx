import ArticleAuthor from "../ArticleAuthor/ArticleAuthor";
import CreateArticle from "../CreateArticle/CreateArticle";

function Create() {
  return (
    <div className='create'>
      <ArticleAuthor/>
      <CreateArticle/>
    </div>
  );
}

export default Create;