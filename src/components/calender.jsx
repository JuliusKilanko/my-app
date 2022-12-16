import React,{useState} from 'react'
import Meeting from '../images/meeting.png'
import BigHead from '../images/bighead.jpeg'
import MyImage from '../images/images.png'
import MyProfile from '../images/profile.jpeg'
import Calendar from 'react-calendar'

function Calender() {
  const [date, setDate] =useState(new Date())

  const onChange =date=>{
    setDate(date)
  }
  return (
    <div>
      <div className="calenderside">
        <h3>My Meeting</h3>
        <p>Calender</p>
        <Calendar view onChange={onChange} value={date} />
        <h3 className='date'>15 December</h3>
        <div className="design_thinking">
            <h3>{date.toString()}</h3>
        </div>
        <div className="meetingsection">
            <img src={Meeting} alt="" />
            <p>12am - 2pm</p>
            <h4>Web Development Meeting</h4>
            <div className="littleImages">
                <img src={BigHead} alt="" />
                <img src={MyImage} alt="" />
                <img src={MyProfile} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Calender
