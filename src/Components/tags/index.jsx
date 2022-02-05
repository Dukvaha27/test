import React, { useEffect } from "react";
import { loadTags } from "../../Redux/features/tags";
import { useDispatch } from "react-redux";
import SelectedTags from "./SelectedTags";

function Tags({
  tags,
  setTagIdArray,
  setTagId,
  tagIdArray,
  tagId,
  selectedTag: selectedTags,
  setSelectedTag,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTags());
  }, []);

  const addingTags = (id) => tags.find((item) => item.ID === id);

  const addTagHandler = (e) => {
    const id = Number(e.target.value);
    setTagId(id);
    setTagIdArray([...tagIdArray, id]);
    setSelectedTag([...selectedTags, addingTags(id)]);
  };

  const deleteTagHandler = (id) => {
    setTagIdArray(tagIdArray.filter((tag) => tag !== id));
    setSelectedTag(selectedTags.filter((tag) => tag.ID !== id));
  };

  return (
    <>
      <h2>Лиды</h2>
      <div className={"d-flex justify-content-between mt-5"}>
        <select className={"h-25"} value={tagId} onChange={addTagHandler}>
          <option>Добавить тэги</option>
          {tags
            .filter((tag) => {
              const id = selectedTags.find((item) => tag.ID === item.ID);
              return !id;
            })
            .map((tag) => (
              <option key={tag.ID} value={tag.ID}>
                {tag.name}
              </option>
            ))}
        </select>
        <div className={"d-flex"}>
          {selectedTags.map((item) => (
            <SelectedTags item={item} deleteTagHandler={deleteTagHandler} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tags;
