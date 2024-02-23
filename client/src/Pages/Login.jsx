import { useEffect, useRef, useState } from "react";
import { Container } from "../master";
import { Button } from "@/shadcn/ui/button";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus()
  }, [])
  

  const loginHandler = async (e) => {
    e.preventDefault();
  };

  const inputCSS =
    "rounded-lg px-4 py-2 bg-transparent border border-onyx/70 focus:ring-white/20 focus:border-white/20 w-[350px]";

  return (
    <Container>
      <form
        className="h-[84vh] flex flex-col justify-start border border-onyx/50 rounded-[30px] w-fit px-24 py-24 mx-auto"
        onSubmit={loginHandler}
      >
        <h3 className="text-6xl font-semibold mb-[4rem]">Log in</h3>
        <div className="flex flex-col items-start">
          <label htmlFor="" className="mb-2 mt-5">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            ref={ref}
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
          <Button
            // disabled={isLoading}
            variant="secondary"
            className="mt-16 w-full"
          >
            Login
          </Button>
        </div>
        <div className="mt-12 text-[1.55rem]">
           New Customer ? <Link to="/signup" className="text-blue-500">Register</Link>
        </div>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    </Container>
  );
}

export default Login;
