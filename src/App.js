import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CounterButtons from "./components/CounterButtons";
import CounterButtonsRedux from "./components/CounterButtonsRedux";
import CounterButtonsZustand from "./components/CounterButtonsZustand";
import ResetButton from "./components/ResetButton";
import Footer from "./components/Footer";

//! *********** REDUX ***********/
import { Provider } from "react-redux";
import { reduxStore } from "./stores/reduxStores";
//! *********** END  ***********/

function App() {
  const [value, setValue] = useState(0);

  return (
    <Provider store={reduxStore}>
      <div className="app-container">
        <Header />
        <main>
          <CounterButtonsRedux />
          <CounterButtonsZustand />
          <CounterButtons value={value} setValue={setValue} />
          <ResetButton setValue={setValue} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
