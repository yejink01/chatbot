import React, { useState } from "react";

function ChatBotPage() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  function sendMessage() {
    setMessages([...messages, { text: inputMessage, sender: "user" }]);
    setInputMessage("");
    // 챗봇 응답 로직
    const sampleQuestions = ["안녕", "기분이 어때?", "취미가 뭐야?"];
    const sampleAnswers = [
      "안녕하세요!",
      "저는 기분이 항상 좋아요.",
      "저는 책 읽는 것을 좋아해요.",
    ];

    const questionIndex = sampleQuestions.findIndex((question) =>
      inputMessage.includes(question)
    );

    if (questionIndex > -1) {
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: inputMessage, sender: "user" },
          { text: sampleAnswers[questionIndex], sender: "bot" },
        ]);
      }, 1000);
    } else {
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: inputMessage, sender: "user" },
          { text: "잘 이해하지 못했습니다. 다시 말씀해주세요.", sender: "bot" },
        ]);
      }, 1000);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">채팅 봇 페이지</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto w-full sm:w-1/2 lg:w-1/3">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`rounded px-3 py-2 ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={sendMessage}
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBotPage;
