import { useState } from "react"
import app from "../FirebaseApp"
import { uploadUserImage, updateUser } from "../FirebaseApp"
import Email from "../../assets/Email"
import Instagram from "../../assets/Instagram"
import Linkedin from "../../assets/Linkedin"
import Twitter from "../../assets/Twitter"
import Webpage from "../../assets/Webpage"
import View from "../../assets/View"
import { LazyLoadImage } from "react-lazy-load-image-component"

export type Props = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>
  profileInfo: {
    username: string
    email: string
    description?: string
    socials?: {
      twitter?: string
      instagram?: string
      linkedin?: string
      website?: string
    }
    profileImage: string
    createdAt: { seconds: number; nanoseconds: number }
  }
}

function ProfileCard(props: Props) {
  const [file, setFile] = useState<any>(undefined)
  const [preview, setPreview] = useState<any>()
  const [saving, setSaving] = useState<boolean | undefined>(undefined)

  function handleChange(e: any) {
    setFile(e.target.files[0])
    const reader = new FileReader()
    reader.onload = function (e) {
      setPreview(e.target.result)
    }

    reader.readAsDataURL(e.target.files[0])
  }

  async function handleImageUpload(e: any) {
    e.preventDefault()
    setSaving(true)

    if (file === undefined) {
      if (props.profileInfo.profileImage) {
        uploadUserImage(app.auth().currentUser, props.profileInfo.profileImage)
      }
    } else {
      const uploadTask = app.storage().ref(`/avatars/${file.name}`).put(file)
      uploadTask.on("state_changed", console.log, console.error, () => {
        app
          .storage()
          .ref("avatars")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setFile(null)
            uploadUserImage(app.auth().currentUser, url)
          })
      })
    }
  }

  async function handleUserUpload(e: any) {
    e.preventDefault()
    console.log(e.target.elements)

    try {
      await updateUser(app.auth().currentUser, {
        username: e.target.elements.username.value
          ? e.target.elements.username.value
          : props.profileInfo.username,
        socials: {
          twitter: e.target.elements.twitter.value
            ? e.target.elements.twitter.value
            : e.target.elements.twitter.value.length === 0
            ? "twitter.com/"
            : props.profileInfo.socials
            ? props.profileInfo.socials.twitter
            : "",
          instagram: e.target.elements.instagram.value
            ? e.target.elements.instagram.value
            : e.target.elements.twitter.value.length === 0
            ? "instagram.com/"
            : props.profileInfo.socials
            ? props.profileInfo.socials.instagram
            : "",
          linkedin: e.target.elements.linkedin.value
            ? e.target.elements.linkedin.value
            : e.target.elements.twitter.value.length === 0
            ? "linkedin.com/"
            : props.profileInfo.socials
            ? props.profileInfo.socials.linkedin
            : "",
          website: e.target.elements.webpage.value
            ? e.target.elements.webpage.value
            : e.target.elements.twitter.value.length === 0
            ? "/"
            : props.profileInfo.socials
            ? props.profileInfo.socials.website
            : "",
        },
        description: e.target.elements.description.value
          ? e.target.elements.description.value
          : props.profileInfo.description
          ? props.profileInfo.description
          : "",
      })
    } catch (err) {
      console.log(err)
    }
  }

  async function handleAllDataUpload(e: any) {
    handleImageUpload(e).then(() => {
      handleUserUpload(e)
    })
    setSaving(false)
  }

  function handleEditOnclick() {
    props.setEditMode(false)
  }

  return (
    <form
      className="profile-card profile-card-edit"
      onSubmit={handleAllDataUpload}
    >
      <div className="profile-card_author">
        <div className="profile-card_author_edit-image">
          <LazyLoadImage
            className="profile-card_author_edit-image_image"
            alt={props.profileInfo?.username}
            src={preview ? preview : props.profileInfo.profileImage}
          />
          <input type="file" onChange={handleChange} />
        </div>
        <input
          type="username"
          name="username"
          defaultValue={props.profileInfo?.username}
        />
        <button
          className="profile-card_author_edit-button"
          onClick={handleEditOnclick}
        >
          <View />
        </button>
      </div>
      <div className="profile-card_description">
        <textarea
          name="description"
          maxLength={150}
          defaultValue={
            props.profileInfo?.description ? props.profileInfo?.description : ""
          }
          placeholder="Say a few things about yourself here!"
        />
        <div className="profile-card_description_line"></div>
        <ul className="profile-card_description_socials">
          <li>
            <Email />
            <input
              type="email"
              name="email"
              defaultValue={props.profileInfo?.email}
              disabled
            />
          </li>
          <li>
            <Instagram />
            <input
              type="instagram"
              name="instagram"
              defaultValue={
                props.profileInfo?.socials
                  ? props.profileInfo?.socials.instagram
                  : ""
              }
            />
          </li>
          <li>
            <Twitter />
            <input
              type="twitter"
              name="twitter"
              defaultValue={
                props.profileInfo?.socials
                  ? props.profileInfo?.socials.twitter
                  : ""
              }
            />
          </li>
          <li>
            <Linkedin />
            <input
              type="linkedin"
              name="linkedin"
              defaultValue={
                props.profileInfo?.socials
                  ? props.profileInfo?.socials.linkedin
                  : ""
              }
            />
          </li>
          <li>
            <Webpage />
            <input
              type="webpage"
              name="webpage"
              defaultValue={
                props.profileInfo?.socials
                  ? props.profileInfo?.socials.website
                  : ""
              }
            />
          </li>
        </ul>
      </div>
      <button
        type="submit"
        className={
          saving === undefined
            ? "profile-card_submit"
            : saving === true
            ? "profile-card_saving"
            : "profile-card_saved"
        }
      >
        {saving === undefined
          ? "Save"
          : saving === true
          ? "Saving..."
          : "Saved!"}
      </button>
    </form>
  )
}

export default ProfileCard
