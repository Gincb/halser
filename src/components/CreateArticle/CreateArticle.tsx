import Button from "../Buttons/Button"
import ImageUpload from "../../assets/ImageUpload"

function CreateArticle() {
  return (
    <div className="create-article">
      <div className="create-article_image">
        <ImageUpload />
        <div className="create-article_image_button">
          Add an image
        </div>
        <input type="file" />
      </div>
      <input
        className="create-article_title"
        type="text"
        placeholder="This is your headline"
      />
      <textarea
        className="create-article_content"
        placeholder="This is your content"
      />
      <Button buttonText="Submit" />
    </div>
  )
}

export default CreateArticle
