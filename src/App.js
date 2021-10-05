import { useState } from 'react'

function App() {
  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = event => {
    setUserQuery(event.target.value);
    console.log('userQuery', userQuery);
  }

  const handleKepPress = event => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  return (
    <div className="App">
      <h1>Hello Badass</h1>
      <div className='form'>
        <input type="text" value={userQuery} onChange={updateUserQuery} onKeyPress={handleKepPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
    </div>
  );
}

export default App;
