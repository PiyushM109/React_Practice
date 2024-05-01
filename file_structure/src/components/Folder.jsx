import { useState } from "react";
const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5, cursor: "pointer", fontSize:30}}>
        <div
          className="folder"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <span>
            {!expand ? "📁" : "📂"}
            {explorer.name}
          </span>
        </div>
        <div
          style={{
            marginLeft: 20,
            display: expand ? "block" : "none",
            cursor: "pointer",
          }}
        >
          {explorer.items.map((item) => (
            <div>
              <span>
                <Folder explorer={item} key={item.id} />
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <span style={{ cursor: "pointer" }} className="file">
        📃{explorer.name}
      </span>
    );
  }
};

export default Folder;
