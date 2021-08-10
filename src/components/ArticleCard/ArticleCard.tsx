import { useState, useEffect } from "react"
import * as firebase from "firebase"
import Button from "../Buttons/Button"
import ArticleAuthor from "../ArticleAuthor/ArticleAuthor"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

export type Article = {
  userUid: string
  content: string
  title: string
  image: string
  createdAt: { seconds: number; nanoseconds: number }
}

function ArticleCard(props: Article) {
  const [clampedText, setClampedText] = useState<string>(
    "article_card_unclamped"
  )
  const [buttonClose, setButtonClose] = useState<boolean>(false)
  const [articleTime, setArticleTime] = useState<string>("")

  useEffect(() => {
    const Timestamp = firebase.default.firestore.Timestamp
    const getDate = new Timestamp(
      props.createdAt.seconds,
      props.createdAt.nanoseconds
    ).toDate()
    const [, month, date, year] = getDate.toString().split(" ")
    const time = ` ${year} ${month}, ${date}`
    setArticleTime(time)
  }, [props.createdAt.seconds, props.createdAt.nanoseconds])

  function handleRead() {
    if (props.content.length <= 1500) {
      setClampedText("article_card_min-clamped")
    } else {
      setClampedText("article_card_clamped")
    }
    setButtonClose(true)
  }

  function handleClose() {
    setClampedText("article_card_unclamped")
    setButtonClose(false)
  }

  return (
    <article className="article_card">
      <div>
        <Link
          to={{
            pathname: "/profile/" + props.userUid,
            state: { uid: props.userUid },
          }}
        >
          <ArticleAuthor userUid={props.userUid} />
        </Link>
      </div>
      <div className={`article_card_contents ${clampedText}`}>
        <LazyLoadImage alt={props.title} src={props.image} />
        <div className={`article_card_contents_text ${clampedText}_text`}>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <span>{articleTime}</span>
          {!buttonClose ? (
            <Button buttonText="Read more" onClick={handleRead} />
          ) : (
            <Button
              buttonText="X"
              buttonClass="button-close"
              onClick={handleClose}
            />
          )}
        </div>
      </div>
    </article>
  )
}

export default ArticleCard
