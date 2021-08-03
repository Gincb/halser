import Email from "../../assets/Email"
import Instagram from "../../assets/Instagram"
import Linkedin from "../../assets/Linkedin"
import Twitter from "../../assets/Twitter"
import Webpage from "../../assets/Webpage"
import Save from "../../assets/Save"

export type Props = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

function ProfileCard(props: Props) {
  function handleEditOnclick() {
    props.setEditMode(false)
    console.log("false")
  }

  return (
    <section className="profile-card">
      <article className="profile-card_author">
        <div className="profile-card_author_edit-image">
          <img
            className="profile-card_author_edit-image_image"
            src="https://images.unsplash.com/photo-1514813482567-2858e6c00ee1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Name of the author"
          />
          <input type="file" />
        </div>
        <input type="text" placeholder="@name" />
        <button
          className="profile-card_author_edit-button"
          onClick={() => handleEditOnclick()}
        >
          <Save />
        </button>
      </article>
      <article className="profile-card_description">
        <textarea
          placeholder="A blog writer with a focus on lifestyle! I am interested in anything related to fashion and travel, and I try to incorporate these aspects in my articles."
        />
        <div className="profile-card_description_line"></div>
        <ul className="profile-card_description_socials">
          <li>
            <Email />
            <input type="email" placeholder="shomalin@email.com" />
          </li>
          <li>
            <Instagram />
            <input type="text" placeholder="instagram.com/shomalin" />
          </li>
          <li>
            <Twitter />
            <input type="text" placeholder="twitter.com/shomalin" />
          </li>
          <li>
            <Linkedin />
            <input type="text" placeholder="linkedin.com/in/shomalin" />
          </li>
          <li>
            <Webpage />
            <input type="text" placeholder="shomalin.com" />
          </li>
        </ul>
      </article>
    </section>
  )
}

export default ProfileCard
