## What is `useEffect`
`useEffect` is a hook in React that allows you to perform side effects in functional components. Side effects can include things like fetching data, subscribing to events, or manually changing the DOM.

## Scenario 1: Basic `useEffect`

```mermaid
graph TD;
    A[Functional Component] --> B["useEffect(() => { /* effect code */ }, [])"]
    B -->|Runs after the component is first rendered| A
```

## Scenario 2: `useEffect` with Dependency

```mermaid
graph TD;
    C[Functional Component] --> D["useEffect(() => { /* effect code */ }, [dependency])"]
    D -->|Runs after every render if 'dependency' changes| C
```

## Scenario 3: `useEffect` without Dependency Array
```mermaid
graph TD;
    K[Functional Component] --> L["useEffect(() => { /* effect code */ })"]
    L -->|Runs after every render| K
```

## Scenario 4: `useEffect` with cleanup

```mermaid
graph TD;
    E[Functional Component] --> F["useEffect(() => { /* effect code */ return () => { /* cleanup code */ }; }, [])"]
    F -->|Runs right before the component is removed from the DOM| E
```
