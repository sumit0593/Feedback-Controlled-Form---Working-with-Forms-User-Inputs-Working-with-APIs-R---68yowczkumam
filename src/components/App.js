import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState();
  const [commentError, setCommentError] = useState();

  const handleRatingChange=(event)=>{
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    if (event.target.value.length < 5) {
      setCommentError("Comment must be atleast 5 characters.");
    } else {
      setCommentError();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='rating'>Rating: </label>
          <input 
            type="range"
            min="1"
            max="10"
            id="rating"
            defaultValue={5}
            onChange={handleRatingChange}
          />
          <span className='rating'>{rating}</span>
        </div>
        <div>
          <label htmlFor='comment'>Comment: </label>
          <textarea 
            id='comment'
            onChange={handleCommentChange}
          />
          <p style={{ color: 'red' }} className="comment-error">{commentError}</p>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default App;
