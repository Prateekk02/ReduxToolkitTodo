# Redux Toolkit
## Basic Terminologies

### Slice 
- A slice is a collection of Redux reducer logic and actions for a specific part of the application state.
- Each slice manages a portion of the Redux state, and RTK provides the createSlice function to create a slice that includes action creators, action types, and reducers.

### Store
- The store is the centralized location where the entire state of the application is stored.
- With Redux Toolkit, creating a store is simplified using configureStore, which automatically sets up the Redux DevTools and middleware.

### Reducers
- A reducer is a pure function that specifies how the state changes in response to dispatched actions.
- In Redux Toolkit, each slice creates its own reducer functions, which can be combined into the store using configureStore.

### Action and Action Creator
- An action is an object that contains a type property (indicating the action's purpose) and a payload (optional data to update the state).
- An action creator is a function that returns an action.
- With createSlice, Redux Toolkit automatically generates action creators for each reducer in the slice.

### createAsyncThunk
- createAsyncThunk is a function in RTK for handling asynchronous actions like API calls.
- It allows you to define a thunk that will automatically dispatch pending, fulfilled, and rejected actions based on the result of the async function.

### Immer
- Redux Toolkit uses Immer under the hood to enable "mutative" syntax in reducers, allowing you to write code that appears to mutate state (e.g., state.value += 1), while Immer makes sure the state remains immutable.

### Middleware
- Middleware allows intercepting actions dispatched to the store to add custom behavior.
- Redux Toolkit automatically includes the Redux Thunk middleware for handling async actions, and you can customize it using configureStore.

### Selectors
- Selectors are functions that retrieve specific pieces of state from the Redux store, making it easier to access nested state and compute derived data.
- They can be defined as simple functions or using createSelector from the reselect library for memoization.

## Overall flow
### Step 1:
- Make src/app/store.js
- use configureStore method

### Step 2:
- Make reducers
- mkdir src/features/todo
- touch src/features/todoSlice.js 
- Use createSlice and nanoid methods 
- Follow todoSlice.js file.   
- While defining reducers -> you have to pass reference of the function in the reducers and you have to define the function there itself.
- Each function in reducers has to parameters (state, action).
- state -> The state parameter represents the current state of the slice before any modifications are applied.
- action -> The action parameter contains information about what change should happen in the state.
- We will create required functions in reducers.
- We will also export all the functions from todoSlice.actions

### Step 3:
- We will register all the registers for store.js
- for this we use todoSlice.reducer

### Step 4
- useDispatch() -> it uses reducers to add data in 'store'
- useSelector() -> it gives use access of state and from that state we can get any values from the store. 