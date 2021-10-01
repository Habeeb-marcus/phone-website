import React, { useState }from "react";
import './Section5.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'





function Section5 () {
    const [selected, setSelected] = useState(() => null)

    const toggle = (idx) => {
        if(selected === idx) {
            return setSelected(null)
        }
        
        setSelected(idx)
    }

    return (
        <div className="sect5">
                <div className="sect5-cont"> <h2>FAQs</h2>                   
                        {data.map((item, idx) =>  {
                    return <div className={ selected === idx ?"qst-wrapper act" : "qst-wrapper"}>
                            <div className="question">                      
                                <div className="title" onClick= {() => toggle(idx)}>
                                    <span key={idx} className="num">{item.number}</span>
                                    <span className="qst">{item.question}</span>                         
                                    <span className="fas">{selected === idx ? '-' : '+'}</span>
                                </div>

                                <div className={selected === idx ? "answer show" : "answer"}>{item.answer}</div>                                
                            </div>

                        </div>
                    
                    }
                    )
                    }
                </div>
        </div>
    )
}



const data = [
    {
        question: 'How does the App Work?',
        number: '1',
        answer: ' Phoneweb runs a full set of tests on your phones internal hardware: including sensors, touchscreen, display, cameras, battery, speakers, microphone, etc. For some tests, we need your help, others run completely automatically in the background. ',
    },

      {
        question: 'How long does it take?',
        number: '2',
        answer: ' It only takes 5 to 10 minutes to check your phones technical and optical condition. If you want to run the battery health check it can take 5 to 15 minutes extra time depending on your battery.'
    },

    {
        question: 'Where can I sell my phone?',
        number: '3',
        answer: 'You can download the Phoneweb test report as certificate and share it on any platform to sell it. With only 1 click and a confirmation you can directly publish a classified ad on market.de.' 
    },

    {
        question: 'Is the test free of charge?',
        number: '4',
        answer: 'Yes, we do not charge for using Phoneweb and the app is freely available for iOS and Android. Aou will automatically receive a quotation and your test report after you checked your phone.' 
    },

    {
        question: 'Can I trust the guaranteed price?',
        number: '5',
        answer: 'With myhandycheck we want to avoid the frustration of not being able to keep up with false price promises in a later process. Through the test report we create transparency about the condition of the phone for both seller and buyer - we firmly believe that thereby you can achieve fair and usually higher prices. Selling a used phone peer-to-peer it always depends on the demand as well. Hence, our price recommendation is no guarantee what you will actually get for it in the end.' 
    },

     {
        question: 'Is my data safe when I transfer it to another device?',
        number: '6',
        answer: "Data privacy is our top priority. For our wireless data transfer solution we use WiFi direct which allows us to connect to nearby devices without using a network or hotspot. Therefore, we don't safe your personal data on any servers and enable direct peer-to-peer transfers."
    },

    {
        question: 'Where is my test result saved?',
        number: '7',
        answer: "We are located in Nigeria, Lagos and we have our own data center."
    },

    



]


export default Section5;