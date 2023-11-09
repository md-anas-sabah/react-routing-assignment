function Login() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="h-96 w-2/3 flex flex-col items-center  text-2xl font-bold shadow-md border  shadow-white rounded-xl">
        Login
        <form className="flex flex-col mt-10 items-center">
          <label className="mr-32">Username/Email</label>
          <input
            type="text"
            placeholder="Enter Username/Email"
            className="text-black"
          />
          <label className="mr-52">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="text-black"
          />
          <button className="mt-5 bg-white text-black w-44">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
