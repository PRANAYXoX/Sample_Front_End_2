import React, { useState } from "react";
import "./assets/display.css";
interface obType {
  _id: number | string;
  name: string;
  number: string;
}
interface propType {
  contacts: Array<obType>;
}
const Disp: React.FunctionComponent<propType> = (props) => {
  const { contacts } = props;
  const [fl, setFl] = useState(false);
  const [pID, setPID] = useState("");
  console.log("DISPLAY", contacts);
  const eEdit = (id: string) => {
    console.log("Edit Option....");
    let name = document.getElementsByClassName(id);

    console.log(name);
    for (let i = 0; i < name.length; i++) {
      name[i].removeAttribute("disabled");
      name[i].setAttribute("style", "color:red;background-color:white;");
    }
    setFl(true);
    const btn = document.getElementById(id.toString().substring(18, 24));
    console.log("BTN", btn);
    btn?.removeAttribute("class");
    btn?.setAttribute("class", "fa fa-check");
  };

  const dDelete = async (id: number | string) => {
    console.log("Delete!", id);
    const p1 = await fetch("http://localhost:8000/delete-contact", {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const sEdit = async (id: string) => {
    console.log("Submit Edit");
    let name = document.getElementsByClassName(id);
    console.log(name);
    for (let i = 0; i < name.length; i++) {
      name[i].setAttribute("disabled", "true");
      name[i].setAttribute(
        "style",
        "color:white;background-color:transparent;"
      );
    }
    setFl(false);
    const btn = document.getElementById(id.toString().substring(18, 24));
    console.log("BTN", btn);
    btn?.removeAttribute("class");
    btn?.setAttribute("class", "fa fa-pencil");
  };

  return (
    <>
      <div className="container-fluid">
        {contacts.map((item: obType) => {
          return (
            <div className="row data-row" key={item._id}>
              <div className="col-2">
                <input
                  type={"text"}
                  value={item._id.toString().substring(18, 24)}
                  id="name1"
                  disabled
                />
              </div>
              <div className="col-4">
                <input
                  type={"text"}
                  value={item.name}
                  id="name1"
                  className={item._id.toString()}
                  disabled
                />
              </div>
              <div className="col-4">
                <input
                  type={"text"}
                  value={item.number}
                  className={item._id.toString()}
                  id="number1"
                  disabled
                />
              </div>
              <div className="col-1">
                <i
                  className="fa fa-pencil"
                  aria-hidden="true"
                  title="Edit"
                  id={item._id.toString().substring(18, 24)}
                  onClick={() => {
                    fl
                      ? sEdit(item._id.toString())
                      : eEdit(item._id.toString());
                  }}
                ></i>
              </div>
              <div className="col-1" title="Delete">
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  title="Delete"
                  onClick={() => dDelete(item._id)}
                ></i>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Disp;
