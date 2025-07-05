
import './App.css'
import { Routes, Route } from 'react-router-dom';
import GsapToFunction from './gsapFolder/gsapToFolder/GsapToo';
import MainHome from './MainHome';
import GsapFromFunc from './gsapFolder/gsapFromFolder/GsapFromFunc';
import GsapTimeLineFunc from './gsapFolder/gsapTimelineFolder/GsapTimeLineFunc';
import GsapStaggerFunc from './gsapFolder/gsapStaggerFolder/GsapStaggerFunc';
import GsapScrollTriggerFunc from './gsapFolder/gsapScrollTriggerFolder/GsapScrollTriggerFunc';
import GsapTextFunc from './gsapFolder/gsapTextFolder/GsapTextFunc';

const pathOfRoutes = [{
  id: 1,
  path: '/',
  elem: <MainHome />
}, {
  id: 2,
  path: '/gsapTo',
  elem: <GsapToFunction />
}, {
  id: 3,
  path: '/gsapFrom',
  elem: <GsapFromFunc />
  }, {
    id: 4,
    path: '/gsapTimeline',
    elem: <GsapTimeLineFunc />
  },
  {
    id: 5,
    path: '/gsapStagger',
    elem: <GsapStaggerFunc />
  }, {
    id: 6,
    path: '/gsapScrollTrigger',
    elem: <GsapScrollTriggerFunc />
  }, 
  {
    id: 7,
    path: '/gsapText',
    elem: <GsapTextFunc />
  }, 


]

function App() {

  return (
    <>
      <Routes>
        {
          pathOfRoutes.map((rou) => {
            return (
              <Route key={rou.id} path={rou.path} element={rou.elem} />
            );
          })
        }
      </Routes>
    </>
  )
}

export default App;
