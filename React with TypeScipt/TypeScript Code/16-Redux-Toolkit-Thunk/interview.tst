Up until now you've learned:

React State       -> useState
Shared State      -> Context API
Global State      -> Redux Toolkit
Server State      -> React Query

Now we learn:

Async Redux
Redux Middleware
createAsyncThunk
Authentication Flow
RTK Query

These are the Redux concepts actually used in production.



Why createAsyncThunk Came?

Suppose you need:

Login User
Fetch Products
Fetch Blogs
Fetch Profile

All require APIs.


Redux team wanted:

Component
 ↓
dispatch(fetchUsers())
 ↓
Redux handles API
 ↓
Store updates

Much cleaner.


Redux Middleware
Interview Definition

Middleware is a function that sits between dispatching an action and the reducer. It allows handling side effects such as API calls, logging, authentication, and async operations.


dispatch(action)
      ↓
Middleware
      ↓
Reducer
      ↓
    Store


createAsyncThunk
Interview Definition

createAsyncThunk is a Redux Toolkit utility used for handling asynchronous operations such as API requests while automatically generating pending, fulfilled, and rejected actions.

Without AsyncThunk:

Component

Loading

Error

API

Redux

mixed together.

With AsyncThunk:

Component
 ↓
dispatch(fetchUsers())
 ↓
Redux
 ↓
Store

Cleaner.


RTK Query is a powerful data-fetching and caching solution built into Redux Toolkit that simplifies API requests, caching, synchronization, and mutations.

Without RTK Query
You write:

createAsyncThunk

extraReducers

loading

error

fulfilled

a lot.

With RTK Query
You write:
const {data}=useGetUsersQuery();

Done.


Industry Usage Today- 

Large Redux App
Often:
Redux Toolkit
RTK Query

Non Redux App
Often:
React Query

Both are common



Your Todo App taught:

Store
Slice
Actions
Reducers
Dispatch
Selector

Your Expense Tracker taught:

Typed Redux
RootState
AppDispatch
Real Data Structures

But both had one limitation:

Everything was synchronous.

No API.

No login.

No authentication.

No async operations.

That's exactly what Day 17 fixes.

Project We Will Build
User Management Dashboard

Features:

Login

Logout

Protected Routes

Fetch Users From API

Loading State

Error State

Redux Middleware

createAsyncThunk


Real Industry Flow

Suppose user clicks:

Login

What happens?

Beginner Thinking
onClick()
↓
fetch()
↓
setState()

Everything inside component.

Industry Thinking
Login Page
     ↓
dispatch(loginUser())
     ↓
createAsyncThunk
     ↓
API Call
     ↓
Reducer
     ↓
Store Update
     ↓
UI Re-render

Much cleaner.




Interview Definition
RTK Query is a powerful data-fetching and caching solution built into Redux Toolkit that automatically manages API requests, caching, loading states, error states, and data synchronization.

Biggest Diff:- 
# AsyncThunk vs RTK Query

## AsyncThunk

With **createAsyncThunk**, we manually write multiple layers for every API call:

* Service Layer
* Async Thunk
* Redux Slice
* extraReducers (pending, fulfilled, rejected)

Example flow:

```
Component
    ↓
dispatch(fetchUsers())
    ↓
createAsyncThunk
    ↓
Service Layer
    ↓
API
    ↓
extraReducers
    ↓
Redux Store
    ↓
UI
```

This gives you complete control but requires writing more boilerplate code.

---

## RTK Query

With **RTK Query**, most of this boilerplate is generated automatically.

Instead of creating:

* Service Layer
* Async Thunk
* Slice
* extraReducers
* Loading State
* Error State

You simply write:

```tsx
const { data, isLoading, error } = useGetUsersQuery();
```

RTK Query automatically handles:

* API Requests
* Loading State
* Error State
* Caching
* Refetching
* Cache Invalidation
* Generated Hooks

Example flow:

```
Component
    ↓
useGetUsersQuery()
    ↓
RTK Query API Slice
    ↓
API
    ↓
Redux Store
    ↓
UI
```

### Summary

| AsyncThunk                       | RTK Query                                 |
| -------------------------------- | ----------------------------------------- |
| Manual API handling              | Automatic API handling                    |
| Manual loading & error state     | Automatic loading & error state           |
| Requires service + thunk + slice | Only API Slice required                   |
| More boilerplate                 | Much less boilerplate                     |
| Better for custom async logic    | Best for CRUD and API-driven applications |

> **Interview Tip:** If your application already uses Redux and most of your asynchronous work involves CRUD operations, RTK Query is generally the preferred choice because it significantly reduces boilerplate while providing built-in caching, automatic refetching, and generated hooks.
