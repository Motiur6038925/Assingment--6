import Content from "./component/Content/Content";
import Header from "./component/Header/Header";
import Footer from './component/Footer/Footer';




function App() {

const Title = "My Frist React App"


  return(
    <div >
      <Header Title={Title}/>
      <Content/>
      <Footer/>
     
    </div>
  )
  
}

export default App;

