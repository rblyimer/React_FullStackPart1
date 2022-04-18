//1.14*: anecdotes step3
import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];
  const initialPoints = Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(initialPoints);
  const [mostVoted, setMostVoted] = useState({
    anecdote: anecdotes[selected],
    votes: 0,
  });

  const selectNewAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const voteForAnecdote = () => {
    const copy = [...points];
    copy[selected] += 1;
    if (copy[selected] > mostVoted.votes) {
      setMostVoted({
        anecdote: anecdotes[selected],
        votes: copy[selected],
      });
    }
    setPoints(copy);
  };

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        <button onClick={voteForAnecdote}>vote</button>
        <button onClick={selectNewAnecdote}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{mostVoted.anecdote}</p>
        <p>has {mostVoted.votes} votes</p>
      </div>
    </div>
  );
};

export default App;


// //1.13*: anecdotes step2
// import { useState } from "react";
// const Button = ({ handleClick, text }) => (
// <button onClick={handleClick}>{text}</button>
// );

// const App = () => {
//   const anecdotes = [
//     "If it hurts, do it more often.",
//     "Adding manpower to a late software project makes it later!",
//     "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//     "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//     "Premature optimization is the root of all evil.",
//     "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
//     "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
//   ];
//   const initialpoints = new Array(anecdotes.length).fill(0);
//   const [selected, setSelected] = useState(0);
//   const [points, setPoints] = useState(initialpoints);

//   const vote = () => {
//     const copy = [...points];
//     copy[selected] += 1;
//     setPoints(copy);
//   };

//   return (
//     <div>
//       {anecdotes[selected]}
//       <br />
//       has {points[selected]} votes
//       <br />
//       <Button handleClick={() => vote()} text={"vote"} />
//       <Button
//         handleClick={() => setSelected(Math.floor(Math.random() * 6))}
//         text={"next anecdote"}
//       />
//     </div>
//   );
// };

// export default App;



// //1.12*: anecdotes step1
// import { useState } from "react";
// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>{text}</button>
// );

// const App = () => {
//   const anecdotes = [
//     "If it hurts, do it more often.",
//     "Adding manpower to a late software project makes it later!",
//     "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//     "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//     "Premature optimization is the root of all evil.",
//     "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
//     "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
//   ];
//   const [selected, setSelected] = useState(0);
//   return (
//     <div>
//       {anecdotes[selected]}
//       <br/>
//       <Button
//         handleClick={() => setSelected(Math.floor(Math.random() * 6))}
//         text={"next anecdote"}
//       />
//     </div>
//   );
// };

// export default App;




