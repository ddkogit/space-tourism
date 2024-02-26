


import { useMemo } from 'react';
import { useData } from './context/data.jsx'


function App() {
  const data = useData();
  

  console.log(data)
  

  return (
    <>
    Hello
    </>
  )
}



export default App
