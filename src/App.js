import "./styles.css";
import { getPosts } from "./api/axios-search";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ListPage from "./ListPage";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  //console.log(JSON.parse(JSON.stringify(searchResults)));
  console.log(searchResults);

  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);
  return (
    <div className="App">
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </div>
  );
}
