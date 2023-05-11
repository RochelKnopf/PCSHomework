import './BlogInfo.css';
import React from 'react'
import { Link } from 'react-router-dom';

export default function BlogInfo({ blog: { id, name, website, company: { name: companyName, catchPhrase, bs } } }) {
  return (
    <Link to={`/blogs/blog/${id}`} className="user">
      <div className="title">{name}</div>
      <div className="website">{website}</div>
      <div className="company">
        <div>{companyName}</div>
        <div>{catchPhrase}</div>
        <div>{bs}</div>
      </div>
    </Link>
  )
}

// really should use proptypes here
