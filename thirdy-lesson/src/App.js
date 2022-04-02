// import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import { getAllTodos } from "./actions";
import { todosService } from "./Api/services/Todos";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [isShowed, setShowed] = React.useState(false);

  const hOneRef = React.useRef();

  // const getTodosId = (id) => {
  //   todosService.getTodosById(id).then(({ data }) => console.log("resp", data));
  // };

  const handle = (state) => {
    state &&
      todosService.getTodosById().then(({ data }) => console.log("resp", data));
  };

  const handleGetTodosId = React.useCallback(
    (id) => {
      handle(isShowed);
    },
    [isShowed]
  );

  const handleMemo = React.useMemo(() => {
    let changed = todos;

    changed = todos.slice();

    return changed;
  }, [todos]);

  React.useEffect(() => {
    // getAllTodos(setTodos);
    !isShowed &&
      todosService.getAllTodos().then(({ data }) => {
        setTodos(data);
      });
  }, [isShowed]);

  return (
    <div onClick={() => console.log(todos)}>
      test
      {handleMemo?.map(({ id }) => (
        <h1
          ref={hOneRef}
          key={id}
          onClick={() => {
            handleGetTodosId(id);
            setShowed(!isShowed);
          }}
        >
          Salam
        </h1>
      ))}
    </div>
  );
}

export default App;
