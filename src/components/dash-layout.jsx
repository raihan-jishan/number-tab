import Login from '../pages/login/page';
import Dashboard_sidebar from "./shared/dashboard_sidebar";
const Dashboard_Layout = ({ children, mtreverse }) => {
  return (
    <div>
      {localStorage.getItem("token") ? (
        <div className="  bg-Primary text-white">
          <Dashboard_sidebar />
          <div class="p-4 sm:ml-64">
            <div class="p-4   ">
              <div class={`${mtreverse ? "-mt-[4rem]" : "mt-0"} gap-4 mb-4 `}>
                {children}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Dashboard_Layout;
