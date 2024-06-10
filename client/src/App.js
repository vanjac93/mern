"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const styled_components_1 = require("styled-components");
const Providers_1 = require("./components/Providers");
const StyledApp = styled_components_1.default.div `
  // Your style here
`;
function App() {
    x = 5;
    return (React.createElement(StyledApp, null,
        React.createElement("div", null, "vanjsssa"),
        React.createElement(Providers_1.default, null)));
}
exports.App = App;
exports.default = App;
//# sourceMappingURL=App.js.map