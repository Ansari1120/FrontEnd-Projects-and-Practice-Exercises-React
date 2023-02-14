import { useState } from "react";
function App() {
    const [count, setCount] = useState(0);
    const countHandler = () => {
        setCount((pervCount) => pervCount + 1);
        // bad practice : setCount (count + 1);
    }
    return (
        <>



            {count}  <button onClick={countHandler}> + </button>
            {/* we cant render data as it is called immediately when the program runs */}
            {/* <button onClick={setCount(count+1)}> + </button> */}

        </>
    );
}

export default App;
