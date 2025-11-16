import TaskContainer from "@/components/todoTask/TaskContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold my-10">My Todo</h1>
      <TaskContainer></TaskContainer>
    </Container>
  );
};

export default Todo;
