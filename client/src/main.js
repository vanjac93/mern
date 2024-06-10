"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ReactDOM = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./App");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(react_1.StrictMode, null,
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(App_1.default, null))));
//# sourceMappingURL=main.js.map