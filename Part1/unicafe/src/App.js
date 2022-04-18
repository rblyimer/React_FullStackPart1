//1.11: unicafe step 6
import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good * 100 / all) ;
  if (all === 0) {
    return (
      <div>
        <h1> statistics </h1>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <table>
          <tbody>
            <h1> statistics </h1>
            <StatisticLine text="good " value={good} />
            <StatisticLine text="neutral " value={neutral} />
            <StatisticLine text="bad " value={bad} />
            <StatisticLine text="all " value={all} />
            <StatisticLine text="average " value={average} />
            <StatisticLine text="positive " value={positive + " %"} />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={" good "} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={" neutral "} />
      <Button handleClick={() => setBad(bad + 1)} text={" bad "} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;



// //1.10: unicafe step 5
// import { useState } from "react";

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>{text}</button>
// );
// const StatisticLine = (props) => {
//   return (
//     <div>
//       {props.text}
//       {props.value}
//     </div>
//   );
// };

// const Statistics = ({ good, neutral, bad }) => {
//   const all = good + neutral + bad;
//   const average = (good - bad) / all;
//   const positive = (good / all) * 100;

//   if (all === 0) {
//     return (
//     <div>
//       <h1> statistics </h1>
//       <p>No feedback given</p>
//     </div>)
//   } else {
//     return (
//       <div>
//         <h1> statistics </h1>
//         <StatisticLine text="good " value={good} />
//         <StatisticLine text="neutral " value={neutral} />
//         <StatisticLine text="bad " value={bad} />
//         <StatisticLine text="all " value={all} />
//         <StatisticLine text="average " value={average} />
//         <StatisticLine text="positive " value={positive + " %"} />
//       </div>
//     );
//   }
// };

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button handleClick={() => setGood(good + 1)} text={" good "} />
//       <Button handleClick={() => setNeutral(neutral + 1)} text={" neutral "} />
//       <Button handleClick={() => setBad(bad + 1)} text={" bad "} />
//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   );
// };

// export default App;


// //1.9: unicafe step 4
// import { useState } from "react";
// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}> {text} </button>
// );

// const Statistics = ({ good, neutral, bad }) => {
//   const all = good + neutral + bad;
//   const average = (good - bad) / all;
//   const positive = (good / all) * 100;
//   if (all === 0) {
//     return <>
//     <h1> statistics </h1>
//     <p>No feedback given</p>
//     </>
//   } else {
//     return (
//       <>
//       <h1> statistics </h1>
//       <p>Good {good}</p>
//       <p>Neutral {neutral}</p>
//       <p>Bad {bad}</p>
//       <p>All {all}</p>
//       <p>Average {average}</p>
//       <p>Positive {positive} % </p>
//       </>
//     );
//   }
// };

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const goodClick = () => {
//     setGood(good + 1);
//   };
//   const neutralClick = () => {
//     setNeutral(neutral + 1);
//   };
//   const badClick = () => {
//     setBad(bad + 1);
//   };
//   return (
//     <div>
//       <h2>Give Feedback</h2>
//       <Button handleClick={goodClick} text="good" />
//       <Button handleClick={neutralClick} text="neutral" />
//       <Button handleClick={badClick} text="bad" />
//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   );
// };
// export default App;


// //1.8: unicafe step3
// import { useState } from 'react'
// const Button = ({ handleClick, text }) => (<button onClick={handleClick}>{text}</button>)
// const Statistics = () => {
//   return (
//     <h1>Statistics</h1>
//   )}
// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const goodClick = () => {
//     setGood(good + 1)
//   }
//   const neutralClick = () => {
//     setNeutral(neutral + 1)
//   }
//   const badClick = () => {
//     setBad(bad + 1)
//   }
//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <Button handleClick={goodClick} text='Good'/>
//       <Button handleClick={neutralClick} text='Neutral'/>
//       <Button handleClick={badClick} text='Bad'/>
//       <Statistics text={Statistics}/>
//       <p>Good {good}</p>
//       <p>Neutral {neutral}</p>
//       <p>Bad {bad}</p>
//       <p>All {good + bad +neutral}</p>
//       <p>Average {(good -bad) / ( good +bad + neutral)}</p>
//       <p>Positive {(good) * 100 / ( good +bad + neutral)} %</p>
//     </div>
//   )
// }
// export default App


// //1.7: unicafe step2
// import { useState } from 'react'
// const Button = ({ handleClick, text }) => (<button onClick={handleClick}>    {text}  </button>)
// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const goodClick = () => {
//     setGood(good + 1)
//   }
//   const neutralClick = () => {
//     setNeutral(neutral + 1)
//   }
//   const badClick = () => {
//     setBad(bad + 1)
//   }
//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <Button handleClick={goodClick} text='Good'/>
//       <Button handleClick={neutralClick} text='Neutral'/>
//       <Button handleClick={badClick} text='Bad'/>
//       <h2> Statistics </h2>
//       <p>Good {good}</p>
//       <p>Neutral {neutral}</p>
//       <p>Bad {bad}</p>
//       <p>All {good + bad +neutral}</p>
//       <p>Average {(good -bad) / ( good +bad + neutral)}</p>
//       <p>Positive {(good) * 100 / ( good +bad + neutral)} %</p>
//     </div>
//   )
// }
// export default App


// //1.6: unicafe step1
// import { useState } from 'react'
// const Button = ({ handleClick, text }) => (<button onClick={handleClick}>{text}  </button>)
// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const goodClick = () => {
//     setGood(good + 1)
//   }
//   const neutralClick = () => {
//     setNeutral(neutral + 1)
//   }
//   const badClick = () => {
//     setBad(bad + 1)
//   }
//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <Button handleClick={goodClick} text='Good'/>
//       <Button handleClick={neutralClick} text='Neutral'/>
//       <Button handleClick={badClick} text='Bad'/>
//       <h2> Statistics </h2>
//       <p>Good {good}</p>
//       <p>Neutral {neutral}</p>
//       <p>Bad {bad}</p>
//     </div>
//   )
// }
// export default App









