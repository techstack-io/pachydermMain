import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Menu } from "antd";

import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

import { Context } from '../context';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const { Item } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("");
  const { state, dispatch } = useContext(Context);
  const router = useRouter();

useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
}, [process.browser && window.location.pathname]);

const logout = async () => {
  dispatch({ type: "LOGOUT" });
  window.localStorage.removeItem('user');
  const { data } = await axios.get('/api/logout');
  toast(data.message);
  router.push("/login");
};

  return (
    <>
      <nav id="header" className="fixed w-full top-2 text-blue">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 py-2">
          <div className="p-8 pl-4 flex items-center">
            <Link href="/">
              <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                <div>
                  <img
                    src="/img/logo-2.svg"
                    alt="logo"
                    width="75"
                    height="auto"
                  />
                </div>
              </a>
            </Link>
            <div className="font-Bebas text-tanzanite-blue pt-4 pl-4 sm: text-2xl md:text-5xl">
              PACHYDERM ACADEMY
            </div>
          </div>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20">
            <ul className="list-reset lg:flex justify-end flex-1">
              <Menu mode="horizontal" selectedKeys={[current]} className='justify-center'>
                <Item
                  key="/"
                  onClick={(e) => setCurrent(e.key)}
                  icon={<AppstoreOutlined />}
                >
                  <Link href="/">
                    <a>App</a>
                  </Link>
                </Item>

                <Item
                  key="/login"
                  onClick={(e) => setCurrent(e.key)}
                  icon={<LoginOutlined />}
                >
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </Item>

                <Item
                  key="/register"
                  onClick={(e) => setCurrent(e.key)}
                  icon={<UserAddOutlined />}
                >
                  <Link href="/register">
                    <a>Register</a>
                  </Link>
                </Item>
                <Item onClick={logout} icon={<UserAddOutlined />} className="float-right">
                 Logout
      </Item>
              </Menu>
            </ul>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
    </>
  );
};

export default TopNav;
