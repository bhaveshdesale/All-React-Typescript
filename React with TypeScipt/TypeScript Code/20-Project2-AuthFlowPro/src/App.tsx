import AppRoutes from "./routes/AppRoutes";
import PersistLogin from "./components/auth/PersistLogin";

function App() {
  return (
    <PersistLogin>
      <AppRoutes />
    </PersistLogin>
  );
}

export default App;

// New Flow
// App Starts
//       │
//       ▼
// PersistLogin
//       │
//       ▼
// Read LocalStorage
//       │
//       ▼
// restoreSession()
//       │
//       ▼
// Redux Updated
//       │
//       ▼
// Application Renders