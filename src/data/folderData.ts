import { iFolder } from "../interfaces/iFolder";

export const explorer: iFolder = {
  id: "c702299c-04d1-4a65-89ca-dff4b5eceb7e",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "fc4e8318-03f8-4bf9-86bd-e8818e03c975",
      isFolder: true,
      name: "src",
      items: [
        {
          id: "6fbf1085-0417-4cd5-86db-cb814e23658f",
          isFolder: true,
          name: "data",
          items: [
            {
              id: "a002e048-e12e-4424-9798-7ea4e1da63b6",
              isFolder: false,
              name: "folderData.ts",
              items: [],
            },
          ],
        },
        {
          id: "0ef98efc-45db-4258-af4c-3fa031654815",
          isFolder: true,
          name: "interfaces",
          items: [
            {
              id: "583df3a9-4140-4319-a213-58abb3fc0e3a",
              isFolder: false,
              name: "iFolder.ts",
              items: [],
            },
          ],
        },
        {
          id: "65721f91-3344-48ee-953d-2eeb181328d7",
          isFolder: false,
          name: "App.ts",
          items: [],
        },
        {
          id: "a115c2fa-8125-4062-8f24-684ce75d8829",
          isFolder: false,
          name: "App.css",
          items: [],
        },
      ],
    },
    {
      id: "f62ff280-cfba-49df-906d-1ad2f976ea3e",
      isFolder: false,
      name: "package.json",
      items: [],
    },
  ],
};
