import { useEffect, useState } from 'react';
import { firestore } from '../FirebaseApp';

export type Props = {
  userUid: string
}

function ArticleAuthor(props: Props) {
  const [author, setAuthor] = useState<any>();
  useEffect(() => {
    firestore.collection('users').doc(props.userUid).get()
    .then(data => {
      setAuthor(data.data());
    });
  }, [props.userUid]);

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
