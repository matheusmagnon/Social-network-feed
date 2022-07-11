import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

interface CommentsProps{
  content: string;
  OnDeleteComment: (comment: string) => void;
}

export function Comment({ content, OnDeleteComment }: CommentsProps) {
  const [likeCunt, setLikeCunt] = useState(0);

  function handleDeleteComment() {
    OnDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCunt((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/magon0.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Magno</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment} type="submit">
            <ThumbsUp />
            Aplaudir <span>{likeCunt}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
