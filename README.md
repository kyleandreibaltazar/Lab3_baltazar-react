# DCIT26 - Laboratory Exercise 3: React Props and Component Communication

A Mini Product Catalog built with React and Vite demonstrating props, destructuring, default prop values, callback props, conditional rendering, and list rendering.

## Guide Questions

1. **What is the difference between props and state?**
   Props (properties) are read-only inputs passed from a parent component to a child component to configure it. State is mutable data managed internally within a component that triggers a re-render when updated.

2. **Why can a child component not modify the props it receives?**
   React enforces unidirectional (one-way) data flow where props are immutable inside the child. This keeps data predictable and ensures only the parent component that owns the data can change it.

3. **How does the `onAddToCart` callback allow data to flow from child to parent even though props only flow downward?**
   The parent defines a function and passes a reference to that function downward as a prop. When an event occurs in the child (such as clicking the button), the child invokes that function and passes arguments (like the product title) back up to the parent's scope.

4. **Why is the `key` prop required when rendering a list with `.map()`? What could happen if it is missing or duplicated?**
   The `key` prop helps React uniquely identify which list items were added, changed, or removed during re-renders. If keys are missing or duplicated, React may improperly reuse DOM elements, leading to UI glitches, mismatched component states, or degraded rendering performance.

5. **What does the `children` prop allow you to do that a normal prop does not?**
   The `children` prop lets you pass arbitrary JSX elements, HTML tags, or nested components directly between a component's opening and closing tags, making wrapper and container components much more flexible than passing plain strings or numbers via standard attributes.