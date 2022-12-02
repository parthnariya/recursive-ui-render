import { useState } from 'react'
import Folder from './components/Folder'
import { explorer } from './data/folderData'
import { iFolder } from './interfaces/iFolder'

function App() {
  const [data,setData] = useState<iFolder>(explorer)

  return (
    <div className="App">
      <Folder explorer={data}/>
    </div>
  )
}

export default App
