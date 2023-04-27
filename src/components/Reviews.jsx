import "./StyleMain.css"
import React from 'react'
import reviews from "../Assets/reviews.png"


const Reviews = () => {
  return (
    <div>
      <div className="wrapper">
      <div class="reviews">
    <a name="reviews"></a>
    <div class="reviews__text">
      <h3>Reviews</h3>
      <p>
        A very cool actor. My favorite movie I'm a legend probably watched
        100 times and never gets bored. And my friends also say that I am
        very similar to him both in physique and face. They even compared me
        with his photographs and were very surprised. Then they started
        calling me a legend I love his favorite actor
      </p>
    </div>
    <img src={reviews} alt="" />
  </div>
  <div class="skill">
    <div class="skill__block">
      <div class="skill__block_text">
        <h5>Skill</h5>
        <span>100%</span>
      </div>
      <progress max="100" value="100"></progress>
    </div>
    <div class="skill__block">
      <div class="skill__block_text">
        <h5>level</h5>
        <span>90%</span>
      </div>
      <progress max="100" value="90"></progress>
    </div>
    <div class="skill__block">
      <div class="skill__block_text">
        <h5>Accuracy</h5>
        <span>95%</span>
      </div>
      <progress max="100" value="95"></progress>
    </div>
    <div class="skill__block">
      <div class="skill__block_text">
        <h5>Volleybol</h5>
        <span>5%</span>
      </div>
      <progress max="100" value="5"></progress>
    </div>
  </div>
      </div>
    </div>
  )
}

export default Reviews