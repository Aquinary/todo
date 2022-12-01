import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header"
import TodoList from "./components/TodoList/TodoList";
import TodoPage from "./components/TodoPage/TodoPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <TodoList></TodoList>
        <TodoPage></TodoPage>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
