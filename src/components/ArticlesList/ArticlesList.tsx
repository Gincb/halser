import ArticleCard from "../ArticleCard/ArticleCard"

export type Props = {
  articles: any
  loading: any
  error: any
}

function ArticlesList(props: Props) {
  return (
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
        <h1>loading</h1>
      )}
      {props.error && <h3>Error, no content found</h3>}
    </section>
  )
}

export default ArticlesList
