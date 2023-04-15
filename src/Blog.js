import React from "react";
import "./blog.less";

function BlogPost(props) {
  const {
    title = "123",
    author = "12333",
    date = "2022-12",
    content = "123123123123",
  } = props;

  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <p className="metadata">
        Written by {author} on {date}
      </p>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

export default BlogPost;
