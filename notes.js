// ----------------------------------------------------------------------------------------------------------------------------
//   REACT PRACTICE [JUN, 2024]
// ----------------------------------------------------------------------------------------------------------------------------

import { Suspense } from "react";

//* 1.vite react setup:
// `-> npm install create vite@latest`
// `-> npm install`
// `-> npm run dev`

//* HOOK [ UseState() ]
// const [state, setState] = useState(initialState)

// const [count, setCount] = useState(0); // dealer main state management

// onClick = handleClick(setCount(count + 1)) // call the state function to maintaining useState()

//* HOOK [ UseReducer() ]
// const [state, dispatch] = useReducer(reducer-function, initialArg)

// const initialState = [ // initial state
//   { name: 'josim', age: 33 },
//   { name: 'masud', age: 56 },
//   { name: 'roman', age: 17 },
// ];

// const reducer = (state, action) => { // reducer maintaining function
//   const data = state.filter((el) => el.name !== 'masud');
//   data.push(action?.payload);
//   return [...data];
// };

// const [state, dispatch] = useReducer(reducer, initialState); // useReducer main state management

// return,
// onClick = handleClick(dispatch({ type: 'demo', payload: { name: 'mina', age: 21 } })) // call the dispatch function to maintaining useReducer() states

//* HOOK [ useRef() ]
// const ref = useRef(initialValue)

// const anyRef = useRef(); // reference hook like getElementById

// useEffect(() => {
//   console.log(anyRef.current);
//   anyRef.current.classList.add('text-7xl');
// }, []);

// return,
// <p ref={anyRef}> Temo </p>;

//* HOOK [ useCallback() ]
// const cachedFn = useCallback(fn, dependencies)

// const handleFunc = useCallback(() => {
//   setData({ name: 'tosi', age: '35' });
//   console.log('useCallback');
// }, []);

// return,
// onClick = {() => handleFunc()}

//* HOOK [ useMemo() ]
// const cachedValue = useMemo(calculateValue, dependencies)

// const memoizedComponent = useMemo(() => {
//   return <Child />;
// }, []);

// return,
// { memoizedComponent }

//* HOOK [ Memo() function ]
// const Main = memo(() => {
//   return (
//     <main>
//       <AnotherComp />
//       <AnyComp />
//     </main>
//   )
// })

//* Lazy loading and suspense
const Home = Lazy(() => import './src/components/HomPage');

return,
  <Suspense fallback={<p>loading...</p>}>
    <Home />
  </Suspense>
