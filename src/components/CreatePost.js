import React from "react";
import { PostContext } from "../App";

function CreatePost({ user, handleAddPost }) {
  const { dispatch } = React.useContext(PostContext);
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);
  const imageInputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const post = { content, image, user, id: Date.now() };
    // handleAddPost(post);
    dispatch({ type: "ADD_POST", payload: { post } });
    setContent("");
    setImage(null);
    imageInputRef.current.value = ";";
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new post"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
