import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TaskContainer = () => {
  return (
    <div>
      <div className="flex justify-between my-2">
        <Button className="bg-[#5C43FE]">Add Todo</Button>
        <Button className="">Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {/* <div className="text-white text-2xl font-bold flex justify-center items-center p-4">
          <p>There is no task pending in hand</p>
        </div> */}
        <div className=" bg-white w-full h-full p-5 rounded-lg space-y-2">
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
