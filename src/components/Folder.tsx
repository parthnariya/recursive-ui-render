import { useState, MouseEvent, KeyboardEventHandler } from "react";
import { iFolder } from "../interfaces/iFolder";
import "../styles/style.css";
type FolderPropsType = {
  explorer: iFolder;
  newFolderHandler: (folderId: string, item: string, isFolder: boolean) => void;
  deleteFolderHandler: (folder: iFolder) => void;
};
type InputState = {
  isVisible: boolean;
  isFolder: boolean;
};
const Folder = ({
  explorer,
  newFolderHandler,
  deleteFolderHandler,
}: FolderPropsType) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState<InputState>({
    isFolder: false,
    isVisible: false,
  });

  const handleNewFolder = (e: MouseEvent<HTMLElement>, isFolder: boolean) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      isVisible: true,
      isFolder,
    });
  };

  const handleDeleteFolder = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    deleteFolderHandler(explorer);
  };

  const onKeyDownHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && e.currentTarget.value !== "") {
      newFolderHandler(explorer.id, e.currentTarget.value, showInput.isFolder);
      setShowInput({ ...showInput, isVisible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>
            {expand ? "📂" : "📁"} {explorer.name}
          </span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            <button onClick={(e) => handleDeleteFolder(e)}>Delete -</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.isVisible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, isVisible: false })}
                onKeyDown={onKeyDownHandler}
              />
            </div>
          )}

          {explorer.items.map((item) => (
            <Folder
              explorer={item}
              key={item.id}
              newFolderHandler={newFolderHandler}
              deleteFolderHandler={deleteFolderHandler}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file">
        📄 {explorer.name}{" "}
        <button onClick={(e) => handleDeleteFolder(e)}>Delete -</button>
      </div>
    );
  }
};

export default Folder;
