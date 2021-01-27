import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TwitterApp from "./containers/TwitterApp/TwitterApp";

function App() {
  return (
    <MuiThemeProvider>
      <TwitterApp />
    </MuiThemeProvider>
  );
}

export default App;
