import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/landing";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { DashboardLayout } from "./layouts/dashboard-layout";
import { Dashboard } from "./pages/dashboard";
import { Exercises } from "./pages/exercises";
import { ExerciseSession } from "./pages/exercise-session";
import { Routine } from "./pages/routine";
import { Motivation } from "./pages/motivation";
import { AICoach } from "./pages/ai-coach";
import { Summary } from "./pages/summary";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/app",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "exercises", Component: Exercises },
      { path: "exercises/:exerciseId", Component: ExerciseSession },
      { path: "routine", Component: Routine },
      { path: "motivation", Component: Motivation },
      { path: "ai-coach", Component: AICoach },
      { path: "summary", Component: Summary },
    ],
  },
]);
