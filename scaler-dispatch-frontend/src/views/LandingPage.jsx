import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold text-center">
        Welcome to Scalar Cab System Task
      </h1>
    </div>
  );
};

export default LandingPage;
