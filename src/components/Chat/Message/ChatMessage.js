import React from "react";


function ChatMessage({user, message, timestamp}) {
    return (
        <>
            <div className={"w-full flex-col pr-5 pl-5 pb-1 pb-1 mt-3 flex flex-col bg-clean-dark-700 rounded-lg mb-3"}>
                <div className={"w-full flex xl:flex-row"}>
                    <div className={"w-2/12 p-1.5"}>
                        <img src={user.thumbnail} className={"w-10 h-auto rounded-full"} alt={user.name}/>
                    </div>
                    <div className={"w-10/12 pt-3"}>
                        <b className={"mr-1"}>{user.name}</b>
                        <small>{timestamp}</small>
                    </div>
                </div>
                <div className={"w-full pt-2 pl-1.5"}>
                    {message}
                </div>
            </div>
        </>
    )
}

export default ChatMessage;