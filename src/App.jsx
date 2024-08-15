import { useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, useLayoutEffect, createContext } from 'react';

const MyContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function App() {
    // useState
    const [count, setCount] = useState(0);

    // useEffect
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    // useContext
    const contextValue = useContext(MyContext);

    // useReducer
    const [state, dispatch] = useReducer(reducer, { count: 1000 });

    // useRef
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };

    // useMemo
    const memoizedValue = useMemo(() => count * 2, [count]);

    // useCallback
    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    // useLayoutEffect
    useLayoutEffect(() => {
        console.log('useLayoutEffect called');
    }, []);

    return (
        <div className="p-8 space-y-4">
            <h1 className="text-2xl font-bold">React Hooks Examples</h1>

            {/* useState Example */}
            <div>
                <h2 className="text-xl">useState</h2>
                <p>Count: {count}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCount(count + 1)}>
                    Increment
                </button>
            </div>

            {/* useEffect Example */}
            <div>
                <h2 className="text-xl">useEffect</h2>
                <p>Check the document title.</p>
            </div>

            {/* useContext Example */}
            <div>
                <h2 className="text-xl">useContext</h2>
                <p>Context Value: {contextValue}</p>
            </div>

            {/* useReducer Example */}
            <div>
                <h2 className="text-xl">useReducer</h2>
                <p>Reducer Count: {state.count}</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => dispatch({ type: 'increment' })}>
                    Increment
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded ml-2" onClick={() => dispatch({ type: 'decrement' })}>
                    Decrement
                </button>
            </div>

            {/* useRef Example */}
            <div>
                <h2 className="text-xl">useRef</h2>
                <input ref={inputRef} type="text" className="border p-2 rounded" />
                <button className="bg-yellow-500 text-white px-4 py-2 rounded ml-2" onClick={focusInput}>
                    Focus Input
                </button>
            </div>

            {/* useMemo Example */}
            <div>
                <h2 className="text-xl">useMemo</h2>
                <p>Memoized Value (count * 2): {memoizedValue}</p>
            </div>

            {/* useCallback Example */}
            <div>
                <h2 className="text-xl">useCallback</h2>
                <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={increment}>
                    Increment using useCallback
                </button>
            </div>

            {/* useLayoutEffect Example */}
            <div>
                <h2 className="text-xl">useLayoutEffect</h2>
                <p>Check the console for useLayoutEffect logs.</p>
            </div>
        </div>
    );
}

function AppWrapper() {
    return (
        <MyContext.Provider value="Hello from Context!">
            <App />
        </MyContext.Provider>
    );
}

export default AppWrapper;
