import "./assets/App.css";
import React, { useEffect, useState } from "react";
import Disp from "./Display_ct";
import Form from "./contactForm";

interface obType {
  id: number;
  name: string;
  number: string;
}
interface propType {
  contacts: Array<obType>;
}
const App: React.FunctionComponent = () => {
  const [ct, setCt] = useState<
    [{ _id: number | string; name: string; number: string }]
  >([{ _id: "", name: "", number: "" }]);
  useEffect(() => {
    (async function getContacts() {
      const res1: any = await fetch("http://localhost:8000/fetch-contacts");
      let res2: any = await res1.json();
      console.log("RES:", res2);
      setCt(res2.contacts);
    })();
  }, []);
  return (
    <div className="App container-fluid">
      <div className="row header">
        <div className="col-8 hd  bg-warning text-light d-flex justify-content-center">
          CONTACTS
        </div>
        <div className="col-4 hd bg-warning text-light d-flex justify-content-center">
          FORM
        </div>
      </div>
      <div className="row page-wrapper">
        <div className="ct-list col-8 bg-dark text-light">
          <Disp contacts={ct} />
        </div>
        <div className="form-wrapper col-4 p-0">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
