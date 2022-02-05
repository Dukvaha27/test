import React, { useEffect, useState } from "react";
import styles from "./currency.module.css";
import {
  loadCurrency,
  selectCurrency,
} from "../../Redux/features/currencyFiltering";
import { useDispatch, useSelector } from "react-redux";

function CurrencyDialog({ setCurrency, setDialog }) {
  const dispatch = useDispatch();
  const currencies = useSelector(selectCurrency);

  const [currencyId, setCurrencyId] = useState(null);

  const changeCurrencyIdHandler = (e) => {
    const id = Number(e.target.value);
    setCurrencyId(id);
  };

  const addCurrencyIdHandler = () => {
    setCurrency(currencyId);
    setDialog(false);
  };

  useEffect(() => {
    if (!currencies.length) {
      dispatch(loadCurrency());
    }
  }, []);

  return (
    <div className={styles.currency_dialog}>
      <div className={"d-flex justify-content-between align-items-center px-2"}>
        <h4>Валюта и обмен</h4>
        <span
          onClick={() => setDialog(false)}
          className={"rounded-circle bg-light"}
          role={"button"}
        >
          X
        </span>
      </div>
      <hr />
      <div>
        <p>валюта</p>
        <select
          value={currencyId}
          onChange={changeCurrencyIdHandler}
          className={"w-100 my-1"}
        >
          <option />
          {currencies.map((currency) => (
            <option value={currency.ID} key={currency.ID}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={addCurrencyIdHandler} className={"btn btn-success"}>
          Добавить
        </button>
      </div>
    </div>
  );
}

export default CurrencyDialog;
