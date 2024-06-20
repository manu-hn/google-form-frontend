
import { PersistGate } from "redux-persist/integration/react";

import './App.css'
import { Provider } from 'react-redux';
import appStore, { persistor } from "@/store/store.js";
import Body from './Body';


function App() {

  return (
    <Provider store={appStore}>
      <PersistGate persistor={persistor} loading={null}>

        <Body />
      </PersistGate>

    </Provider>
  )
}

export default App
