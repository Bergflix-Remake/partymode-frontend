import React from "react";
import ChatMessage from "./Message/ChatMessage";


function Chat() {

    return (
        <>
            <ChatMessage user={{name: "lyxt", color: "#339CFF", thumbnail: "https://cdn.discordapp.com/avatars/263003918617804800/2b182528423eb7a7b04faccc2e9cef1f.webp?size=160"}} message={"Boah, das war vielleicht grad ekelhaft 🤢"} timestamp={"22:21"}/>
            <ChatMessage user={{name: "Mondmarmelade", color: "#269C26", thumbnail: "https://cdn.discordapp.com/avatars/744995814275022869/406f01e048ede87d5660bf5f60647546.webp?size=128"}} message={"Ich hätt grad richtig lust auf Marmelade 🌚"} timestamp={"22:22"}/>
            <ChatMessage user={{name: "Anniken", color: "#C129D9", thumbnail: "https://cdn.discordapp.com/avatars/358663298779971584/015c173d1d0c862993e40a8aa0ba69e8.webp?size=128"}} message={"Back to work, ihr Spinner!"} timestamp={"22:22"}/>
        </>
    )
}

export default Chat;