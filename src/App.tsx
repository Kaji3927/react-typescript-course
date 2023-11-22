import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalImage from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  // Delete Goal
  const handleDelete = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
  return (
    <main>
      <Header image={{ src: goalImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDelete} />
    </main>
  );
}
