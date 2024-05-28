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

## Scenario 3: useEffect without Dependency Array
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

## Scenario 4: Multiple useEffect
```mermaid
graph TD;
    G[Functional Component] --> H["useEffect(() => { /* effect code */ }, [])"]
    H -->|Runs after the component is first rendered| G
    G --> I["useEffect(() => { /* effect code */ }, [dependency])"]
    I -->|Runs after every render if 'dependency' changes| G
    G --> J["useEffect(() => { /* effect code */ return () => { /* cleanup code */ }; }, [])"]
    J -->|Runs right before the component is removed from the DOM| G
```
