import History from "./Components/Content/History";
import Overview from "./Components/Content/Overview";
import QuickTransfer from "./Components/Content/QuickTransfer";
import Top from "./Components/Content/Top";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="!bg-white flex h-full text-black">
      <div className="w-[16%] h-screen border-r-2">
        <Sidebar />
      </div>
      <div className="w-[84%]">
        <Navbar />
        <div>
          <div className="mx-5 border-b-2">
            <Top />
          </div>
          <div className="grid grid-cols-3 pb-10 mx-5 mt-5 border-b-2 gap-7">
            <div className="col-span-2">
              <Overview />
            </div>
            <QuickTransfer />
          </div>
          <div>
            <History />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
