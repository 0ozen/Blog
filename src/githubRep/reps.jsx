import React,{Suspense} from 'react';
const Section = React.lazy(() => import('../section/section'));

import img2 from './tarea1/2.png';
import img4 from './tarea2/api1.png';
import web from './miniaturaa.png';

import "./reps.css";

const imgs = [
  img2,
];
const imgs2 = [
  img4,
];

export default function Reps() {
  return (
    <div className='github-cont'>
      <div className='projects'>
        <h1>Proyectos mas recientes</h1>
        <section >
          <article>
            <h3>App de tareas con React y Mysql</h3>
            <a className='ver' target='_blank' rel='noreferrer'
              href='https://github.com/0ozen/App-de-tareas'>
              <img src={img2} loading="lazy"
                alt="imagen del proyecto en github"
                width={"300px"}
              />
            </a>
          </article>
          <article>
            <h3>Buscador de personajes, usando la api de Rick and Morty</h3>
            <a className='ver' rel='noreferrer' target='_blank'
              href='https://github.com/0ozen/Rick-and-morty-api-search'>
              <img src={img4} loading="lazy"
                alt="imagen del proyecto en github"
                width={"300px"}
              />
            </a>
          </article>
          <article>
            <h3>Portafolio (subido en netlify)</h3>
            <a className='ver' target='_blank' rel='noreferrer'
              href='https://myportfolio003.netlify.app/'>
              <img src={web} loading="lazy"
                alt="imagen del proyecto en github"
                width={"300px"}
              />
            </a>
          </article>
        </section>
      </div>
      <div className='new-section-posts'>
        <h2>New section</h2>
        <Suspense fallback={
          <div>Loading...</div>}
        >
          <Section />
          <Section />
          <Section />
        </Suspense>

      </div>
    </div>
  );
}
