export interface iFolder {
    id : number;
    name : string;
    isFolder : boolean;
    items : iFolder[];
}