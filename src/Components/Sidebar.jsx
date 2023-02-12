import { SidebarData } from "../Data/SidebarData";
import Logo from "../assets/svg/logo.svg";

const Sidebar = () => {
  return (
    <div className="w-48 mx-auto ">
      <button className="flex items-center mt-8 mb-12 space-x-4">
        <img alt="Logo" src={Logo} />
        <h1 className="text-xl font-bold">Cashon</h1>
      </button>
      <div className="space-y-3">
        {SidebarData.map((item, i) => (
          <button
            key={i}
            className="flex items-center space-x-5 rounded-lg hover:font-semibold text-[#9E9E9E] text-sm py-3 px-4 hover:bg-blue-100 hover:text-blue-500"
          >
            <img src={item.icon} alt="img" />
            <p className="text-base">{item.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
