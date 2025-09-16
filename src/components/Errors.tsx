import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <img className="w-[40%] h-[80%]" src="/src/assets/images/404.png" />
      <button
        className="btn bg-pink-bg text-black"
        onClick={() => navigate("/")}>
        Return To Home Page
      </button>
    </div>
  );
};

export default Error;
