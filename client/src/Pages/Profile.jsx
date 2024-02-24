import { Button } from "@/shadcn/ui/button";
import { Container } from "../master.js";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useUpdateProfileMutation } from "@/slices/usersApiSlice.js";
import { setCredentials } from "@/slices/authSlice.js"; // after hitting backend api and getting data we gotta set it to STATE and LOCAL-STORAGE
// toast
import { useToast } from "@/shadcn/ui/use-toast";
import { ToastAction } from "@/shadcn/ui/toast";
// loader
import Loader from "@/components/Loader";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);

  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  const signupHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        variant: "minimal",
        title: "Passwords do not match.",
        description: "Please try again.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        className: "px-7 py-4",
      });
      return;
    } else {
      try {
        const res = await updateProfile({ _id: userInfo._id, name, email, password }).unwrap();
        dispatch(setCredentials(res));
        toast({
          variant: "minimal",
          title: "Profile Updated",
          description: "Thank you.",
          // action: <ToastAction altText="Try again">Try again</ToastAction>,
          className: "px-7 py-4",
        });
      } catch (error) {
        toast({
          variant: "minimal",
          title: error?.data?.message || error.error,
          description: "Something went wrong.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
          className: "px-7 py-4",
        });
      }
    }
  };

  const inputCSS =
    "rounded-lg px-4 py-2 bg-transparent border border-onyx/70 focus:ring-white/20 focus:border-white/20 w-[350px]";

  return (
    <Container>
      <form
        className="h-[84vh] flex flex-col justify-start border border-onyx/60 rounded-[30px] w-fit px-24 py-24 mx-auto"
        onSubmit={signupHandler}
      >
        <h3 className="text-6xl font-semibold mb-[3rem]">Update Your Profile</h3>
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
          {isLoading && <Loader />}
          <Button
            variant="antiFlashWhite"
            className="mt-16 w-full"
            // disabled={isLoading}
          >
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default Profile;
