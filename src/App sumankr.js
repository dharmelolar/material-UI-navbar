import React, { useState, useEffect } from 'react';

function App() {
  const [tagValue, setTagValue] = useState('');

  useEffect(() => {
    fetch('/plc_tag?data=hello')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTagValue(data.reversed);
      })
      .catch(error => console.error('Error fetching PLC tag:', error));
  }, []);

  return (
    <div>
      <h1>Python Tag Value:</h1>
      <input type="text" value={tagValue}/>
    </div>
  );
}

export default App;
