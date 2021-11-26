import React from "react"
import { ReactComponent as Enviar } from "../../Assets/enviar.svg"
import useFetch from "../../Hooks/useFetch"
import Error from "../Helper/Error"
import { COMMENT_POST } from "../../Api"
import styles from "./PhotoCommentsForm.module.css"

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState("")
  const { request, error } = useFetch()

  async function handleSubmit(e) {
    e.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { res, json } = await request(url, options)
    if (res.ok) {
      setComment("")
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='Comente...'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm
