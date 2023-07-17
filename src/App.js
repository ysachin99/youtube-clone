import './App.css';
import Header from './components/header/Header';
import Sidenav from './components/sidenav/Sidenav';
import Content from './components/content/Content';

function App() {
  return (
    <div className='app'>
      <Header />
      <Sidenav />
      <Content />

    </div>
  );
}

export default App;
