import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = "563492ad6f91700001000001cf3152f530ad42e69b00b52652638f1e"
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse); 
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordSubmit(event) {
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <form onSubmit={handleSearch}>
          <input type="text" onChange={handleKeywordSubmit} />
          <input type="submit" value="search" className="search-button" />
        </form>
        <Results results={results} />
        <section className="photos-end">
          <Photos photos={photos} />
        </section>
        
      </div>
    );
  } else {
    load();
    return "Loading";
  }

}
