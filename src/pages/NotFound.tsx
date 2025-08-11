import { Link } from "react-router-dom";
import NotFoundTV from "../components/templates/NotFoundTV";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <NotFoundTV />
      <Link to="/">Back To Home :)</Link>
    </div>
  );
};

export default NotFound;
