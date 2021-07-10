import React from 'react'
import faker from 'faker';

const CommentDetail = ({avatar=faker.image.avatar(), author, date, text}) => {
    return (
      <div className='comment'>
        <a href='/' className='avatar'>
          <img src={avatar} alt='avatar' />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            {author}
          </a>
          <div className='metadata'>
            <span className='date'>
              {date}
            </span>
          </div>
          <div className='text'>{text}</div>
        </div>
      </div>
    );
}

export default CommentDetail