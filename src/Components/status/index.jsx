import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStatus, selectStatus } from "../../Redux/features/status";

function Status({ status, setStatus }) {
  const fetchStatus = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStatus());
  }, []);

  const changeStatusHandler = (e) => {
    const id = Number(e.target.value);
    setStatus(id);
  };

  return (
    <select className={"mt-4"} value={status} onChange={changeStatusHandler}>
      <option value={null}>Выбрать статус</option>
      {fetchStatus.map((status) => (
        <option value={status.ID} key={status.ID}>
          {status.name}
        </option>
      ))}
    </select>
  );
}

export default Status;
