import React, { useState } from 'react'
import logo2 from '../logo2.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
    const [loading, setLoading] = useState(false)
    const notify = () => toast.info("Welcome to Wobot.ai ", {
        theme: "colored"
    });
    return (
        <div className='outer-container' >
            <div className='logo2'>
                <img src={logo2} />
            </div>
            <div className='welcome-msg'>
                <span>
                    It's a delight to have
                </span>
                <span>
                    you onboard
                </span>
                <p>
                    Help us know you better
                </p>
            </div>
            <div className='small-text'>
                <p>
                    (this is how we optimize wobot as
                </p>
                <p>
                    per your bussiness need)
                </p>
            </div>
            <div className='form'>
                <div class="form-container">
                    <div class="outline-textfield">
                        <input placeholder="e.g. , John" type="text" />
                        <label>Your Name</label>
                    </div>
                    <div class="outline-textfield">
                        <input placeholder="e.g. alpha Inc." type="text" />
                        <label>Company Name</label>
                    </div>
                    <div class="outline-textfield">
                        <select >
                            <option id="option" disabled selected>Select</option>
                            <option id="option">IT</option>
                            <option id="option">Marketing</option>
                            <option id="option">Designing</option>
                            <option id="option">Sales</option>
                            <option id="option">Education</option>
                        </select>
                        <label>Industry</label>
                    </div>
                    <div className='location-radio'>
                    <p >Number of locations</p>
                    <div className="radio">

                        <input type="radio" name={1} id="one" /> <label htmlFor="one">1-20</label>
                        <input type="radio" name={1} id="two" /> <label htmlFor="two">21-50</label>
                        <input type="radio" name={1} id="three" /> <label htmlFor="three">51-200</label>
                        <input type="radio" name={1} id="four" /> <label htmlFor="four">201-500</label>
                        <input type="radio" name={1} id="five" /> <label htmlFor="five">500+</label>

                    </div>
                    </div>

                </div>
            </div>
            <button onClick={notify} className='btn'>Get Started</button>
            <ToastContainer />

        </div >
            
      

    )
}

export default Form