import { useState, useEffect } from "react";

export default function IndexPage() {
  const [inputValue, setinputValue] = useState("second");
  const [name, setName] = useState();
  const [list, setList] = useState([]);
  useEffect(() => {
    loadList();
  }, []);

  const loadList = () => {
    fetch("https://api.zenon.si/post")
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      });
  };

  const tweet = () => {
    if (inputValue !== "" && name !== "") {
      setinputValue("");
      fetch("https://api.zenon.si/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, content: inputValue }),
      }).then(() => loadList());
    }
  };
  return (
    <div className="min-h-full bg-gray-100 flex flex-col items-center justify-center ">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          tweet();
        }}
        className="w-1/2 flex flex-col items-end"
      >
        <div className="w-full mt-10 mb-2 bg-white p-6 rounded-lg shadow">
          <h1>Name</h1>
          <input
            type="text"
            value={name}
            required
            className="bg-white w-full  w- p-2 rounded-lg mt-2"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="w-full  bg-white p-6 rounded-lg shadow">
          <textarea
            className="outline-none w-full resize-none"
            value={inputValue}
            rows={8}
            onChange={(event) => {
              setinputValue(event.target.value);
            }}
          />
          {/* <input
            type="text"
            className="bg-red-400"
            value={inputValue}
            onChange={(event) => {
              setinputValue(event.target.target);
            }}
          /> */}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold  px-6 py-2 rounded-lg"
          onClick={tweet}
          type="submit"
        >
          Tweet
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 mt-4 text-white font-bold  px-6 py-2 rounded-lg"
          type="button"
          onClick={loadList}
        >
          Refresh
        </button>
      </form>
      <div className="w-1/2 mt-8">
        {list.map((data) => {
          return (
            <div
              key={data.id}
              className="mt-4 bg-white rounded-lg shadow-lg p-4"
            >
              <h1 className=" text-xl font-bold">{data.name}</h1>
              <div className="mt-2 text-gray-600">{data.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
