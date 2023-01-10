import React, { useState, createContext, useEffect, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Contact } from './github/contact';

const Reps = React.lazy(() => import('./githubRep/reps'));

import { Navbar } from './navbar/Navbar';
import Post from './post/Post';

import { Not } from './notfound/not';
import VerPost from './verPost/VerPost';
import Search from './search/Search';
import Tags from './tags/tags';

import { posts } from './Data/Posts'; './Data/Posts';

export const mode = createContext();

function App() {
  const [pos, setPos] = useState(3);
  const [state, setState] = useState(
    JSON.parse(window.localStorage.getItem("theme")) || false
  );

  const [finNext, setFinNext] = useState(true);
  const [finPrev, setFinPrev] = useState(true);

  const theme = () => {
    window.localStorage.setItem("theme", !state);
    setState(!state);
  };

  useEffect(() => {
    if (pos === 3) {
      setFinPrev(false);
    } else {
      setFinPrev(true);
    }
    if (pos === 6) {
      setFinNext(false);
    } else {
      setFinNext(true);
    }
  }, [pos]);

  const prev = () => {
    if (pos > 3) {
      setPos((prev) => prev - 3);
    }
  };
  const next = () => {
    if (pos < 6) {
      setPos((prev) => prev + 3);
    }
  };

  function Nav() {
    return (
      <>
        <h1 className='posts-titulo'>Últimos Posts</h1>
        <div className='main'>
          <div className='posts'>
            {posts.map((item, id) => {
              if (id < pos && id > pos - 4) {
                return (
                  <Post key={id} id={id} title={item.title}>
                    <h2>
                      {item.title}
                    </h2>
                    <p className='home-post'>{item.resume}</p>
                  </Post>
                );
              }
            })
            }
            <div className='button'>
              <button onClick={prev} className={finPrev ? null : "fin"}>  anterior</button>
              <button onClick={next} className={finNext ? null : "fin"}>siguiente </button>
            </div>
          </div>
          <Tags />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Reps />
        </Suspense>

      </>
    );
  }

  return (
    <mode.Provider value={state} >
      <div className={state ? "App day" : "App night"} >
        <div className='cont'>
          <Navbar setState={theme} />
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/:name-:id" element={<VerPost posts={posts} />} />
            <Route path="/proyectos/:name" />
            <Route path="/search:name" element={<Search />} />
            <Route path="*" element={<Not />} />
          </Routes>
          <div className="center">
            <Contact ></Contact>
          </div>
        </div>
      </div>
    </mode.Provider>
  );
}

export default App;
