import React from 'react'
import './Post.css'

import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Post = ({data,id}) => {
  return (
    <div className='Post'>
      <img src={data.img}/>

      <div className="postReact">
        <img src={ data.liked ? Heart : NotLike} />
        <img src={Comment} />
        <img src={Share} />
      </div>
      <span style={{color: "var(--gray)", fontSize: '13px'}}> {data.likes} likes</span>

      <div className="detail">
        <span><b> {data.name} </b></span>
        <span><b> {data.desc} </b></span>
      </div>
    </div>
  )
}

export default Post