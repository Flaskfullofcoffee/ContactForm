import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
          <h1 id='title'>Steve's Goldfish Emporium</h1>
      <div className="form_wrap">
      <p id="description">Please tell us how your goldfish buying experience was.</p>
      <form action="send" id="survey-form" method="POST">
        <div className="who">
          <div className="labels">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="What's your name?" className="user_input" required />
          </div>
          <div className="labels">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="What's your email?" className="user_input" required />
          </div>
          <div className="labels">
            <label htmlFor="age">Age:</label>
            <input type="number" id="number" min="1" max="95" name="age" placeholder="How old are you?" className="user_input" required />
          </div>
        </div>
        <div className="survey">
          <div className="survey1">
            <label htmlFor="experience">How would you rate your goldfish experience?</label>
          <select name="experience" id="dropdown">
            <option disabled value>Select an option</option>
            <option  value="amazing">Amazing</option>
            <option value="pleasant">Pleasant</option>
            <option value="alright">Alright</option>
            <option value="lacking">Lacking</option>
            <option value="other">Other</option>
          </select>
        </div>
       </div>
        <div className='survey'>
          <div className="survey2">
            <label htmlFor="rating" className="rating">How likely is that you would recommend Steve's Goldfish Emporium to a friend?</label>
          <div className="survey_radio">
            <ul>
              <li className="radio"><label><input name="recommendation" value="yes" type="radio" className="radio-value" />Absolutely</label></li>
              <li className="radio"><label><input name="recommendation" value="maybe" type="radio" className="radio-value" />Maybe</label></li>
              <li className="radio"><label><input name="recommendation" value="nope" type="radio" className="radio-value" />No Way!</label></li>
            </ul>
          </div>
        </div>
       </div>
        <div className="comment_section">
          <label htmlFor="comments" className="comments">Any additional comments or suggestions?</label>
          <textarea name="comments" id="comments" cols="30" rows="10" className="input_field"></textarea>
        </div>
        <div className="btn-wrap">
          <button id="submit" type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;
