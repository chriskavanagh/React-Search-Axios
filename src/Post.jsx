export default function Post({ post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>Post Id:&nbsp;{post.id}</p>
    </article>
  );
}
