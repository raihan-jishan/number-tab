import { Navbar, NoteState, Routes } from "./modules/index.jsx";
function App() { 
      return (
       <NoteState>
         <div  className='text-black dark:bg-gray-950  dark:text-gray-50 p-[1rem]'>
           <Navbar /> 
           <Routes /> 
           {localStorage.getItem('token') ? console.log('hello') : console.log('please login!')} 
        </div>
       </NoteState>
      )
} 
export default App;