import './not.css';
import error from './icon.png';

export function Not() {
  return (
    <div className='not-cont'>
      <img src={error} loading="lazy" alt="error 404" className='error'/>
      <h1 className="not">
        not found
      </h1>
    </div>
  );
}


