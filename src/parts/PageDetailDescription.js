import React from "react";
// import parse from "html-react-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      <p className="text-gray-500 fw-light"></p>
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((item, index) => {
          return (
            <div
              key={`${index}-${item._id}`}
              className="col-3"
              style={{ marginBottom: 20 }}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                width={38}
                className="d-block mb-2"
              />
              <span>{item.qty}</span>&nbsp;
              <span className="text-gray-500 fw-light">{item.name}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
