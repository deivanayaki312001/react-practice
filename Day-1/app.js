/*const head = React.createElement("div", { className: "heading" }, "Hello")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);
console.log(head);*/

const parent = React.createElement(
    "div", { id: 'parent' }, [
        React.createElement(
            "div", { id: 'child1' }, [
                React.createElement("h1", { className: 'heading' }, "HELLO"),
                React.createElement("h2", { className: 'heading' }, "HELLO")
            ]
        ),
        React.createElement(
            "div", { id: 'child2' }, [
                React.createElement("h1", { className: 'heading' }, "HELLO"),
                React.createElement("h2", { className: 'heading' }, "HELLO")
            ]
        )
    ]
);

// Assuming you are rendering this in an element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);