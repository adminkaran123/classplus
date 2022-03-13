import React from "react";

export default function Modal({ img, onClose }) {
  return (
    <>
      {img !== "" && (
        <>
          <div className="overlay"></div>
          <div className="modal">
            <div className="modal-content">
              <button className="close" onClick={onClose}>
                X
              </button>
              <img src={img} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
