## Lab 4: Guide Questions (useState & useEffect)

1. **Why do we use two separate states, `searchText` and `debouncedSearch`, instead of only one?**
   `searchText` updates immediately on every keystroke so the controlled input stays responsive to the user's typing, while `debouncedSearch` updates only after the user pauses typing, preventing expensive filtering or API calls on every single character.

2. **What would happen if the debounce effect did not return a cleanup function?**
   Every keystroke would schedule a separate 300ms timer that never gets canceled. Instead of waiting for a single pause, `debouncedSearch` would still update repeatedly for every single keystroke just delayed by 300ms.

3. **What is the purpose of the dependency array? What happens if it is empty (`[]`)? What happens if it is left out completely?**
   The dependency array tells React which reactive values should trigger the effect to re-run when they change. If it is empty (`[]`), the effect runs only once when the component mounts; if it is omitted completely, the effect runs after every single render.

4. **Why should we avoid sorting the original `products` array directly?**
   JavaScript's `.sort()` mutates the array in place. Mutating imported or shared source data directly breaks React's immutability rules, permanently alters the default ordering, and can cause unpredictable bugs when resetting filters.

5. **Is the filtered product list better stored in its own state, or calculated from existing state during rendering? Explain your choice.**
   It is better calculated directly during rendering as derived data. Storing it in separate state creates redundant state that requires extra `useEffect` synchronization and risks becoming out of sync with `debouncedSearch`, `category`, or `sortOrder`.