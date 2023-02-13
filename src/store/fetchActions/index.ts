import { Dispatch } from 'redux';
import { addPosts } from '../ducks/posts';

const API_URL = 'https://api-reddit-com.translate.goog/r/pics/hot.json?_x_tr_sl=auto&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=wapp';

export const allPosts = () => {
  return (dispatch: Dispatch) => {
    fetch(API_URL)
      .then(res => res.json())
      .then(kind => dispatch(addPosts(kind.data.children)))
      .catch(console.log);
  };
};