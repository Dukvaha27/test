import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectTags } from "./Redux/features/tags";
import Tags from "./Components/tags";
import "bootstrap/dist/css/bootstrap.min.css";
import Status from "./Components/status";
import OperationType from "./Components/operation-type";
import CurrencyFiltering from "./Components/currency-filtering";
import { fetchAdmin } from "./Redux/features/order";

function App() {
  const dispatch = useDispatch();
  const tags = useSelector(selectTags);

  const [tagId, setTagId] = useState([]);
  const [tagIdArray, setTagIdArray] = useState(tagId);
  const [status, setStatus] = useState(null);
  const [operationType, setOperationType] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [selectedTag, setSelectedTag] = useState([]);

  const resetFilter = () => {
    setStatus(null);
    setTagIdArray([]);
    setOperationType(null);
    setCurrency(null);
    setSelectedTag([]);
  };

  useEffect(() => {
    dispatch(fetchAdmin(tagIdArray, status, operationType, currency));
  }, [tagIdArray, status, operationType, currency]);

  const tagProps = {
    setTagId,
    setTagIdArray,
    tags,
    tagIdArray,
    tagId,
    selectedTag,
    setSelectedTag,
  };

  return (
    <div className={"container"}>
      <div className="row">
        <div className="col-8">
          <Tags {...tagProps} />
        </div>
        <div className={"col-4"}>
          <div className={"mt-3"}>
            <button onClick={resetFilter} className="btn btn-warning">
              Сбросить фильтры
            </button>
          </div>
          <Status status={status} setStatus={setStatus} />
        </div>
      </div>
      <div className="row align-items-end mt-5">
        <div className="col-2">
          <p>имя лида</p>
          <input type="text" />
        </div>
        <div className="col-2">
          <p>ID заявки</p>
          <input type="text" />
        </div>
        <div className="col-2">
          <p>тип операции</p>
          <OperationType
            operationType={operationType}
            setOperationType={setOperationType}
          />
        </div>
        <div className="col-2">
          <p />
          <CurrencyFiltering setCurrency={setCurrency} />
        </div>
        <div className="col-2"></div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default App;
