import React, { useState } from 'react';


const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();

    const ageDiff = currentDate - birthDateObj;
    const ageDate = new Date(ageDiff);

    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <h2>Enter your date of birth</h2>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <br/>
      <br/>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>You are {age} years old</p>}
    </div>
  );
};

export default AgeCalculator;
