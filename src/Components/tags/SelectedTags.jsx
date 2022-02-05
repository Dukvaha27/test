import React from "react";

function SelectedTags({ item, deleteTagHandler }) {
  return (
    <div
      className={"mx-1 text-info p-1 rounded"}
      style={{ backgroundColor: item.color }}
      key={item.ID}
      onClick={() => deleteTagHandler(item.ID)}
      role={"button"}
    >
      {item.name}
    </div>
  );
}

export default SelectedTags;
