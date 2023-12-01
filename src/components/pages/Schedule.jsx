import React, { useState, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import db from '../Firebase/Firestore'
import app from '../Firebase/firebase';
import 'firebase/compat/firestore';
import '../../../public/assets/css/Schedule.css'
import { useClerk } from '@clerk/clerk-react';
import { getDocs,getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';
import { query,where } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyC3sLIbRGiSq6e12YLrHEz6OwzPqven5aA",
  authDomain: "fitzonelast.firebaseapp.com",
  projectId: "fitzonelast",
  storageBucket: "fitzonelast.appspot.com",
  messagingSenderId: "239081987995",
  appId: "1:239081987995:web:f780f05f8e29c0fe2d4b3e"
};

  



const Schedule = () => {
  const [days] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']); // Add other days
  const { user } = useClerk();
  const [schedule, setSchedule] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    day: '',
    time: '',
    activity: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(); // Retrieve Firestore instance
        const scheduleRef = collection(db, 'schedules'); // Collection reference

        // Query schedules based on the user ID
        const userScheduleQuery = query(scheduleRef, where('userId', '==', user.id));
        const querySnapshot = await getDocs(userScheduleQuery);
        const data = querySnapshot.docs.map(doc => doc.data());
        setSchedule(data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    if (user && user.id) {
      fetchData(); // Fetch data only if user ID is available
    }
  }, [user]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewSchedule(prevSchedule => ({ ...prevSchedule, [name]: value }));
  };

  const addNewSchedule = async () => {
    if (!user || !user.id || !newSchedule.day || !newSchedule.time || !newSchedule.activity) {
      console.error('Invalid user or incomplete schedule data.');
      return;
    }
  
    try {
      const scheduleRef = collection(db, 'schedules'); // Collection reference
      await addDoc(scheduleRef, {
        ...newSchedule,
        userId: user.id,
      });
      setNewSchedule({ day: '', time: '', activity: '' });
  
      // Fetch updated schedule data from Firestore after adding a new schedule
      const querySnapshot = await getDocs(scheduleRef);
      const data = querySnapshot.docs.map(doc => doc.data());
      setSchedule(data);
    } catch (error) {
      console.error('Error adding schedule:', error);
    }
  };
  const renderScheduleTable = () => {
    const timeSlots = Array.from({ length: 15 }, (_, index) => {
      const hour = index + 8; // 
      const formattedHour = String(hour).padStart(2, '0');
      return `${formattedHour}:00`;
    });

    return (
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            {days.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, timeIndex) => (
            <tr key={timeIndex}>
              <td>{time}</td>
              {days.map((day, dayIndex) => (
                <td className='input' key={dayIndex}>
                  {/* Fetch schedule data for the specific day and time */}
                  {schedule.find(item => item.day === day && item.time === time)?.activity || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  return (
    <>
      <section className="section" id="schedule">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>My Schedule</h2>
              <div className="schedule-form">
                <label className='day' htmlFor="day">Day:</label>
                <select
                  id="day"
                  name="day"
                  value={newSchedule.day}
                  onChange={handleInputChange}
                >
                  <option value="">Select a day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  {/* Add other days as options */}
                </select>
                <label className='time' htmlFor="time">Time:</label>
                <select
                  
                  id="time"
                  name="time"
                  value={newSchedule.time}
                  onChange={handleInputChange}
                  
                ><option value="=">Select time</option>
                  <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                </select>
                <label className='activity' htmlFor="activity">Activity:</label>
                <input
                  type="text"
                  id="activity"
                  name="activity"
                  value={newSchedule.activity}
                  onChange={handleInputChange}
                />
                <button onClick={addNewSchedule}>Add Schedule</button>
              </div>
              <div className="schedule-table">
                <h3>Current Schedule</h3>
                <div className="schedule-table-filtering">
            {renderScheduleTable()}
          </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );



};

export default Schedule;