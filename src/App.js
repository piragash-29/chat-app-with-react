import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import LoginForm from "./pages/LoginForm";
function App() {
  return (
      // <Authenticator variation="modal">
      //     {({ signOut, user }) => (
              <div className="App">
                  <LoginForm />
              </div>
          // )}
      // </Authenticator>

  );
}

export default App;
