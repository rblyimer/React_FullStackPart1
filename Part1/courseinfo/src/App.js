//1.5: course information step5
const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
return (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
);
};
const Part = (props) => {
return (
  <p> {props.part.name} {props.part.exercises}</p>
)}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }</p>
  )
}
const App = () => {
const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}
return (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);
};
export default App;


// //1.4: course information step4
// const Header = (props) => {
//   console.log(props);
//   return <h1>{props.course}</h1>;
// };
// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.parts[0]} />
//       <Part part={props.parts[1]} />
//       <Part part={props.parts[2]} />
//     </div>
//   );
// };
// const Part = (props) => {
//   return (
//     <p>
//       {" "}
//       {props.part.name} {props.part.exercises}
//     </p>
//   );
// };
// const Total = (props) => {
//   return (
//     <p>
//       Number of exercises{" "}
//       {props.parts[0].exercises +
//         props.parts[1].exercises +
//         props.parts[2].exercises}
//     </p>
//   );
// };
// const App = () => {
//   const course = "Half Stack application development";
//   const parts = [
//     {
//       name: "Fundamentals of React",
//       exercises: 10,
//     },
//     {
//       name: "Using props to pass data",
//       exercises: 7,
//     },
//     {
//       name: "State of a component",
//       exercises: 14,
//     },
//   ];
//   return (
//     <div>
//       <div>
//         <Header course={course} />
//         <Content parts={parts} />
//         <Total parts={parts} />
//       </div>
//     </div>
//   );
// };
// export default App;


//1.3: course information step3
// const Header = (props) => {
//   return (
//     <h1>{props.coursename}</h1>
//   )
// }
// const Part = (props) => {
//   return (
//     <p>
//       {props.part} {props.exercises}
//     </p>
//   )
// }
// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.part1} exercises={props.exercises1} />
//       <Part part={props.part2} exercises={props.exercises2} />
//       <Part part={props.part3} exercises={props.exercises3} />
//     </div>
//   );
// }
// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
//   )
// }
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

// return (
//     <div>
//       <Header coursename={course}/>
//       <Content
//         part1={part1.name} exercises1={part1.exercises}
//         part2={part2.name} exercises2={part2.exercises}
//         part3={part3.name} exercises3={part3.exercises}
//       />
//       <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
//     </div>
//   )
// }
// export default App


// //1.2: course information step2
// import React from 'react';
// const Header = (props) => {
//   return (
//     <h1>{props.coursename}</h1>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>
//       {props.part} {props.exercises}
//     </p>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.part1} exercises={props.exercises1} />
//       <Part part={props.part2} exercises={props.exercises2} />
//       <Part part={props.part3} exercises={props.exercises3} />
//     </div>
//   );
// }

// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

// return (
//     <div>
//       <Header coursename={course} />
//       <Content
//         part1={part1} exercises1={exercises1}
//         part2={part2} exercises2={exercises2}
//         part3={part3} exercises3={exercises3}
//       />
//       <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
//     </div>
//   )
// }
// export default App


// //1.1: course information, step1
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.coursename}</h1>
//     </div>
//   )
// }
// const Content = (props) => {
//     return (
//       <div>
//         <p>
//           {props.parts} {props.exercises}
//         </p>
//       </div>
//     )
//   }
//   const Total = (props) => {
//     return (
//       <div>
//         <p>
//           Number of exercises {props.sum}
//         </p>
//       </div>
//     )
//   }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={part1} exercises={exercises1} />
//       <Content parts={part2} exercises={exercises2} />
//       <Content parts={part3} exercises={exercises3} />
//       <Total sum={exercises1 + exercises2 + exercises3} />
    
//     </div>
//   )
// }

// export default App










