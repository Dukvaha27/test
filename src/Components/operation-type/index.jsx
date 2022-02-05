import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadOperationType,
  selectOperationType,
} from "../../Redux/features/operationType";

function OperationType({ operationType, setOperationType }) {
  const dispatch = useDispatch();
  const types = useSelector(selectOperationType);

  useEffect(() => {
    dispatch(loadOperationType());
  }, []);

  const changeTypeOperationHandler = (e) => {
    const id = Number(e.target.value);
    setOperationType(id);
  };

  return (
    <select
      value={operationType}
      className={"p-1"}
      onChange={changeTypeOperationHandler}
    >
      {types.map((type) => (
        <option value={type.ID} key={type.ID}>
          {type.name}
        </option>
      ))}
    </select>
  );
}

export default OperationType;
