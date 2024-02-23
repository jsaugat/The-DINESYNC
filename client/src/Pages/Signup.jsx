import { Button } from "@/shadcn/ui/button";
import { Container } from "../master.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus()
  }, [])

  const signupHandler = async (e) => {
    e.preventDefault();
  };

  const inputCSS =
    "rounded-lg px-4 py-2 bg-transparent border border-onyx/70 focus:ring-white/20 focus:border-white/20 w-[350px]";

  return (
    <Container>
      <form
        className="h-[84vh] flex flex-col justify-start border border-onyx/60 rounded-[30px] w-fit px-24 py-24 mx-auto"
        onSubmit={signupHandler}
      >
        <h3 className="text-6xl font-semibold mb-[3rem]">Sign up</h3>
        <div className="flex flex-col items-start">
          <label htmlFor="" className="mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            ref={ref}
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
          <label htmlFor="" className="mb-2 mt-5">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className={`${inputCSS}`}
          />
          <Button
            variant="secondary"
            className="mt-16 w-full"
            // disabled={isLoading}
          >
            Sign up
          </Button>
        </div>
        <div className="mt-12 text-[1.55rem]">
          Already have an account ? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </div>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    </Container>
  );
}

export default Signup;
