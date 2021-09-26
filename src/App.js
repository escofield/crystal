// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import {User,Email,Phone,Minus,Plus} from './svgs.js';

function App() {
  const[adults, setAdults] = useState(2);
  const[kids, setKids] = useState(2);
  const[rooms, setRooms] = useState(2);
  const[fullName, setFullName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');

  const onNameChange = (e) => setFullName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhoneChange = (e) => setPhone(e.target.value);

  const validBounds = (value, state) =>{
    if(value<0){
      state(0);
      return
    }
    state(value);
  }
  useEffect(() => validBounds(kids, setKids), [kids, setKids])
  useEffect(() => validBounds(rooms, setRooms), [rooms, setRooms])
  useEffect(() => validBounds(adults, setAdults), [adults, setAdults])

  const clearForm = () => {
    setAdults(2);
    setKids(2);
    setRooms(2);
    setFullName('');
    setEmail('');
    setPhone('');
  }

  return (
    <div className="app">
      <h1>Book a trip</h1>
      <p className="note">An amazing journey is waiting for you and your loved ones! You're just one step away from a new adventure:</p>
      <div className="formInput">
        <label>YOUR NAME</label>
        <div className="inputGroup">
          <User/>
          <input name="fullName" placeholder="Enter your full name" value={fullName} onChange={onNameChange}/>
        </div>
        <label>E-MAIL ADDRESS</label>
        <div className="inputGroup">
          <Email/>
          <input name="email" type="email" placeholder="Enter your E-mail address" value={email} onChange={onEmailChange}/>
        </div>
        <label>PHONE NUMBER</label>
        <div className="inputGroup">
          <Phone/>
          <input name="phone" type="phone" placeholder="Enter your phone number" value={phone} onChange={onPhoneChange}/>
        </div>

        <div className="groupNumbers">
          <label>ADULTS</label>
          <label>KIDS</label>
          <label>CABIN ROOMS</label>
          <div>
            <div onClick={() => setAdults(adults-1)}><Minus/></div>
            <span>{adults}</span>
            <div onClick={() => setAdults(adults+1)}><Plus/></div>
          </div>
          <div>
            <div onClick={() => setKids(kids-1)}><Minus/></div>
            <span>{kids}</span>
            <div onClick={() => setKids(kids+1)}><Plus/></div>
          </div>
          <div>
            <div onClick={() => setRooms(rooms-1)}><Minus/></div>
            <span>{rooms}</span>
            <div onClick={() => setRooms(rooms+1)}><Plus/></div>
          </div>
        </div>
        <div className="submit" onClick={clearForm}>COMPLETE YOUR BOOKING</div>
      </div>
    </div>
  );
}

export default App;
