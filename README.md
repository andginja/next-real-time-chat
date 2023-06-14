# next-real-time-chat

## Key Technical Decisions and Libraries Employed

### react-hook-form:

Performance is paramount in any project, and react-hook-form has been a key player in achieving this. This library optimizes form management in React by minimizing unnecessary re-renders. It uses uncontrolled components and native form behaviors, resulting in less JavaScript load. I've employed react-hook-form to manage form states and perform client-side validation, striking a balance between performance and developer experience.

### Context API with Providers:

I've utilized React's built-in Context API to handle global state management without resorting to prop drilling. This efficient approach allows me to share state and behavior across my component tree. In this project, I encapsulated the login logic within the Context API, demonstrating its usage while concurrently managing that context with a custom useLocalStorage hook.

### Custom Hooks (useFormManager, useFormSubmit and useChat):

Custom hooks, a potent feature in React, have allowed me to extract and reuse stateful logic across components. This promotes code reusability and ensures a clear separation of concerns.

### Running the project

Within this context, npm run dev should be enough, we can add a production run or even wrap the project in a Docker container.
The only dependency to this project is a WebSocket-based server, which will be demonstrated in the project debate.
