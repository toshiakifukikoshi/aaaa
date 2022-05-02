import { TodoType } from "./types/todo";

export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed } = props;

  const completedMark = completed ? "[完了]" : "[未完了]";

  return (
    <>
      <p>{`${completedMark}${title}(データ：${userId})`}</p>
    </>
  );
};
