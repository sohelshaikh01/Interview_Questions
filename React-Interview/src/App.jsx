/* eslint-disable no-unused-vars */

// useState Questions
import UseState1 from "./components/UseState1";
import UseState2 from "./components/UseState2";

// useEffect Questions
import UseEffect1 from "./components/UseEffect1.jsx";
import UseEffect2 from "./components/UseEffect2.jsx";
import CleanUp1 from "./components/CleanFunction1";
import CleanUp2 from "./components/CleanFunction2";

// useLayout Questions
import UseLayoutEffect from "./components/useLayoutEffect";

// useRef Questions
import UseRef1 from "./components/UseRef1";
import UseRef2 from "./components/UseRef2";

// useContext Questions
import UseContext1 from "./components/UseContext1.jsx";
import ThemeSwitcher from "./components/ThemeSwitcher.jsx";

// useReducer Questions
import UseReducer1 from "./components/UseReducer1.jsx";
import UseReducer2 from "./components/UseReducer2.jsx";

// useImperitive Questions
import UseImperative1 from "./components/UseImperative1.jsx";
import FancyInput from './components/FancyInput.jsx';

// useId Questions
import UseId1 from "./components/UseId1.jsx";

// useTransition - useDeferred Questions
import UseTransition1 from "./components/UseTransition1.jsx";
import UseDeferred1 from "./components/UseDeferred1.jsx";

// new React Hooks
import Hooks from "./components/Hooks.jsx"; // First way
import UseActionState1 from "./components/UseActionState1.jsx";
// also useFormStatus hook inside it

// useOptimistic Questions
import UseOptimistic1 from "./components/UseOptimistic1.jsx";

// Creating Own Custom Hook
import DataFetcher from "./components/DataFetcher.jsx";

const App = () => {


  return (
    <div className="p-4 px-10 border">
      
      <h2 className='font-bold text-xl py-2 px-4 bg-purple-400 mb-8'>  React Hooks Questions</h2>
      
      {/* React 19 Handles the Memoization automatically so useCallback and useMemo is not taught. */}

      {/* <UseState1 /> */}
      {/* <UseState2 /> */}

      {/* <UseEffect1 /> */}
      {/* <UseEffect2 /> */}
      {/* <CleanUp1 /> */}
      {/* <CleanUp2 /> */}

      {/* <UseLayoutEffect /> */}

      {/* <UseRef1 /> */}
      {/* <UseRef2 /> */}

        {/* Not working Context Hooks */}

      {/* <UseContext1 /> */}
      {/* <ThemeSwitcher /> */}

      {/* <UseReducer1 /> */}
      {/* <UseReducer2 /> */}

      {/* <UseImperative1 /> */}
      {/* <FancyInput /> */}

      {/* <UseId1 /> */}

      {/* <UseTransition1 /> */}
      {/* <UseDeferred1 /> */}

      {/* <Hooks /> */}
      {/* <UseActionState1 /> */}

      {/* <UseOptimistic1 /> */}
      
      <DataFetcher />

    </div>
  )
}

export default App;
