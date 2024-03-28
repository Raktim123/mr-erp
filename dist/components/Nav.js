"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/dist/css/bootstrap.min.css");
var react_1 = __importDefault(require("react"));
var Nav = function () {
    return (react_1.default.createElement("div", { className: "d-flex flex-column flex-shrink-0 p-3 bg-light", style: { width: '280px' } },
        react_1.default.createElement("a", { href: "/", className: "d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none" },
            react_1.default.createElement("svg", { className: "bi me-2", width: 40, height: 32 },
                react_1.default.createElement("use", { xlinkHref: "#bootstrap" })),
            react_1.default.createElement("span", { className: "fs-4" }, "Mr Group")),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("ul", { className: "nav nav-pills flex-column mb-auto" },
            react_1.default.createElement("li", { className: "nav-item" },
                react_1.default.createElement("a", { href: "#", className: "nav-link active", "aria-current": "page" },
                    react_1.default.createElement("svg", { className: "bi me-2", width: 16, height: 16 },
                        react_1.default.createElement("use", { xlinkHref: "#home" })),
                    "Home")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: "#", className: "nav-link link-dark" },
                    react_1.default.createElement("svg", { className: "bi me-2", width: 16, height: 16 },
                        react_1.default.createElement("use", { xlinkHref: "#speedometer2" })),
                    "Dashboard")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: "#", className: "nav-link link-dark" },
                    react_1.default.createElement("svg", { className: "bi me-2", width: 16, height: 16 },
                        react_1.default.createElement("use", { xlinkHref: "#table" })),
                    "Orders")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: "#", className: "nav-link link-dark" },
                    react_1.default.createElement("svg", { className: "bi me-2", width: 16, height: 16 },
                        react_1.default.createElement("use", { xlinkHref: "#grid" })),
                    "Products")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: "#", className: "nav-link link-dark" },
                    react_1.default.createElement("svg", { className: "bi me-2", width: 16, height: 16 },
                        react_1.default.createElement("use", { xlinkHref: "#people-circle" })),
                    "Customers"))),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("div", { className: "dropdown" },
            react_1.default.createElement("a", { href: "#", className: "d-flex align-items-center link-dark text-decoration-none dropdown-toggle", id: "dropdownUser2", "data-bs-toggle": "dropdown", "aria-expanded": "false" },
                react_1.default.createElement("img", { src: "https://github.com/mdo.png", alt: "", width: 32, height: 32, className: "rounded-circle me-2" }),
                react_1.default.createElement("strong", null, "mdo")),
            react_1.default.createElement("ul", { className: "dropdown-menu text-small shadow", "aria-labelledby": "dropdownUser2" },
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { className: "dropdown-item", href: "#" }, "New project...")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { className: "dropdown-item", href: "#" }, "Settings")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { className: "dropdown-item", href: "#" }, "Profile")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("hr", { className: "dropdown-divider" })),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { className: "dropdown-item", href: "#" }, "Sign out"))))));
};
exports.default = Nav;
