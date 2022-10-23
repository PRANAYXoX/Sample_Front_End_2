import React from "react";
interface obType {
  id: number;
  name: string;
  number: string;
}
interface propType {
  contacts: Array<obType>;
}
const Disp: React.FunctionComponent<propType> = (props) => {
  console.log("PROPS", props);
  const { contacts } = props;
  console.log("DISPLAY", contacts);
  return (
    <>
      <div className="container-fluid">
        {contacts.map((item: obType) => {
          return (
            <div className="row data-row">
              <div className="col-2">{item.id}</div>
              <div className="col-6">{item.name}</div>
              <div className="col-4">{item.number}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Disp;
