import React, { useState } from "react";

function UseStage() {
  const [status, setStatus] = useState(false);
  const [text, setText] = useState("");
  const [choose, setChoose] = useState("nam");
  const [hobbies, setHobbies] = useState([]);
  let num = text.split("").length;

  const handleSelected = (e) => setChoose(e.target.value);

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((h) => h !== value));
    }
  };

  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState(null);
  const [indexUpdate, setIndexUpdate] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("before ", data);
    setData([...data, e.target.search.value]);
    e.target.search.value = "";
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const viewEdit = (index) => {
    console.log(index);
    let dataEdit = data[index];
    setDataEdit(dataEdit);
    setIndexUpdate(index);
  };

  const handleChangeDataEdit = (e) => setDataEdit(e.target.value);

  const handleEdit = (e) => {
    e.preventDefault();
    const newData = [...data];
    newData[indexUpdate] = dataEdit;
    setData(newData);
    setDataEdit("");
    setIndexUpdate(-1);
    e.target.search.value = "";
  };

  return (
    <>
      {/* <div style={{ color: status ? "red" : "white" }}>UseStage</div>
      <button onClick={() => setStatus(!status)}>Toggle Status</button> */}
      <br /> ---------------------------------
      <br />
      {/* <div>
        text: {text}
        <br />
        textNumber: {num}
      </div>
      <input onChange={(e) => setText(e.target.value)}></input> */}
      <br /> ---------------------------------
      <br />
      {/* <h1>Selected: {choose}</h1>
      <input
        type="radio"
        name="option"
        value="nam"
        checked={choose === "nam"}
        onChange={handleSelected}
      />
      nam
      <input
        type="radio"
        name="option"
        value="nu"
        checked={choose === "nu"}
        onChange={handleSelected}
      />
      nu
      <input
        type="radio"
        name="option"
        value="gay"
        checked={choose === "gay"}
        onChange={handleSelected}
      />
      gay */}
      <br /> ---------------------------------
      <br />
      {/* <h2>Hobbies: {hobbies.join(", ")}</h2>
      <input
        type="checkbox"
        name="hobby"
        value="chill"
        onChange={handleHobbyChange}
      />
      chill
      <input
        type="checkbox"
        name="hobby"
        value="hang out"
        onChange={handleHobbyChange}
      />
      hang out
      <input
        type="checkbox"
        name="hobby"
        value="reading"
        onChange={handleHobbyChange}
      />
      reading
      <input
        type="checkbox"
        name="hobby"
        value="play game"
        onChange={handleHobbyChange}
      />
      play game */}
      <br /> ---------------------------------
      <br />
      {indexUpdate >= 0 ? (
        <form action="" onSubmit={handleEdit}>
          <input type="text" value={dataEdit} onChange={handleChangeDataEdit} />
          <input type="submit" value="UPDATE" />
        </form>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="search" />
          <input type="submit" value="ADD" />
        </form>
      )}
      {data.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => viewEdit(index)}> edit</button>
          <button onClick={() => handleDelete(index)}> delete</button>
        </li>
      ))}
    </>
  );
}

export default UseStage;
