import { useParams } from "react-router-dom";

function Param() {
  const { id } = useParams();
  return (
    <div className="flex justify-center">
      <p className="w-60 text-bold text-2xl rounded-md text-center mt-20 text-black p-2 bg-yellow-300 ">
        ID: {id}
      </p>
    </div>
  );
}

export default Param;
