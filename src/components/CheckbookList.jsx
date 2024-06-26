import React, { useState } from "react";

function CheckbookList() {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  const [editData, setEditData] = useState("");
  const [indexNew, setIndexNew] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: todo.length + 1,
      name: e.target.querySelector("input[type='text']").value,
      status: false,
    };
    setTodo([...todo, newItem]);
    e.target.querySelector("input[type='text']").value = "";
    updateCount();
  };

  const handleCheck = (index) => {
    const newTodo = [...todo];
    newTodo[index].status = !newTodo[index].status;
    setTodo(newTodo);
    updateCount();
  };

  const handleDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
    updateCount();
  };

  const viewEdit = (index) => {
    setEditData(todo[index]);
    setIndexNew(index);
  };

  const handleChangeDataEdit = (e) => {
    setEditData({ ...editData, name: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newTodo = [...todo];
    newTodo[indexNew] = editData;
    setTodo(newTodo);
    setEditData("");
    setIndexNew(-1);
  };

  const updateCount = () => {
    setCount(todo.filter((t) => t.status).length);
  };

  return (
    <>
      {indexNew >= 0 ? (
        <form action="" onSubmit={handleEdit}>
          <input
            type="text"
            value={editData.name}
            onChange={handleChangeDataEdit}
          />
          <input type="submit" value="UPDATE" />
        </form>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <input type="text" />
          <input type="submit" value="add" />
        </form>
      )}

      {todo.map((item, index) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.status}
            onChange={() => handleCheck(index)}
          />
          {item.name}
          <button onClick={() => viewEdit(index)}> edit</button>
          <button onClick={() => handleDelete(index)}> delete</button>
        </div>
      ))}

      <p>
        Completed tasks: {count}/{todo.length}
      </p>
    </>
  );
}

export default CheckbookList;
