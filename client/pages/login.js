const  Login = () => {
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col my-10">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded  border-gray-100	 border-2 text-black w-full">
                    <h1 className="mb-8 text-3xl text-center mr-8 text-cerulean-blue">
                        Login Account
                    </h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded-full bg-cerulean-blue text-white focus:outline-none my-1"
                    >
                        Login
                    </button>
                </div>
                <div className="text-grey-dark mt-6">
                    Don't have and account? 
                    <a className="no-underline hover:underline text-cerulean-blue ml-1" href="../register/">
                        <em>Register Here</em>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Login;