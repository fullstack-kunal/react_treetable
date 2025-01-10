export class NodeService {
  static getTreeTableNodes() {
    return new Promise((resolve) => {
      const data = [
        {
          key: "0",
          data: { name: "Documents", size: "75kb", type: "Folder" },
          children: [
            {
              key: "0-0",
              data: { name: "Work", size: "55kb", type: "Folder" },
              children: [
                {
                  key: "0-0-0",
                  data: {
                    name: "Expenses.doc",
                    size: "30kb",
                    type: "Document",
                  },
                },
                {
                  key: "0-0-1",
                  data: { name: "Resume.doc", size: "25kb", type: "Document" },
                },
              ],
            },
            {
              key: "0-1",
              data: { name: "Home", size: "20kb", type: "Folder" },
            },
          ],
        },
        {
          key: "1",
          data: { name: "Downloads", size: "25kb", type: "Folder" },
          children: [
            {
              key: "1-0",
              data: { name: "Game.exe", size: "100mb", type: "Application" },
            },
            {
              key: "1-1",
              data: { name: "Tutorial.mp4", size: "1gb", type: "Video" },
            },
          ],
        },
        {
          key: "2",
          data: { name: "Music", size: "50mb", type: "Folder" },
          children: [
            {
              key: "2-0",
              data: { name: "Rock.mp3", size: "5mb", type: "Audio" },
            },
            {
              key: "2-1",
              data: { name: "Jazz.mp3", size: "6mb", type: "Audio" },
            },
          ],
        },
      ];
      setTimeout(() => resolve(data), 500);
    });
  }
}
