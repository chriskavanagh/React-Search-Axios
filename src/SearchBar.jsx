import { FaSistrix } from "react-icons/fa";

export default function SearchBar({ posts, setSearchResults }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    if (!e.target.value) return setSearchResults(posts);
    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );
    setSearchResults(resultsArray);
  };

  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          id="search"
          onChange={handleSearchChange}
        />
        <button className="search__button">
          <FaSistrix />
        </button>
      </form>
    </header>
  );
}
