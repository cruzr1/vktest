import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getGroupsResponse()
    }
    return () => {
      isMounted = false;
    };
  },[])
  return (
    <>
      
    </>
  )
}

export default App
