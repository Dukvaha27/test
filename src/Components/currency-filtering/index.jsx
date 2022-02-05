import React, { useState } from "react";
import CurrencyDialog from "./CurrencyDialog";

function CurrencyFiltering({ setCurrency }) {
  const [dialog, setDialog] = useState(false);

  return (
    <>
      <div
        onClick={() => setDialog(true)}
        className={"border rounded-1 text-center p-1"}
        role={"button"}
      >
        валюта и обмен
      </div>
      {dialog && (
        <CurrencyDialog setDialog={setDialog} setCurrency={setCurrency} />
      )}
    </>
  );
}

export default CurrencyFiltering;
