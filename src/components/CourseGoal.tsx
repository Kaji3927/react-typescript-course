import { type PropsWithChildren } from "react";

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode
// }

// Alternative Way
type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal = ({ title, children }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

// Alternative Way -> FCをimportする必要がある
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>DELETE</button>
//     </article>
//   );
// };

export default CourseGoal;
