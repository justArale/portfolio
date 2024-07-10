import React, { useState, useEffect } from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";
import RecipeBookHomepage from "../assets/screenshots/RecipeBook-Homepage.png";
import RecipeBookRecipe from "../assets/screenshots/RecipeBook-Recipe.png";

function RecipeBookPage() {
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [isTextLoaded, setIsTextLoaded] = useState(true);

  useEffect(() => {
    setIsImageLoaded(false);
    setIsTextLoaded(false);
  }, [isImageLoaded, isTextLoaded]);

  return (
    <div className="projectDetail">
      <Link to="/" className="noUnderline">
        <p className="bodyLink ">← All projects</p>
      </Link>
      <div className="intro">
        <div className="">
          <h1 className="title">Bento Book</h1>
        </div>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text short"></div>
          </>
        ) : (
          <p className="body">
            My very personal collection of favourite recipes.
          </p>
        )}
      </div>
      <div className="homepageContent">
        <p className="label">Scope</p>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </>
        ) : (
          <p className="body">
            2nd project during the course of Ironhack and first React
            application.
          </p>
        )}
      </div>
      <div className="imageWrapper">
        {isImageLoaded ? (
          <div className="skeleton"></div>
        ) : (
          <img src={RecipeBookHomepage} alt="RecipeBookHomepage" />
        )}
      </div>
      <div className="homepageContent">
        <p className="label">Technical this and that</p>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </>
        ) : (
          <p className="body">
            For the database, I used a JSON file that can be temporarily
            modified through local storage. This allows recipes to be updated,
            deleted, and new ones added. The design was implemented with vanilla
            CSS. Today, I would incorporate a global database and authentication
            so that changes persist and everyone can customize and use their own
            version. (saved on branch: version-one)<br></br>
            <br></br>Update: After completing the bootcamp, I updated the recipe
            book with the skills I acquired afterward. I first built a backend
            with all the necessary routes and adjusted the frontend accordingly.
            Now, there is authentication, a RESTful API, React Context,
            additional pages, of course, conditional rendering, and MongoDB
            Atlas as the remote database. Additionally, I renamed it to Bento
            Book and am currently working on the matching Bento Box CSS layout.
          </p>
        )}
      </div>
      <div className="imageWrapper">
        {isImageLoaded ? (
          <div className="skeleton"></div>
        ) : (
          <img src={RecipeBookRecipe} alt="RecipeBookRecipe" />
        )}
      </div>
      <div className="homepageContent">
        <p className="label">Conclusion</p>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </>
        ) : (
          <p className="body">
            As my first React project, it was full of challenges. Finding the
            appropriate syntax for the structure in the JSON file, assigning
            different background colors to various recipes on the dashboard, and
            rendering everything as desired made it the most personal project
            for me.
            <br></br>
            <br></br>Update: Since this is a very practical project that is very
            useful in everyday life, it is perfect for revisiting and further
            perfecting everything I learned afterward. I am far from finished
            and will surely enjoy working on it for a long time to come.
          </p>
        )}
      </div>
      <div className="homepageContent">
        <p className="label">Links</p>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </>
        ) : (
          <p className="body">
            →{" "}
            <a
              className="bodyLink"
              href="https://arale-recipe-book.netlify.app/"
              target="_blank"
            >
              Bento Book
            </a>
            <br />→{" "}
            <a
              className="bodyLink"
              target="_blank"
              href="https://github.com/justArale/recipe-book-app"
            >
              Bento Book Frontend
            </a>{" "}
            <span className="hint">(GitHub)</span>
            <br />→{" "}
            <a
              className="bodyLink"
              target="_blank"
              href="https://github.com/justArale/recipe-book-server"
            >
              Bento Book Backend
            </a>{" "}
            <span className="hint">(GitHub)</span>
            <br />→{" "}
            <a
              className="bodyLink"
              target="_blank"
              href="https://github.com/justArale/recipe-book-app/tree/version-one"
            >
              Version One - Recipe Book
            </a>{" "}
            <span className="hint">(GitHub)</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default RecipeBookPage;
