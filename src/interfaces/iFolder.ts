export interface iFolder {
    id : string;
    name : string;
    isFolder : boolean;
    items : iFolder[];
}