// client/src/App.js
import { Route,Routes} from 'react-router-dom';
import Home from './Home';
import Drip from './Drip';
function App() {
   return  (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/drip" element={<Drip />} />
            </Routes>
    );
}

export default App;
