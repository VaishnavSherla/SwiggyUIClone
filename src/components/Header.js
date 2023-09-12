import { NAMED_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus" 

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="mx-auto flex  justify-between px-5 shadow-md">
      <div className="p-2 m-2"><Link to="/">{NAMED_LOGO}</Link></div>
      <div>
        <ul className="flex justify-between">
          <li className="font-bold m-4 px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-slate-900">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="font-bold m-4 px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link to="/">Home</Link></li>
          <li className="font-bold m-4 px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link to="/about">About</Link></li>
          <li className="font-bold m-4 px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link to="/contact">Contact Us</Link></li>
          <li className="font-bold m-4 px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link to="/grocery">Grocery</Link></li>
          <li className="font-bold m-4 px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
