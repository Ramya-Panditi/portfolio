import './App.css';
import Photo from './Photo';
import Grid1 from './Grid1';
import Grid2 from './Grid2';
import Achievements from './Acheivements';
import Projects from './Projects';
import Skills from './Skills';
function Home() {
    return (
      <>
      <div className='container-fluid d-flex justify-content-center gap-5 my-5 flex-wrap'>
        <Grid1/>
        <Photo/>
        <Grid2/>
        <Achievements/>
        <Projects/>
        <Skills/>
      </div>
        <div className='text-center m-4'>Thanks for looking at my portfolio</div>
      </>
    );
  }
  export default Home;