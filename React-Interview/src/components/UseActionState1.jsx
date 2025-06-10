'use client';
import { useActionState } from 'react'; // ✅ React 19+ only
import { loginUser } from "../api/loginUser.js";
import { useTransition } from 'react'; // for fallback loading if needed

// useFormStatus
import UseFormStatus1 from "./UseFormStatus1.jsx";

// Your component needs to be a proper React Component (PascalCase and returns JSX)
const UseActionState1 = () => {
  // Move function definition before it's used
  // It is newer hook and use only with React 19 or later

  // The form submit action
  async function loginIt(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await loginUser(username, password);
      // Already Existed Commit: API call + return new state with data
      return {
        data: response.data,
        error: null
      };
    } catch (error) {
      // Already Existed Commit: Error captured and returned
      return {
        data: null,
        error: "Login failed. Please check credentials."
      };
    }
  }

  // ✅ Only 2 values returned
  const [state, submitAction] = useActionState(loginIt, {
    data: null,
    error: null,
  });

  return (
    <form action={submitAction}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          className="outline-none border-2 border-sky-300 py-1 px-4 text-white mb-2 ml-4"
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          className="outline-none border-2 border-sky-300 py-1 px-4 text-white mb-2 ml-4"
          required
        />
      </div>

      {/* <button type="submit" className="bg-blue-300 text-white py-1 px-4 mb-2">
        Login
      </button> */}

      <UseFormStatus1 />

      {/* Already Existed Commit: Show login success or failure messages */}
      {state?.data && (
        <p style={{ color: "green" }}>Logged in: {state.data.email}</p>
      )}
      {state?.error && (
        <p style={{ color: "red" }}>{state.error}</p>
      )}
    </form>
  );
};

export default UseActionState1;
