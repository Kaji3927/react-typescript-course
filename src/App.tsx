import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalImage from "./assets/goals.jpg";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learn React + TS">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}