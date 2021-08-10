import { useEffect, useState } from "react"
import { getCollection } from "../FirebaseApp"
import AuthorsCard from "../AuthorsCard/AuthorsCard"
import { Link } from "react-router-dom"
import Loader from "react-loader-spinner"

function AuthorsList() {
  const [authors, setAuthors] = useState<any>(null)

  useEffect(() => {
    getCollection("users", false).then((data) => {
      data && setAuthors(data.docs)
    })
  }, [])

  return (
    <section className="authors">
      {authors ? (
        authors.map((author: any) => {
          return (
            <Link
              key={Math.random() + author.data().username}
              to={{
                pathname: "/profile/" + author.id,
                state: { uid: author.id },
              }}
            >
              <AuthorsCard
                username={author.data().username}
                description={
                  author.data().description ? author.data().description : ""
                }
                image={author.data().profileImage}
              />
            </Link>
          )
        })
      ) : (
        <div className="loader">
          <Loader type="ThreeDots" color="#8DC9B4" height={100} width={100} />
        </div>
      )}
    </section>
  )
}

export default AuthorsList
