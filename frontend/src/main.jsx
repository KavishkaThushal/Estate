import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from '@auth0/auth0-react'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-sjdirvl5bvbjgdfc.us.auth0.com"
    clientId="J83FxHkxoeIB2MVM5qjepds2slXKbIQF"
    authorizationParams={{
      redirect_uri:"http://localhost:5173"
    }}
    audience="http://localhost:9000"
    scope="openid profile email">
    <App />
    </Auth0Provider>
   
  </React.StrictMode>
);
