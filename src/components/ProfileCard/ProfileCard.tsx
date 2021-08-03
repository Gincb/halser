import Email from "../../assets/Email"
import Instagram from "../../assets/Instagram"
import Linkedin from "../../assets/Linkedin"
import Twitter from "../../assets/Twitter"
import Webpage from "../../assets/Webpage"
import EditProfile from "../../assets/EditProfile"

export type Props = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}


function ProfileCard(props: Props) {

function handleEditOnclick() {
  props.setEditMode(true);
  console.log('true')
}

  return (
    <section className="profile-card">
      <article className="profile-card_author">
        <img
          src="https://images.unsplash.com/photo-1514813482567-2858e6c00ee1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Name of the author"
        />
        <h1>@name</h1>
        <button className="profile-card_author_edit" onClick={()=>handleEditOnclick()}>
          <EditProfile/>
        </button>
      </article>
      <article className="profile-card_description">
        <p>
          A blog writer with a focus on lifestyle! I am interested in anything
          related to fashion and travel, and I try to incorporate these aspects
          in my articles.
        </p>
        <div className="profile-card_description_line"></div>
        <ul className="profile-card_description_socials">
          <li>
            <Email />
            <span>shomalin@email.com</span>
          </li>
          <li>
            <Instagram />
            <span>instagram.com/shomalin</span>
          </li>
          <li>
            <Twitter />
            <span>twitter.com/shomalin</span>
          </li>
          <li>
            <Linkedin />
            <span>linkedin.com/in/shomalin</span>
          </li>
          <li>
            <Webpage />
            <span>shomalin.com</span>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default ProfileCard
