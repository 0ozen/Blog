import React, { Children, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import "./verpost.css";

export default function VerPost({ posts }) {
  const navigate = useNavigate();
  const title = useParams();
  
  const find = posts.find(post => {
    return (post.title == (title.name + " " + title.id));
  });
  console.log(posts);
  useEffect(() => {
    find ? null : navigate("/notfound");
  }, []);

 
  if (find) {
    return (
      <div className='verPost'>
        <h1> {find.title}</h1>
        <h3>cotenido del post {title.id}</h3>
        <p className='texto '>
          {find.text}
        </p>
        
      </div>
    );
  }
}
