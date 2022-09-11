import React from "react";
import database from "../Resources/data.json";
import "../Styles/Contents.css";
import Navbar from "./Navbar";
import Post from "./Post";

const Contents = () => {
  console.log(database.posts_by_date["2021-06-17"]);
  return (
    <section className="contents">
      <Navbar />

      <div className="row m-3">
        {Object.keys(database.posts_by_date).map((date) => (
          <>
            <p className="lead text-secondary mt-5">{date}</p>
            {database.posts_by_date[date].map((post) => (
              <Post post={post} />
            ))}
          </>
        ))}
      </div>
    </section>
  );
};

export default Contents;
