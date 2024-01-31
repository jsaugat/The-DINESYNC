import { Button } from "@/components/ui/button";
import { Container } from "../master.js";
import { useState } from "react";
import { useSignup } from "@/hooks/useSignup.js"

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email,password);
  };

  const inputCSS = "rounded-lg px-4 py-2 bg-transparent border border-onyx/70 focus:ring-white/20 focus:border-white/20 w-[300px]"

  return (
    <Container>
    <form className="signup flex flex-col items-start border border-onyx/50 rounded-[30px] w-fit px-24 py-24 mx-auto" onSubmit={handleSubmit}>
      <h3 className="text-5xl mb-12 mx-auto">Sign up</h3>
      <label htmlFor="" className="mb-2">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={`${inputCSS}`}
      />
      <label htmlFor="" className="mb-2 mt-5">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className={`${inputCSS}`}
      />
      <Button variant="secondary" className="mt-16" disabled={isLoading}>Sign up</Button>

      {error && <div className="error">{error}</div>}
    </form>
    </Container>
  );
}

export default Signup;
