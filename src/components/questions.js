import React from "react"

const Questions = item => (
  <React.Fragment>
    <p>{item.item.Feb._1.question}</p>
    <input type="radio" value="a" />
    <label for="a">{item.item.Feb._1.a}</label>
    <br></br>
  </React.Fragment>
)
export default Questions
