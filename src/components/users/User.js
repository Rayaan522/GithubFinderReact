import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import { getUserAndRepos } from '../../context/github/actions'
import GithubContext from '../../context/github/githubContext';
import { GET_USER_AND_REPOS, SET_LOADING  } from '../../context/types'

const User = ({ match: { params } }) => {

  const {
    user : {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    company,

    public_gists,
    hireable 
  },
  loading,
  dispatch,
  repos
  } = useContext(GithubContext);

  useEffect(() => {
    dispatch({ type: SET_LOADING })
    getUserAndRepos(params.login).then(res =>
      dispatch({
        type:GET_USER_AND_REPOS,payload:res

    })
    )
    // eslint-disable-next-line
    
  }, [dispatch,params.login]);


  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      Hireable :{''}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fa fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1> location:{location}
        </div>
        <div>
          {bio && (
            <Fragment>
              <h1>Bio</h1>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:
                  <a href={`https://${blog}`}>{blog}</a>{' '}
                  </strong>
                  {blog}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company</strong>
                  {company}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers:{ followers }</div>
        <div className='badge badge-success'>Following:{ following }</div>
        <div className='badge badge-light'>public_repos:{ public_repos }</div>
        <div className='badge badge-dark'>public_gists:{ public_gists }</div>
      </div>
      <Repos repos={ repos } />
    </Fragment>
  );
};

export default User;
