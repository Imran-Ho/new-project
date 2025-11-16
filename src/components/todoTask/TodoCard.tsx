import React from "react";
import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div className="bg-white flex justify-between items-center p-3 rounded-md border">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-4">
        <Button className="bg-slate-400">Edit</Button>
        <Button className="bg-[#DC02C1]">Delete</Button>
      </div>
    </div>
  );
};

export default TodoCard;
