import React from 'react';
import './app.less';

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>我的个人博客</h1>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main className="main">
        <section className="hero">
          <h2>Welcome to my blog!</h2>
          <p>Here you'll find my thoughts on various topics, from technology to culture and beyond.</p>
          <button className="btn">Get Started</button>
        </section>
        <section className="featured-posts">
          <h3>Featured Posts</h3>
          <ul>
            <li>
              <a href="/blog/post-1">Post 1</a>
            </li>
            <li>
              <a href="/blog/post-2">Post 2</a>
            </li>
            <li>
              <a href="/blog/post-3">Post 3</a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>Copyright © 2023 
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
