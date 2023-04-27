import React from 'react'
import oscar from "../Assets/oscar.png"
import "./StyleMain.css"


const Oscar = () => {
  return (
    <div>
      <div className="wrapper">
      <div class="oscar">
    <a name="oscar"></a>
    <div class="oscar__text">
      <h3>Receiving an oscar</h3>
      <p>
        The 94th Academy Awards ceremony will be remembered by the audience
        not only <br />
        for the fact that its participants expressed solidarity <br />
        with the people of Ukraine with a minute of silence, <br />
        but also for the fight that one of the winners, actor Will Smith,
        arranged right <br />
        on the stage. The film "CODA: Child of Deaf Parents" was recognized
        <br />
        as the best film at the end of the evening.
      </p>
    </div>
    <div class="oscar__photo">
      <img src={oscar} alt="" />
      <p>
        "CODA" also won Best Screenplay and Best Supporting Actor (Troy
        Kotzur, an <br />
        American actor deaf from birth). He delivered his victory speech in
        sign language. "I just want to say that this win is dedicated to all
        deaf people, the crew of our film, and the entire community of
        people with disabilities. This is our moment," said Kotzur.
      </p>
    </div>
  </div>
      </div>
    </div>
  )
}

export default Oscar