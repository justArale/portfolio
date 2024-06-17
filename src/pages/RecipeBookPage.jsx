import React from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";
import RecipeBookHomepage from "../assets/screenshots/RecipeBook-Homepage.png";
import RecipeBookRecipe from "../assets/screenshots/RecipeBook-Recipe.png";

function RecipeBookPage() {
  return (
    <div className="projectDetail">
      <Link to="/" className="noUnderline">
        <p className="bodyLink ">← All projects</p>
      </Link>
      <div className="intro">
        <div className="">
          <h1 className="title">Recipe Book</h1>
        </div>
        <p className="body">
          My very personal collection of favourite recipes.
        </p>
      </div>
      <div className="homepageContent">
        <p className="label">Scope</p>
        <p className="body">
          2nd project during the course of Ironhack and first React application.
        </p>
      </div>
      <div className="imageWrapper">
        <img src={RecipeBookHomepage} alt="RecipeBookHomepage" />
      </div>
      <div className="homepageContent">
        <p className="label">Technical this and that</p>
        <p className="body">
          For the database, I used a JSON file that can be temporarily modified
          through local storage. This allows recipes to be updated, deleted, and
          new ones added. The design was implemented with vanilla CSS. Today, I
          would incorporate a global database and authentication so that changes
          persist and everyone can customize and use their own version.
        </p>
      </div>
      <div className="imageWrapper">
        <img src={RecipeBookRecipe} alt="RecipeBookRecipe" />
      </div>
      <div className="homepageContent">
        <p className="label">Conclusion</p>
        <p className="body">
          As my first React project, it was full of challenges. Finding the
          appropriate syntax for the structure in the JSON file, assigning
          different background colors to various recipes on the dashboard, and
          rendering everything as desired made it the most personal project for
          me.
        </p>
      </div>
      <div className="homepageContent">
        <p className="label">Links</p>
        <p className="body">
          →{" "}
          <a
            className="bodyLink"
            href="https://arales-recipe-book.netlify.app/"
            target="_blank"
          >
            Recipe Book
          </a>
          <br />→{" "}
          <a
            className="bodyLink"
            target="_blank"
            href="https://github.com/justArale/recipe-book-app"
          >
            Recipe Book Frontend
          </a>{" "}
          <span className="hint">(GitHub)</span>
          <br />→ <span className="hint">(No Backend)</span>
        </p>
      </div>
    </div>
  );
}

export default RecipeBookPage;
