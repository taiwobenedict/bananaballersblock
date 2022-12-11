import React, {useState} from 'react'
import {FaChevronDown, FaIcons} from 'react-icons/fa'
import {FaChevronUp} from 'react-icons/fa'
function Faq() {
  const [slide, setSlide] = useState(false)

  const handleQuestionClicked = (e) => {

    const answers = document.querySelectorAll('.heading')
    answers.forEach(answer => {
     
      if (e.target == answer) {
         answer.classList.toggle('slide')
      } else answer.classList.remove('slide')
    }) 

  }

  return (
    <div id="faq" className='vh-100 mt-5 pt-5'>
      <div className="row m-0 h-100 justify-content-center align-items-center">
        <div className="col-sm-8">
          <h1 className="text-title">FAQ</h1>
          <div className="accordion">
            <div className="heading d-flex align-items-center justify-content-between" onClick={handleQuestionClicked}>
              <h4 className="question">Question 1</h4>
              {  slide 
                ? <FaChevronDown  />
                : <FaChevronUp rotate={"90deg"}/>
              }
            </div>
            <p className="answer">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi aliquid atque ullam harum delectus quod dolorum temporibus sit, amet laborum?</p>
          </div>
          <div className="accordion">
            <div className="heading d-flex align-items-center justify-content-between" onClick={handleQuestionClicked}>
              <h4 className="question">Question 2</h4>
              {  slide 
                ? <FaChevronDown />
                : <FaChevronUp />
              }
            </div>
            <p className="answer">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi aliquid atque ullam harum delectus quod dolorum temporibus sit, amet laborum?</p>
          </div>
          <div className="accordion">
            <div className="heading d-flex align-items-center justify-content-between" onClick={handleQuestionClicked}>
              <h4 className="question">Question 3</h4>
              {  slide 
                ? <FaChevronDown />
                : <FaChevronUp />

              }
            </div>
            <p className="answer">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi aliquid atque ullam harum delectus quod dolorum temporibus sit, amet laborum?</p>
          </div>
          <div className="accordion">
            <div className="heading d-flex align-items-center justify-content-between" onClick={handleQuestionClicked}>
              <h4 className="question">Question 4</h4>
              {  slide 
                ? <FaChevronDown />
                : <FaChevronUp />

              }
            </div>
            <p className="answer">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi aliquid atque ullam harum delectus quod dolorum temporibus sit, amet laborum?</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Faq