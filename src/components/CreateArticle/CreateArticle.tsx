import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import app from '../FirebaseApp';
import { createArticle } from '../FirebaseApp';
import { AuthContext } from '../../Auth';
import Button from "../Buttons/Button"
import ImageUpload from "../../assets/ImageUpload"

function CreateArticle() {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState<any>(undefined);
  const history = useHistory();

  function handleChange(e: any) {
    setFile(e.target.files[0]);
  }

  async function handleUpload(e: any) {
    e.preventDefault();

    if (file !== undefined) {
      const uploadTask = app.storage().ref(`/images/${file.name}`).put(file);
      await uploadTask.on('state_changed', console.log, console.error, () => {
        app
          .storage()
          .ref('images')
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            setFile(undefined);
            handlePostUpload(e, url);
          });
      });
    } else {
      handlePostUpload(e, '');
    }
  }

  async function handlePostUpload(e: any, url: string) {
    const { content, title } = e.target.elements;

    if (content.value && title.value) {
      localStorage.setItem('nav', 'home')
      try {
        await createArticle(app.auth().currentUser, {
          media: url,
          title: title.value,
          content: content.value,
        }).then(() => {
          content.value = '';
          history.push('/');
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <form className="create-article" onSubmit={handleUpload}>
      <div className="create-article_image">
        <ImageUpload />
        <div className="create-article_image_button">
          Add an image
        </div>
        <input type="file" required name='media' onChange={handleChange}/>
      </div>
      <input
        className="create-article_title"
        type="text"
        name='title'
        required
        placeholder="This is your headline"
      />
      <textarea
        name='content'
        className="create-article_content"
        required
        placeholder="This is your content"
      />
      <Button buttonText="Submit" />
    </form>
  )
}

export default CreateArticle
