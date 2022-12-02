import React from 'react'
import { iFolder } from '../interfaces/iFolder'
type FolderPropsType = {
    explorer : iFolder
}
const Folder = ({explorer}:FolderPropsType) => {
  return (
    <div style={{marginTop : 5}}>
        <span>📁 {explorer.name}</span>
    </div>
  )
}

export default Folder