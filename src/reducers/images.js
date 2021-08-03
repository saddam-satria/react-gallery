import { GET_IMAGES, LOADING } from '../constant';

const initialState = {
  loading: false,
  images: [],
};

const images = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return { ...state, loading: false, images: action.data };

    case LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default images;
