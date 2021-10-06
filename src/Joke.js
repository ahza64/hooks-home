import { useEffect, useState } from 'react'

function Joke() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    // fetch('https://official-joke-api.appspot.com/jokes/random', {mode: 'no-cors'})
    fetch('http://localhost:3005/jokes/random')
      .then(response => response.json())
      .then(json => {
        console.log('joke json', json)
        setJoke(json);
      })
      .catch(error => console.log('request failed', error));
  }, []);

  const { setup, punchline } = joke;

  return (
    <div>
      <h3>Joke</h3>
      <p>{setup}</p>
      <p><em>{punchline}</em></p>
    </div>
  )
}

export default Joke;
