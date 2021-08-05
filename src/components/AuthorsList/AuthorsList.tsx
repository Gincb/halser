import { useEffect, useState } from "react"
import { getCollection } from "../FirebaseApp"
import AuthorsCard from "../AuthorsCard/AuthorsCard"
import { Link } from "react-router-dom"

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
          console.log(author.id)
          return (
            <Link
              to={{
                pathname: "/profile/" + author.id,
                state: { uid: author.id },
              }}
            >
              <AuthorsCard
                key={Math.random() + " author"}
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
        <h1>loading</h1>
      )}
    </section>
  )
}

export default AuthorsList
