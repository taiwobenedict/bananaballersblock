import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/accordion"

function Faq() {


  return (
    <div id="faq" className='vh-100 mt-5 pt-5'>
      <div className="row m-0 h-100 justify-content-center align-items-center">
        <div className="col-sm-10">
          <h1 className="text-title" data-aos="fade-up">FAQ</h1>
          <Accordion allowToggle data-aos="fade-right-down">
            <AccordionItem>
              <h4>
                <AccordionButton className='question'>Section 1 title</AccordionButton>
              </h4>
              <AccordionPanel className='answer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet sapiente deserunt autem, ipsum earum veniam incidunt? Ipsum, repellat optio tempora perferendis nisi vero perspiciatis rerum impedit ipsam nihil aperiam sapiente quasi, dolor officia quos earum. Ducimus magnam explicabo expedita.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h4>
                <AccordionButton className='question'>Section 1 title</AccordionButton>
              </h4>
              <AccordionPanel className='answer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet sapiente deserunt autem, ipsum earum veniam incidunt? Ipsum, repellat optio tempora perferendis nisi vero perspiciatis rerum impedit ipsam nihil aperiam sapiente quasi, dolor officia quos earum. Ducimus magnam explicabo expedita.</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h4>
                <AccordionButton className='question'>Section 1 title</AccordionButton>
              </h4>
              <AccordionPanel className='answer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet sapiente deserunt autem, ipsum earum veniam incidunt? Ipsum, repellat optio tempora perferendis nisi vero perspiciatis rerum impedit ipsam nihil aperiam sapiente quasi, dolor officia quos earum. Ducimus magnam explicabo expedita.</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h4>
                <AccordionButton className='question'>Section 1 title</AccordionButton>
              </h4>
              <AccordionPanel className='answer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet sapiente deserunt autem, ipsum earum veniam incidunt? Ipsum, repellat optio tempora perferendis nisi vero perspiciatis rerum impedit ipsam nihil aperiam sapiente quasi, dolor officia quos earum. Ducimus magnam explicabo expedita.</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h4>
                <AccordionButton className='question'>Section 2 title</AccordionButton>
              </h4>
              <AccordionPanel className='answer'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas tempore soluta incidunt deserunt sapiente rem ab eveniet dolor, et eos, quod veniam dolorum natus! Voluptas ipsum quidem veniam omnis incidunt. In quas eaque vitae, dolorem voluptatem quibusdam! Fugiat, at laudantium?</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Faq