import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed } = props;

  const completedMark = completed ? "[完了]" : "[未完了]";

  return (
    <>
      <p>{`${completedMark}${title}(データ：${userId})`}</p>
    </>
  );
};
