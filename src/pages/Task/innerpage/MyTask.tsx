import Tabs from "../component/Tabs";

const MyTask = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6 dark:bg-[#0D0D0D]">
        <div>
          <Tabs />
        </div>
      </div>
    </>
  );
};

export default MyTask;
