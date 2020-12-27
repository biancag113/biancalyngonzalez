import React from 'react';
import './Blog.css';

const Blog = props => {
  return (
    <div id='blog'>
      <h3>My Random Rants</h3>
      <p>December 29, 2020 <a href=""> The rise of conveners in healthcare</a></p>
      <p>December 28, 2020 <a href=""> A computer vision method to 'hallucinate' occluded features</a></p>
      <p>December 26, 2020 <a href=""> What if GANs was one of us?: Using human neurons to model GANs</a></p>
      <p>November 20, 2020 <a href="https://www.himss.org/resources/nurse-entrepreneurs-and-how-make-innovative-idea-reality"> Frontline Entrepreneurs</a></p>
    </div>
  );
};

export default Blog;