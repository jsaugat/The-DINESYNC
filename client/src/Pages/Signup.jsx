import { Button } from "@/shadcn/ui/button";
import { Container } from "../master.js";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup.js";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, email, password);
  };

  const inputCSS =
    "rounded-lg px-4 py-2 bg-transparent border border-onyx/70 focus:ring-white/20 focus:border-white/20 w-[350px]";

  return (
    <Container>
      <form
        className="h-[74vh] flex flex-col justify-start border border-onyx/60 rounded-[30px] w-fit px-24 py-24 mx-auto"
        onSubmit={handleSubmit}
      >
        <h3 className="text-6xl font-semibold mb-[5rem]">Sign up</h3>
        <div className="flex flex-col items-start">
          <label htmlFor="" className="mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className={`${inputCSS}`}
          />
          <label htmlFor="" className="mb-2 mt-5">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={`${inputCSS}`}
          />
          <label htmlFor="" className="mb-2 mt-5">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={`${inputCSS}`}
          />
        <Button variant="secondary" className="mt-16 w-full" disabled={isLoading}>
          Sign up
        </Button>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    </Container>
  );
}

export default Signup;
