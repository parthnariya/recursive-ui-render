import { iFolder } from "../interfaces/iFolder";

export const explorer: iFolder = {
    id: 1,
    name: "root",
    isFolder: true,
    items: [
        {
            id: 2,
            isFolder: true,
            name: "src",
            items: [
                {
                    id: 3,
                    isFolder: true,
                    name: "data",
                    items: [{ id: 4, isFolder: false, name: "folderData.ts", items: [] }],
                },
                {
                    id: 5,
                    isFolder: true,
                    name: "interfaces",
                    items: [{ id: 6, isFolder: false, name: "iFolder.ts", items: [] }],
                },
                { id: 7, isFolder: false, name: "App.ts", items: [] },
                { id: 8, isFolder: false, name: "App.css", items: [] },
            ],
        },
        { id: 9, isFolder: false, name: "package.json", items: [] },
    ],
};
