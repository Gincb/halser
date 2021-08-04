import { useEffect, useState } from 'react';
import { firestore } from '../FirebaseApp';

export type Props = {
  uid: string
}

function ArticleAuthor(props: Props) {
  const [author, setAuthor] = useState<any>();
  useEffect(() => {
    firestore.collection('users').doc(props.uid).get()
    .then(data => {
      data && setAuthor(data.data());
      console.log(data.data())
    });
  }, [setAuthor]);

  return (
    <div className='article-author'>
      <img
        className="authors_card_img"
        src={author?.profileImage}
        alt={author?.username}
      />
      <h1>{`@`+author?.username}</h1>
    </div>
  )
}

export default ArticleAuthor
