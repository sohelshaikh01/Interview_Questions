import { useFormStatus } from "react-dom";

const UseFormStatus1 = () => {

    const { pending } = useFormStatus();
    // We can use pending in through this hook without props drilling.
    // useFormStatus has the context of form where it is using;

  return (
    <button type="submit" className="bg-blue-300 py-1 px-4 mb-2">
        {pending ? "Loading in..." : "Login"}
    </button>
  )
}

export default UseFormStatus1;
