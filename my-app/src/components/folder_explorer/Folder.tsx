import React, { useState } from "react";

export default function Folder({ folderInfo }: any) {
  const [expand, setExpand] = useState(false);

  if (folderInfo.isFolder) { // if folder
    return <div>
      <span onClick={() => setExpand(!expand)} style={{ cursor: 'pointer' }}>
        📁
        {folderInfo.name}
        <br />
      </span>
      <div
        style={{ display: expand ? "block" : "none", paddingLeft: "20px" }}
      >
        {folderInfo.items.map((subfolderInfo: unknown, ind: React.Key | null | undefined) => (
          <Folder folderInfo={subfolderInfo} key={ind} />
        ))}
      </div>
    </div>
  } else { // if file
    return <span>
      🏢
      {folderInfo.name} <br />
    </span>

  }
}