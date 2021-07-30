function AuthorsCard() {
  return (
    <article className="authors_card">
      <div className="authors_card_person">
        <img
          className="authors_card_img"
          src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=615&q=80"
          alt="Name of the author"
        />
        <h3 className="authors_card_name">Name</h3>
      </div>
      <div className="authors_card_line"></div>
      <p className="authors_card_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus,
        corrupti molestias repellat eius consectetur facilis modi odio veniam
        nulla ut.
      </p>
    </article>
  )
}

export default AuthorsCard
