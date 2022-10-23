import React, { useState, useEffect } from "react";
import "./assets/form.css";

const Form: React.FunctionComponent = () => {
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const getData = async () => {
    if (num && num.length >= 10) {
      if (name) {
        const p1 = await fetch("http://localhost:8000/new-contact", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            number: num,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const res = await p1.json();
        console.log(res);
      }
    }
  };
  return (
    <>
      <div className="container-fluid bg-dark text-light f-h">ADD INFO:-</div>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-12">
            <label>NAME:</label>
          </div>
          <div className="col-12">
            <input
              type={"text"}
              id="name"
              placeholder="Enter Name..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <label>PHONE NUMBER:</label>
          </div>
          <div className="col-12">
            <input
              type={"number"}
              id="number"
              placeholder="Enter Number..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNum(e.target.value.toString())
              }
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 panel d-flex">
            <button className="btn btn-warning" id="submit" onClick={getData}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
