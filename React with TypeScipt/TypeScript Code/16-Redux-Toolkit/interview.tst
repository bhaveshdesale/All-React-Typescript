Redux Toolkit

Redux Toolkit is the official, recommended way to write Redux logic. It simplifies state management by reducing boilerplate and providing tools like createSlice and configureStore.

Core Redux Flow

Component

↓

dispatch(action)

↓

Reducer

↓

Store Updated

↓

UI Re-renders

1. Store
The Redux Store is a centralized container that holds the entire application's global state.

2. Slice
A slice is a collection of Redux state and reducers for a specific feature.

Without slice:

Action Types

Actions

Reducers

all separate

3. Actions
Actions are plain JavaScript objects that describe what happened in the application.

4. Reducers
Reducers are pure functions that determine how the state changes based on dispatched actions.

RootState
RootState represents the complete Redux state tree.

AppDispatch
AppDispatch is the type of the Redux store's dispatch function.


Perfect. For learning Redux Toolkit, we should build a project that uses:

Store
Slice
Actions
Reducers
useDispatch
useSelector
TypeScript
RootState
AppDispatch

and nothing more.

A Todo App is actually perfect for this.