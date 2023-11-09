import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex justify-center mt-20">
      <h2 className="h-96 w-2/3 flex items-center justify-center text-2xl font-bold shadow-md border  shadow-white rounded-xl">
        Page Not Found! Go to
        <span className="text-blue-900 ml-2">
          <Link to="/"> Homepage.</Link>
        </span>
      </h2>
    </div>
  );
}

export default NotFound;
