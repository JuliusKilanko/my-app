import React from 'react'
import FirstImage from '../images/images.png'
import thirdImage from '../images/bighead.jpeg'
import fourImage from '../images/profile.jpeg'

function Meetings() {
  return (
    <div>
      <div className="header">
        <h1>Book a Meeting</h1>
      </div>
      <div className="content_section">
        <h3>New Meeting</h3>
        <form action="">
            <label htmlFor="meeting">Meeting</label> <br />
            <input type="text" placeholder='Meeting Info' />
            <div className="inputs">
               <div className="days">
                <span>Day</span>
                <input type="date" />
               </div>
               <div className="days">
                <span>Hours</span>
                <input type="number" placeholder='19'/>
               </div>
               <div className="number">
                <span>Minutes</span>
                <input type="number" placeholder='30'/>
               </div>
               <div className="days">
                <span>Duration</span>
                <input type="number" placeholder='1:30' />
               </div>
            </div>
            <div className="options">
                <label htmlFor="">Meeting Room</label>
                <select name="meetingBook" id="">
                    <option value="">Room 103, MiT Porto</option>
                    <option value="">Room 104, MiT Porto</option>
                    <option value="">Room 105, MiT Porto</option>
                    <option value="">Room 106, MiT Porto</option>
                    <option value="">Room 107, MiT Porto</option>
                    <option value="">Room 108, MiT Porto</option>
                    <option value="">Room 109, MiT Porto</option>
                    <option value="">Room 110, MiT Porto</option>
                </select>
            </div>
            <div className="textarea">
                <label htmlFor="">Description</label>
                <textarea name="" id="" cols="88" rows="6" placeholder='UI Design Meeting'></textarea>
            </div>
            <div className="images">
                <div className="theimages">
                <p>Invited</p>
                    <img src={FirstImage} alt="" />
                    <img src={thirdImage} alt="" />
                    <img src={fourImage} alt="" />
                </div>
                <div className="btn">
                    <a href='#' >Cancel</a>
                    <a href='#'>Book Meeting</a>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Meetings
