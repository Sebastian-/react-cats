import React, { useState, useEffect } from "react";
import "./Home.css";
import Select from "react-select";
import Axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [categories, setCatagories] = useState([]);
  const [category, setCategory] = useState({});
  const [catResults, setCatResults] = useState([]);

  useEffect(() => {
    fetchCategories();
    console.log("fetching categories");
  }, []);

  async function fetchCategories() {
    const url = "https://api.thecatapi.com/v1/categories";
    try {
      const response = await Axios.get(url);
      const categories = response.data;
      const selectorOptions = categories.map(category => ({
        label: category.name,
        id: category.id
      }));
      setCatagories(selectorOptions);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSelectCategory(selected) {
    setCategory(selected);
    const url = `https://api.thecatapi.com/v1/images/search?category_ids=${selected.id}`;
    const response = await Axios.get(url);
    setCatResults(response.data);
  }

  return (
    <div className="container">
      <h1>Cat World</h1>

      <Select onChange={handleSelectCategory} options={categories} />
      <div>
        <h2>Search Results</h2>
        {catResults.map(cat => (
          <Link key={cat.id} to={`/cats/${cat.id}`}>
            <img key={cat.url} src={cat.url} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
