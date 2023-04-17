import React from "react";
import styles from "../assets/CSS/Landing.module.css";
import { createPortal } from "react-dom";

const Backdrop = () => {
  return <div className="fixed inset-0 h-screen w-full backdrop-blur-lg z-50"></div>;
};

const Overlay = (props) => {
  const closeClickHandler = () => {
    props.setShowModal(false);
  };
  return (
    <div className={`${styles.scroll} overflow-y-scroll max-w-xl w-3/4 h-5/6 p-4 bg-white border-2 rounded fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}>
        <button className="fixed top-0 right-0 px-2 bg-purple-600 text-3xl" onClick={closeClickHandler} > X </button>
        {props.children}
    </div>
  )
}

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {createPortal(<Overlay setShowModal={props.setShowModal} />, document.getElementById("overlay"))}
    </>
  );
};

export default Modal;
