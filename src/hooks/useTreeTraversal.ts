import { iFolder } from "../interfaces/iFolder";
import { v4 as uuidv4 } from "uuid";
export default function useTreeTraversal() {
    function insertNode(
        tree: iFolder,
        folderId: string,
        item: string,
        isFolder: boolean
    ) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: uuidv4(),
                name: item,
                isFolder,
                items: [],
            });
            return tree;
        }
        // DFS Algo
        let latestNode:iFolder[] = []
        latestNode = tree.items.map(node => insertNode(node,folderId,item,isFolder) )

        return {...tree,items: latestNode}
    }
    function deleteNode(parent:iFolder, child:iFolder){
        if(parent.isFolder && parent.items.includes(child) ){
            const latestNode = parent.items.filter(ob => ob !== child)
            return {...parent,items: latestNode}
        }
        let latestNode:iFolder[] = []
        latestNode = parent.items.map(node => deleteNode(node,child))
        return {...parent,items: latestNode}
    }


    return { insertNode ,deleteNode};
}
