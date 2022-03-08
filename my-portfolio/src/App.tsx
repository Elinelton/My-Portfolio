import { useState } from 'react'
import { Tweet } from './components/Tweet';


function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3'
  ])//is here have concept immutability 
  function createTweet() {
    setTweets([...tweets, "Tweet " + (tweets.length + 1)])// this replaces the value of var tweets, it does not add.  
  }
  return (
    <div>
      {tweets.map(tweet => {
        return <Tweet text={tweet} />
      })}
      <button onClick={createTweet}>Add Tweet</button>
    </div>
  );
}

export default App
