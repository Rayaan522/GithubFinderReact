import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
 
// let githubClientId;
// let githubClientSecret;

// if (process.env.NODE_ENV !== 'production') {
//   githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
//   githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
// } else {
//   githubClientId = process.env.GITHUB_CLIENT_ID;
//   githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
// }

const GithubState =  props=> {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search users

  // //Search github users
  // const searchUsers = async (text) => {
  //   setLoading();
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  //   );

  //   searchUsers(res.data.items);
  //   dispatch({ type: SEARCH_USERS, payload: res.data.items });
  // };

  // Get user

  // Get a Single Github user

  // const getUser = async (username) => {
  //   setLoading();
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  //   );

  //   dispatch({
  //     type: GET_USER,
  //     payload: res.data,
  //   });
  // };

  // Get user repos

  // const getUserRepos = async (username) => {
  //   setLoading();
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  //   );

  //   dispatch({
  //     type: GET_REPOS,
  //     payload: res.data,
  //   });
  // };

  // Clear Users
  // const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // // Set Loading

  // const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
         ...state,dispatch
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
