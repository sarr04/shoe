import { Card } from "./components/Card";
import { Nav } from "./components/Nav";
import "./App.css";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";
function App() {
  return (
    <div className=" animate-fadeIn p-10 xl:px-24 ">
      {/* <Nav />
     <ShoeDetail />*/}
      <Card item={SHOE_LIST[0]} />
    </div>
  );
}

export default App;
