import { Link } from "react-router";
import { Wind, Sparkles, Focus, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

const exercises = [
  {
    id: "box-breathing",
    title: "Box Breathing",
    description: "4-4-4-4 breathing pattern to calm your nervous system and improve focus before competition.",
    duration: "5 minutes",
    icon: Wind,
    color: "from-[#1E3A8A] to-[#2563EB]",
  },
  {
    id: "relaxation",
    title: "2 Minute Relaxation",
    description: "Quick progressive muscle relaxation to release tension and reset your mental state.",
    duration: "2 minutes",
    icon: Sparkles,
    color: "from-[#34D399] to-[#10B981]",
  },
  {
    id: "focus-reset",
    title: "Focus Reset",
    description: "Mindfulness exercise to regain concentration and mental clarity during training.",
    duration: "3 minutes",
    icon: Focus,
    color: "from-[#FF7A18] to-[#F97316]",
  },
];

export function Exercises() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Mental Exercises
        </h1>
        <p className="text-[#6B7280] text-lg">
          Choose an exercise to begin your mental training session
        </p>
      </div>

      {/* Exercise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => {
          const Icon = exercise.icon;
          
          return (
            <Card key={exercise.id} className="rounded-2xl border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className={`w-14 h-14 bg-gradient-to-br ${exercise.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{exercise.title}</CardTitle>
                <CardDescription className="text-[#6B7280]">
                  {exercise.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Clock className="w-4 h-4" />
                    <span>{exercise.duration}</span>
                  </div>
                  <Link to={`/app/exercises/${exercise.id}`}>
                    <Button className="bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 rounded-xl">
                      Start
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Info Section */}
      <div className="mt-12 bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Why Mental Exercises?
        </h2>
        <p className="text-[#6B7280] mb-4">
          Mental exercises are essential for peak athletic performance. They help you:
        </p>
        <ul className="space-y-2 text-[#6B7280]">
          <li className="flex items-start gap-2">
            <span className="text-[#34D399] mt-1">✓</span>
            <span>Manage pre-competition anxiety and stress</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#34D399] mt-1">✓</span>
            <span>Improve focus and concentration during training</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#34D399] mt-1">✓</span>
            <span>Recover mentally between high-intensity sessions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#34D399] mt-1">✓</span>
            <span>Build mental resilience and confidence</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
