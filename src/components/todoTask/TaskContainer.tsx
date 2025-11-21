
import AddModal from "./AddModal";
import TaskFilter from "./TaskFilter";
import TodoCard from "./TodoCard";

const TaskContainer = () => {
  return (
    <div>
      <div className="flex justify-between my-2">
      {/* these components are used for upper two button */}
        <AddModal></AddModal>
        <TaskFilter></TaskFilter>
        
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
