import React, { useState, useEffect } from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";
import BentoBookLandingpage from "../assets/screenshots/BentoBook-Landingpage.webp";
import BentoBookDetailpage from "../assets/screenshots/BentoBook-Detailpage.webp";

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
            The Bento Book project is a single-page application designed to
            allow users to create and manage their favorite recipes. Bento Book
            stands as a highly practical and useful project for everyday life,
            with continuous development planned. The project's scope includes
            building a login system and functionality to ensure recipe
            management is restricted to authorized users.
          </p>
        )}
      </div>
      <div className="imageWrapper">
        {isImageLoaded ? (
          <div className="skeleton"></div>
        ) : (
          <img src={BentoBookLandingpage} alt="Landingpage of the bento book" />
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
            The system architecture of Bento Book features a recipe overview
            displayed in a masonry layout, with detailed views styled in a bento
            box design.
            <br /> <br />
            Technologies used backend: Express.js, JavaScript, Cors, JWT,
            bcrypt, RESTful APIs via Mongoose to MongoDB Atlas, Cloudinary
            <br /> <br />
            Technologies used frontend: Vite, JavaScript, React, Axios, React
            Router, React Context, MongoDB Atlas, Cloudinary
          </p>
        )}
      </div>
      <div className="imageWrapper">
        {isImageLoaded ? (
          <div className="skeleton"></div>
        ) : (
          <img
            src={BentoBookDetailpage}
            alt="Recipe page of Taiyaki from the bento book"
          />
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
          <div>
            <p className="body">
              During the bootcamp, the project started with a JSON file
              containing fixed recipes and local storage for temporary editing,
              creating, and deleting. Post-bootcamp, a backend was built and a
              remote database was implemented, elevating the project's
              functionality and at the same time the name has been changed from
              recipe book to bento book.{" "}
            </p>
            <p className="body">
              Future Plans: Upcoming enhancements include displaying the recipe
              overview in a true masonry layout, implementing a search bar, and
              adding detailed attributes such as effort, preparation, and
              cooking time for each recipe. These features will significantly
              enhance the user experience, making the application more robust
              and user-friendly.
            </p>
          </div>
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
              href="https://bento-book.arale.space"
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
