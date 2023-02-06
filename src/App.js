import Navigation from './Components/Navigation';
import './App.css';
import ContainerImage from './Components/ContainerImage';
import StartupComponent from './Components/StartupComponent'
import JobsComponent from './Components/JobsComponent';

function App() {
  return (
    <>
      <Navigation />
      <ContainerImage />
      <StartupComponent />
      <JobsComponent/>
    </>
  );
}

export default App;
