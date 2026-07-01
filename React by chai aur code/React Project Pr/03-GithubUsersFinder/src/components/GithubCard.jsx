import React from 'react'

function GithubCard({
  img,
  username,
  name,
  bio,
  publicRepo,
  follwing,
  follwers,
  blog
}) {
  return (
    <div className='github-card'>
      <div className='img-div'>
        <img src={img} alt="profile"/>
       </div>
      <div className='user-info-div'>
        <p>{`Username: ${username}`}</p>
        <p>{`Name: ${name}`}</p>
        <p>{`Bio: ${bio}`}</p>
        <p>{`public Repo: ${publicRepo}`}</p>
        <p>{`Following: ${follwing}`}</p>
        <p>{`Follwers: ${follwers}`}</p>
        <p>{`Blog: ${blog}`}</p>


      </div>
    </div>
  )
}

export default GithubCard
