import { useFetch } from './hooks'

const Joke = () => {
  // fetch('https://official-joke-api.appspot.com/jokes/random', {mode: 'no-cors'})
  const { setup, punchline } = useFetch('http://localhost:3004/jokes/random', {});

  return (
    <div>
      <h3>Joke</h3>
      <p>{setup}</p>
      <p><em>{punchline}</em></p>
    </div>
  )
}

export default Joke;
