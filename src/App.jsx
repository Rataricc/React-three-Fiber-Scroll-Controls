import { Suspense } from "react";
import "./App.css";
//import "./termemotro.css";

import Scene from "./components/Scene";
//import Labels2 from "./components/Labels2.0";
//import Labels2 from "./components/Labels2.0";
//import Labels from "./components/Labels";
//aca iba el componente lebels; 

function App() {
    return (
        <>
            <div className='scene_container'>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </div>
            {/*<Labels/> 
            <Labels2 /> */}
            
        </>
    );
}

export default App;
