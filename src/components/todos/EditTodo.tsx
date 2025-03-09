"use client";
import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import { MdEdit } from "react-icons/md";
import Form from "../form/Form";
import Input from "../input/Input";
import { todoProps } from "@/types";
import * as actions from "@/actions";

const EditTodo = ({ todo }: { todo: todoProps }) => {
  const [editTodoState, setEditTodoState] = useState(false);

  const handleEdit = () => {
    setEditTodoState(!editTodoState);
  };

  const handleSubmit = () => {
    setEditTodoState(false);
  };

  return (
    <div className="flex gap-5 items-center">
      {!editTodoState ? <Button onClick={handleEdit} text={<MdEdit />} actionButton /> : null}
      {editTodoState ? (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input name="newTitle" type="text" placeholder="Edit Todo"/>
            <Button type="submit" text="Save" bgColor="bg-green-400" margin="ml-4"/>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
