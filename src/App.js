import './App.css';
import tweet from './tweet.js';
import Tweet from './tweet.js'

function App() {

  const Tweets = [{ name:"ferhat", message:"Hi, Im Ferhat"},
  { name:"Natalia", message:"Hello react"},
  { name:"Alice", message:"How Are You?"}]

  return (
    <div>
      {Tweets.map((tweet)=>(
        <Tweet firstname={tweet.name} message={tweet.message}/>
      )

      )}
    </div>
  );
}

export default App;
