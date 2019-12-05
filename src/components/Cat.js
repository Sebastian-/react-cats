import React, { useState, useEffect } from "react";
import Axios from "axios";

function Cat(props) {
  const [cat, setCat] = useState({});
  const [meme, setMeme] = useState("");

  useEffect(() => {
    const id = props.match.params.id;

    async function fetchCat() {
      const url = `https://api.thecatapi.com/v1/images/${id}`;
      const response = await Axios.get(url);
      setCat(response.data);
    }

    fetchCat();
  }, [props]);

  function handleSetMeme(event) {
    setMeme(event.target.value);
  }

  function applyMeme() {}

  return (
    <div className="container">
      <h1>Cat</h1>
      <img src={cat.url} />
    </div>
  );
}

export default Cat;
