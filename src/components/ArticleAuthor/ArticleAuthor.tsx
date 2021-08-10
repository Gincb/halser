import { useEffect, useState } from "react"
import { firestore } from "../FirebaseApp"
import { LazyLoadImage } from "react-lazy-load-image-component"

export type Props = {
  userUid: string
}

function ArticleAuthor(props: Props) {
  const [author, setAuthor] = useState<any>()
  useEffect(() => {
    firestore
      .collection("users")
      .doc(props.userUid)
      .get()
      .then((data) => {
        setAuthor(data.data())
      })
  }, [props.userUid])

  return (
    <div className="article-author">
      <LazyLoadImage
        className="authors_card_img"
        alt={author?.username}
        src={author?.profileImage}
      />
      <h1>{`@` + author?.username}</h1>
    </div>
  )
}

export default ArticleAuthor
