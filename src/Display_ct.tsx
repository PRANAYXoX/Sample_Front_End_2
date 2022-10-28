import React from "react";
interface obType {
  _id: number | string;
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
            <div className="row data-row" key={item._id}>
              <div className="col-2">
                {item._id.toString().substring(18, 24)}
              </div>
              <div className="col-4">{item.name}</div>
              <div className="col-4">{item.number}</div>
              <div className="col-1">
                <i className="fa fa-pencil" aria-hidden="true" title="Edit"></i>
              </div>
              <div className="col-1">
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  title="Delete"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Disp;
