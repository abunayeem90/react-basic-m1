import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  // const [count, setCount] = useState(0)

    const actors =['Sakib', 'Raj', 'Josim', 'Rubel', 'Manna'];

  const books = [
    {id: 1, name: 'Physics', price: 200},
    {id: 2, name: 'Chemistry', price: 150},
    {id: 3, name: 'Math D', price: 250},
    {id: 4, name: 'Add Math', price: 100},
    {id: 5, name: 'Biology', price: 190},
    {id: 6, name: 'Computer Science', price: 120},
    {id: 7, name: 'English', price: 140},
  ]










    const singers = [
      {id: 1, name: 'Dr. Mahfuz Rahamn', age: 60},
      {id: 2, name: 'Eva Rahamn', age: 30},
      {id: 3, name: 'Hridoy Rahamn', age: 40},
      {id: 4, name: 'Balam Rahamn', age: 50},
      {id: 5, name: 'Pritom', age: 20},

    ]
  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

    <>
    <h1>Vite + React</h1>
    <BookStore books={books}></BookStore>

    {
      singers.map(singer => <Singer singer={singer}></Singer>)
    }

    {/* <Actor name={"Bappa Raj"}></Actor>
    {
      actors.map(actor => <Actor name={actor}></Actor>)
    } */}



    {/* <Todo task="learn React" isDone={true}></Todo>
    <Todo task="lExplore Core Concepts" isDone={false}></Todo>
    <Todo task="TryJSX" isDone={true}></Todo> */}

    {/* <Device name="Laptop" price="50000" color="gray"></Device>
    <Device name="Mobile" price="20000" color="Silver"></Device>
    <Device name="Watch" price="3000" color="Black"></Device>
    <Person></Person>
    <Student grade="7.5" score="99"></Student>
    <Student grade="7.5" score="99"></Student>
    <Student></Student>
    <Developer></Developer> */}
    </>
  )
}

function Device(props){
  // console.log(props);
  return(
    <h2>This Device name: {props.name} price: {props.price} and this color: {props.color}</h2>
  )
}



function Person (){
  const age = 25;
  const money = 20;
  const Person = {name: 'Sakib', age:12}
  return <h3>I am {Person.name} with age:{age}, My money:{money}</h3>
}

const {grade, score} = {grade: '7.5', score: '99'};

function Student({grade=1, score=0}){
  console.log(grade, score)
  return (
  <div className='student'>
    <h3>This is a Student</h3>
    <p>Class: {grade}</p>
    <p>Score: {score}</p>
  </div>
  )
}

function Developer(){
  const DeveloperStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'

  }
  return(
    <div style={DeveloperStyle}>
      <h5>Devo Devo</h5>
      <p>coding</p>
    </div>
  )
}

export default App
