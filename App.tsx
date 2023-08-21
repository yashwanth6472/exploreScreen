import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Explore from "./Screen/Explore";
import { Provider, useDispatch } from "react-redux";
import { applyMiddleware, configureStore, ThunkMiddleware } from "@reduxjs/toolkit";
import { mainReducer } from "./redux/reducer";
import thunk from "redux-thunk";


const App = () =>{



  const store = configureStore({
    reducer:{
      products: mainReducer
    },
    middleware: [thunk]
  },

  )
  console.log("------------------>", store)

  return(
      <Provider store={store}>
      <View style={{backgroundColor: '#030303', flex: 1}}>
      <Explore />
      </View>
      </Provider>
    
  )
}

export default App;