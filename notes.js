// ----------------------------------------------------------------------------------------------------------------------------
//   REACT PRACTICE [JUN, 2024]
// ----------------------------------------------------------------------------------------------------------------------------

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
// const Home = Lazy(() => import './src/components/HomPage');

// return,
//   <Suspense fallback={<p>loading...</p>}>
//     <Home />
//   </Suspense>

//* HOOK [ useId() ] for identifying deferent id
// const id = useId();

// return,
//   <input htmlFor={`${id}-name`} />

//* Redux Toolkit
// // slice.js || create redux slice
// import { createSlice } from "@reduxjs/toolkit";
// import { manage } from "./new";


// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: [
//     { name: 'korim', age: 22 },
//     { name: 'basar', age: 20 },
//     { name: 'loffer', age: 28 },
//   ],
//   reducers: {
//     up: (state, action) => {
//       manage('second print!')
//       return [...state, action.payload];
//     },
//     down: (state, action) => {
//       const newName = action.payload.payload.name;
//       state[0].name = newName
//       return state;
//     },
//   }
// })

// export const { up, down } = counterSlice.actions;
// export default counterSlice.reducer;

// // store.js || create store
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice"

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   }
// })

// export default store;


// // pass data in all component with using app.js
// <Provider store={store}>
//   <Counter />
// </Provider>

// // using reducers function
// const dispatch = useDispatch();

// const handleUp = () =>
//   dispatch(up({ type: 'up', payload: { name: 'loyal', age: 11 } }));
// const handleDown = () =>
//   dispatch(down({ type: 'down', payload: { name: 'moffol', age: 19 } }));

// // using state data and display data
// const data = useSelector((state) => state);
// console.log(data.counter);

//* Redux Toolkit async thunk
// create redux async thunk function
export const manageAsync = createAsyncThunk('loadPost100', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  console.log('function trigged!');
  return data;
})

// add this in under the slice under the extraReducers
const counterSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    up: (state, action) => {
      return [...state, action.payload];
    },
    down: (state, action) => {
      const newName = action.payload.payload.name;
      state[0].name = newName
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(manageAsync.fulfilled, (state, action) => {

      return [...state, action.payload]
    })
  }

})

export const { up, down } = counterSlice.actions;
export default counterSlice.reducer;

// lastly use this redux Async thunk function and update the state
const dispatch = useDispatch();
const handlePost = () => dispatch(manageAsync());
