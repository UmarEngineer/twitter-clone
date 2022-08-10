
import Container from './layouts/Container';
import SideBar from './layouts/SideBar';
import Content from './layouts/Content';
import Widgets from './layouts/Widgets';
import './App.css'

if(window.screen.availWidth <= 360){
  document.onclick = (e) => {
    e.stopPropagation( );
    e.preventDefault( );
  }
}

const App = () => {
  return (
    <>
      <Container>
        <SideBar />
        <Content />
        <Widgets />
      </Container>
    </>
  );
}

export default App;
