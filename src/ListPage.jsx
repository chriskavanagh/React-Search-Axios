import Post from "./Post";

export default function ListPage({ searchResults }) {
  const results = searchResults.map((post) => (
    <Post key={post.id} post={post} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Posts</p>
    </article>
  );

  return <main>{content}</main>;
}
