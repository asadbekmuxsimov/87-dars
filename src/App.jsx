// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



// import React, { useState } from 'react'

// function App() {
//   const [menu,setMenu]=useState("asosiy")
//   if (menu === "asosiy") {
//     return <Asosiy setMenu={setMenu}/>
//   }
//   if (menu==="cars"){
//     return( 
//       <div>
//         <Cars  setMenu={setMenu}/>
//       </div>
//     )
//   }
//   if(menu==="fruits"){
//     return(
//       <div>
//         <Fruits setMenu={setMenu}/>
//       </div>
//     )
//   }

//   return (
//     <div>
//      sahifa topilmadi
//     </div>
//   )
// }

// function Cars({setMenu}){
//   return <div>
//     <Navbar setMenu={setMenu}/>

//     <p>Mercedes Benz</p>
//     <p>Porsce</p>
//     <p>BMW</p>
//     <p>Lambargini</p>
//   </div>
// }
// function Navbar({setMenu}){
//   return <div>
//      <nav style={{display:"flex", justifyContent:"space-around", fontSize:25}}>
//         <p onClick={()=>{
//           setMenu("asosiy")
//         }}>Asosiy</p>
//         <p onClick={()=>{
//           setMenu("cars")
//         }}>Cars</p>
//         <p onClick={()=>{
//           setMenu("fruits")
//         }}>Fruits</p>
//       </nav>
//   </div>
// }
// function Asosiy({setMenu}){
//   return <div>
//     <Navbar setMenu={setMenu}  />
//     <h1>ASOSIY</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente harum assumenda consequatur laboriosam illum accusantium?</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente harum assumenda consequatur laboriosam illum accusantium?</p>
//   </div>
// }
// function Fruits({setMenu}){
//   return(
    
//     <div className='meva'>
//       <Navbar setMenu={setMenu}/>

//       <p>olma</p>
//       <p>nok</p>
//       <p>anor</p>
//       <p>banan</p>
//     </div>
//   )
// }
// export default App




import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [random, setRandom] = useState('')
  const [top, setTop] = useState('')
  const [count, setCount] = useState(0)
  const [dead, setDead] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setRandom(Math.floor(Math.random() * 600))
      setTop(Math.floor(Math.random() * 600))
    }, 1000);

    setTimeout(() => {
      clearInterval(interval)
      setDead(`O'yin Tugadi`)
    }, 10000);
  }, [])

  return (
    <>
      <div className='container'>
        <button>Bosildi: {count}</button>
        <span>{dead}</span>
        <div
          onClick={() => {
            setCount(count + 1)
          }}
          style={{
            width: 50,
            height: 50,
            background: 'green',
            position: 'absolute',
            borderRadius: 50,
            top: random,
            left: top,
            display: dead === '' ? 'flex' : 'none',
            justifyContent: 'center'
          }}
        ></div>
      </div>
    </>
  )
}

export default App
