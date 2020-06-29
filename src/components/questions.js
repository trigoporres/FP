import React from "react"

const Questions = item => (
  <React.Fragment>
    <p>{item.item.Feb._1.question}</p>
    <input type="radio" value="a" />
    <label for="a">{item.item.Feb._1.a}</label>
    <input type="radio" value="b" />
    <label for="b">{item.item.Feb._1.b}</label>
    <input type="radio" value="c" />
    <label for="c">{item.item.Feb._1.c}</label>
    <input type="radio" value="d" />
    <label for="d">{item.item.Feb._1.d}</label>
    <br></br>
    <p>{item.item.Feb._2.question}</p>
    <input type="radio" value="a" />
    <label for="a">{item.item.Feb._2.a}</label>
    <input type="radio" value="b" />
    <label for="b">{item.item.Feb._2.b}</label>
    <input type="radio" value="c" />
    <label for="c">{item.item.Feb._2.c}</label>
    <input type="radio" value="d" />
    <label for="d">{item.item.Feb._2.d}</label>
    <br></br>
    <p>{item.item.Feb._3.question}</p>
    <input type="radio" value="a" />
    <label for="a">{item.item.Feb._3.a}</label>
    <input type="radio" value="b" />
    <label for="b">{item.item.Feb._3.b}</label>
    <input type="radio" value="c" />
    <label for="c">{item.item.Feb._3.c}</label>
    <input type="radio" value="d" />
    <label for="d">{item.item.Feb._3.d}</label>
    <br></br>
    <p>{item.item.Feb._4.question}</p>
    <input type="radio" value="a" />
    <label for="a">{item.item.Feb._4.a}</label>
    <input type="radio" value="b" />
    <label for="b">{item.item.Feb._4.b}</label>
    <input type="radio" value="c" />
    <label for="c">{item.item.Feb._4.c}</label>
    <input type="radio" value="d" />
    <label for="d">{item.item.Feb._4.d}</label>
    <br></br>
    <p>{item.item.Feb._5.question}</p>
    <input type="radio" value="a" />
    <label for="a">{item.item.Feb._5.a}</label>
    <input type="radio" value="b" />
    <label for="b">{item.item.Feb._5.b}</label>
    <input type="radio" value="c" />
    <label for="c">{item.item.Feb._5.c}</label>
    <input type="radio" value="d" />
    <label for="d">{item.item.Feb._5.d}</label>
    <br></br>
  </React.Fragment>
)
export default Questions
