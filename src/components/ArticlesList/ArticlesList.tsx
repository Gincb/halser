import ArticleCard from "../ArticleCard/ArticleCard"
import Loader from "react-loader-spinner"

export type Props = {
  articles: any
  loading: any
  error: any
}

function ArticlesList(props: Props) {
  return props.loading ? (
    <div className="loader">
      <Loader type="ThreeDots" color="#8DC9B4" height={100} width={100} />
    </div>
  ) : (
    <section className="articles">
      {props.articles ? (
        props.articles.map((article: any) => {
          return (
            <ArticleCard
              key={Math.random() + " article"}
              userUid={article.data().userUid}
              content={article.data().content}
              title={article.data().title}
              image={article.data().media}
              createdAt={article.data().createdAt}
            />
          )
        })
      ) : (
        <div className="loader">
          <Loader type="ThreeDots" color="#8DC9B4" height={100} width={100} />
        </div>
      )}
      {props.error && <h3>Error, no content found</h3>}
    </section>
  )
}

export default ArticlesList
