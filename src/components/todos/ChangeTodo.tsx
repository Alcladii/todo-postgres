import React from "react";
import { FaCheck } from "react-icons/fa";
import Input from "../input/Input";
import Button from "../button/Button";
import Form from "../form/Form";
import * as actions from "@/actions";
import { todoProps } from "@/types";

const ChangeTodo = ({ todo }:{todo: todoProps}) => {
  return (
    <Form action={actions.changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden"></Input>
      <Button
        text={<FaCheck />}
        actionButton
        bgColor={todo.isCompleted ? "bg-green-400" : "bg-blue-500"}
        type = "submit"
      ></Button>
    </Form>
  );
};

export default ChangeTodo;
