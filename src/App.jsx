import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'
function App() {
  const [todo, setTodo] = useState()
  const [todos, setTodos] = useState([])
  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
  

 
  const handleDelete = (id) => {
    const confirmation = confirm(`Are you sure that you want to delete `)
    if (confirmation == true) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
     
  }
 const handleFocus = () =>{
  const input = document.querySelector(".input")
  input.focus()
 }
  const handlechange = (e) => {
    setTodo(e.target.value)

  }
  const handleEdit = (id) => {
    let t = todos.find(i => i.id === id)
    if (t){ setTodo(t.text)
      setTodos(todos.filter((todo) => todo.id !== id));
    handleFocus()
    }
     
  }

  const handleAdd = () => {
    if (todo.trim() === "") {

      alert("Type something")
      return;
    }// prevent empty todo
    const newTodo = {
      id: Date.now(), // unique id
      text: todo,
    };
    setTodos([...todos, newTodo]);
    setTodo(""); // clear input field
     
  }
  return (<>
    <Navbar />
   
    <div className='container bg-[#f1e6bc] mx-auto w-3/10 rounded-4xl h-[85%] mt-4 font-bold max-lg:w-3/6 max-md:w-3/4 max-xs:w-[90%]'>
      <div className='w-2/4 mx-auto pt-3 border-b-1 border-amber-900'>
        <h2 className='text-[#90390b] text-center text-3xl font-[550]'>TO-DO List</h2>
      </div>

      <div className="addtodo mt-4 flex  mx-auto max-lg:w-3/4 ml-6 addbar" >

        <input type="text" name="" id="" className='input  bg-white rounded-l-2xl py-2.5 text-black font-medium placeholder: text:p-2 cursor-pointer px-4' placeholder='Add Your task' onChange={handlechange} value={todo}   />
        <div className='add rounded-r-2xl bg-[#914f12] px-6 slex font-medium cursor-pointer hover:font-semibold ' onClick={handleAdd} > Add</div>
      </div>
      <h2 className=" text-[#90390b] ml-6 text-2xl mt-4 ">Your Todos</h2>
      <div className="todo h-3/4 overflow-y-scroll overflow-hidden ">

        {todos.map(item => {
          return <div key={item.id} className="todos flex justify-evenly items-center mt-3 py-4.5 bg-[#ed915b] rounded-2xl w-8/10  ml-6 ">


            <input type="checkbox" className=' w-8 h-8 ml-2 ' />
            <div className='text-xl w-[45%] font-medium text-amber-950'><h2 className='todoname mx-2'>{item.text}</h2></div>
            <div className="btn flex gap-1 pr-2">

              <button onClick={() => handleEdit(item.id)} className='bg-orange-700 text-gray-800 font-medium px-2.5 py-1 rounded border border-orange-300 hover:bg-orange-300 transition duration-150 h-10 '><img className="w-5 h-5 filter invert opacity-80 max-sm:w-8 max-sm:h-8 " src="src/assets/edit.svg" alt="Edit" />
              </button>
              <button onClick={() => handleDelete(item.id)} className='bg-orange-700 text-gray-800 font-medium px-2.5 py-1 rounded border border-orange-300 hover:bg-orange-300 transition duration-150'><img className='w-5 h-5 filter invert opacity-80 max-sm:w-8 max-sm:h-8' src="src\assets\delete.svg" alt="" /></button>
            </div>
          </div>
        })}
      </div></div>
  </>
  )
}

export default App
