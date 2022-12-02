import { useState } from 'react'
import Folder from './components/Folder'
import { explorer } from './data/folderData'
import useTreeTraversal from './hooks/useTreeTraversal'
import { iFolder } from './interfaces/iFolder'

function App() {
  const [data,setData] = useState<iFolder>(explorer)

  const {insertNode} = useTreeTraversal()

  const handleNewFolder = (folderId:string,item:string,isFolder:boolean) => {
    const finalData = insertNode(data,folderId,item,isFolder)
    setData(finalData) 
  }

  return (
    <div className="App">
      <Folder explorer={data} newFolderHandler={handleNewFolder}/>
    </div>
  )
}

export default App
