export type Author = {
  username: string
  image: string
  description: string
}

function AuthorsCard(props: Author) {
  return (
    <article className="authors_card">
      <div className="authors_card_person">
        <img
          className="authors_card_img"
          src={props.image}
          alt="Name of the author"
        />
        <h3 className="authors_card_name">{props.username}</h3>
      </div>
      <div className="authors_card_line"></div>
      <p className="authors_card_description">{props.description}</p>
    </article>
  )
}

export default AuthorsCard
