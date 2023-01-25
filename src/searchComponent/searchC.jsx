import { useState, useEffect, useRef, } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts } from '../Data/Posts';

import Autosuggest from 'react-autosuggest';

import "./searchc.css";

export default function SearchC({ classP, focus, setFirst }) {
  const navigate = useNavigate();
  const ref = useRef(null);

  const [searchPosts, setPosts] = useState(posts);
  const [value, setValue] = useState("");
  const [postSeleccionado, setPostSeleccionado] = useState({});

  useEffect(() => {
    focus == "hidden" ? ref?.current?.input.focus() : null;
  }, [focus]);

  const buscar = (title) => {
    const titleMod = title.replace(" ", "-");
    setFirst("show");
    navigate(`/${titleMod}`);
  };
  const searchPage = (e) => {
    e.preventDefault();
    setFirst("show")
    navigate("/search" + value);
  };


  const onSuggestionsFetchRequested = ({ value }) => {
    setPosts(filtrarPosts(value));
  };

  const filtrarPosts = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    let filtrado = posts.filter((item) => {

      if (item.title.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(inputValue)) {
        return item;
      }
      if (item.resume.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(inputValue)) {
        return item;
      }
    });

    return inputLength === 0 ? [] : filtrado;
  };

  const onSuggestionsClearRequested = () => {
    setPosts([]);
  };

  const getSuggestionValue = (suggestion) => {
    return ``;
  };

  const renderSuggestion = (suggestion) => {
    return (
      <div className='sugerencia' onClick={() => buscar(suggestion.title)}>
        <div>
          {suggestion.title}
        </div>
        <small>{suggestion.resume}</small>
      </div>);
  };

  const seleccionarPosts = (presidente) => {
    setPostSeleccionado(presidente);
  };

  const onChange = (e, { newValue }) => {
    setValue(newValue);
  };

  const eventEnter = (e) => {
    if (e.key == "Enter") {
      seleccionarPosts(e.target.value.title);
    }
  };
  console.log(value);
  const onKeyDown = (e) => {
    if (e.key == "Enter") {
      setFirst("show");
      navigate("/search" + value);
    }
  };

  const inputProps = {
    placeholder: "Search",
    value,
    onChange,
    onKeyDown: onKeyDown
  };

  return (
    <div className={classP}>

      <Autosuggest
        ref={ref}
        suggestions={searchPosts}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={eventEnter}
      />

      <button type="submit" onClick={(e) => { searchPage(e); }}>Search</button>
    </div>
  );
}



