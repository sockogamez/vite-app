import Index  from "./pages/Index"
import Detail from "./pages/Detail";
import { BrowserRouter,Routes,Route} from "react-router-dom"

function App() {  
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Index/> } />            
      <Route path="/detail/:id/:nombre/:residencia/:imagen" element={ <Detail/> } />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
