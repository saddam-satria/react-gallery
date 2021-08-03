import {LOADING,GET_IMAGES} from '../constant'


export const getImages = (query) => (dispatch) => {
  dispatch(setLoading());
  fetch(`https://pixabay.com/api/?key=22761235-1aed0c54511135da1fb276498&q=${query}&image_type=photo`)
  .then(Response => Response.json())
  .then(data => dispatch({
    type:GET_IMAGES,
    data
  }))
};

const setLoading = () => {
  return {
    type: LOADING,
  };
};
