import React, { useState } from "react";

function ChatMessage({ user, message, timestamp }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        className={
          "bg-clean-dark-800 w-full flex mb-2 p-2 rounded-md shadow-lg static"
        }
      >
        <h3>
          <span className={"text-delorean-500 mr-1.5"}>{timestamp}</span>
          <span
            className={"font-semibold cursor-pointer mr-2"}
            onMouseEnter={() => setShowModal(true)}
            onMouseLeave={() => setShowModal(false)}
          >
            {user.name}:
          </span>
          <span>{message}</span>
        </h3>
      </div>

      {showModal ? (
        <div
          className={
            "bg-clean-dark-800 w-max flex flex-col justify-center p-2 rounded-md shadow-lg absolute z-10 border border-primary-500"
          }
        >
          <div className={"flex flex-row items-center"}>
            <img
              src={user.thumbnail}
              className={"w-10 h-auto rounded-full mr-2"}
              alt={user.name}
            />
            <h3 className={"font-semibold"}>{user.name}</h3>
          </div>
          {/* <p className={""}>Beigetren: 15.10.2022</p> */}
        </div>
      ) : null}
    </div>
  );
}

export default ChatMessage;
