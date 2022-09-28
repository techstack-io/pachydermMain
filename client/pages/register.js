import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

const Register = () => {
  const [name, setName] = useState("Ryan");
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("rrrrrr");
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      // console.log("REGISTER RESPONSE", data);
      toast("Registration successful. Please login.");
      setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

    return (
      <div className="min-h-screen flex flex-col my-24">
        {/* Form Container */}
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          {/* form */}
          <form  onSubmit={handleSubmit}>
          <div
            className="bg-white px-6 py-8 rounded border-gray-100 border-2 text-black w-full"
          >
            <h1 className="mb-8 text-3xl text-center text-tanzanite-blue">
              REGISTER
            </h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Full Name"
                 //   save value to state
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />
  
            <button
              type="submit"
              className="w-full text-center py-3 rounded-full bg-carnation-pink text-white focus:outline-none my-1"
              disabled={!name || !email || !password || loading}
            >
              
            {loading ? <syncOutlined spin />: 'Register'}
            </button>
            <div className="text-center text-sm text-grey-dark mt-4">
              By registering you agree to our
              <a
                className="no-underline hover:underline text-cerulean-blue pl-1"
                href="#"
              >
                <em>Terms of Service</em>
              </a>
            </div>
          </div>
          <div className="text-grey-dark mt-6 text-center">
            Already registered?
            <Link href='/login'>
              <span className='cursor-pointer no-underline hover:underline text-cerulean-blue pl-1'>
                <em>
                  Login
                  </em>
              </span>
                </Link>
            <a

            >
            </a>
          </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Register;
  