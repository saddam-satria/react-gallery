import { Button, InputGroup, Input } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getImages } from '../action/images';

const SearchInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages(input));
  }, [dispatch,input]);

  const searchImagesHandler = (e) => {
    if (e.keyCode === 13) {
      setInput(e.target.value);
      e.target.value = '';
    }
  };
  
  const searchImagesHandlerClick = () => {
    const input = document.querySelector('input').value
    setInput(input)
    
  }
  return (
    <div className="search-input">
      <div className="search">
        <InputGroup>
          <Input placeholder="find images..." onKeyUp={searchImagesHandler} color="primary" />
          <Button color="primary" onClick={searchImagesHandlerClick}>Search</Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default SearchInput;
