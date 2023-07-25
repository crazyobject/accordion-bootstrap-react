import "./App.css";
import MyAccordion from "./MyAccordion/MyAccordion";

function App() {
  const items = [
    {
      header: "Header One",
      body: "text,text,text,text,text,text,text,text,text,text,",
    },
    {
      header: "Header Two",
      body: "text,text,text,text,text,text,text,text,text,text,",
    },
    {
      header: "Header Three",
      body: "text,text,text,text,text,text,text,text,text,text,",
    },
  ];
  return (
    <div className="App">
      <center>My first Accordion</center>
      <br />
      <MyAccordion width={"100%"} items={items} />
    </div>
  );
}

export default App;
