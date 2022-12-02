import { iFolder } from "../interfaces/iFolder";
import {v4 as uuidv4} from "uuid"
export default function useTreeTraversal() {
    function insertNode(
        tree: iFolder,
        folderId: string,
        item: string,
        isFolder: boolean
    ) {
        if(tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id:uuidv4(),
                name:item,
                isFolder,
                items:[]
            })
        }
        return tree
     }
     return {insertNode}
}
