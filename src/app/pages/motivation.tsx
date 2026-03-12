import { useState } from "react";
import { Plus, X, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

interface Item {
  id: string;
  text: string;
}

const initialStrengths: Item[] = [
  { id: "1", text: "Strong mental resilience" },
  { id: "2", text: "Excellent focus under pressure" },
  { id: "3", text: "Quick recovery mindset" },
];

const initialGoals: Item[] = [
  { id: "1", text: "Maintain composure during competitions" },
  { id: "2", text: "Improve pre-game mental preparation" },
  { id: "3", text: "Build confidence in high-stakes moments" },
];

export function Motivation() {
  const [strengths, setStrengths] = useState<Item[]>(initialStrengths);
  const [goals, setGoals] = useState<Item[]>(initialGoals);
  const [newStrength, setNewStrength] = useState("");
  const [newGoal, setNewGoal] = useState("");
  const [showStrengthForm, setShowStrengthForm] = useState(false);
  const [showGoalForm, setShowGoalForm] = useState(false);

  const handleAddStrength = () => {
    if (!newStrength.trim()) return;
    setStrengths([...strengths, { id: Date.now().toString(), text: newStrength }]);
    setNewStrength("");
    setShowStrengthForm(false);
  };

  const handleAddGoal = () => {
    if (!newGoal.trim()) return;
    setGoals([...goals, { id: Date.now().toString(), text: newGoal }]);
    setNewGoal("");
    setShowGoalForm(false);
  };

  const handleRemoveStrength = (id: string) => {
    setStrengths(strengths.filter((s) => s.id !== id));
  };

  const handleRemoveGoal = (id: string) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Motivation Center
        </h1>
        <p className="text-[#6B7280] text-lg">
          Track your strengths and goals to stay motivated
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strengths Section */}
        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader className="border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#34D399] to-[#10B981] rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <CardTitle>Your Strengths</CardTitle>
              </div>
              <Button
                onClick={() => setShowStrengthForm(!showStrengthForm)}
                size="sm"
                className="bg-[#34D399] hover:bg-[#34d399]/90 text-white rounded-xl"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {showStrengthForm && (
              <div className="mb-4 flex gap-2">
                <Input
                  placeholder="Add a new strength..."
                  value={newStrength}
                  onChange={(e) => setNewStrength(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddStrength()}
                  className="bg-[#F5F7FA] rounded-xl border-0"
                />
                <Button
                  onClick={handleAddStrength}
                  className="bg-[#34D399] hover:bg-[#34d399]/90 text-white rounded-xl"
                >
                  Add
                </Button>
              </div>
            )}

            <div className="space-y-3">
              {strengths.map((strength) => (
                <div
                  key={strength.id}
                  className="flex items-start gap-3 p-4 bg-[#F0FDF4] rounded-xl group hover:bg-[#DCFCE7] transition-colors"
                >
                  <div className="w-2 h-2 bg-[#34D399] rounded-full mt-2" />
                  <p className="flex-1 text-[#1F2937]">{strength.text}</p>
                  <button
                    onClick={() => handleRemoveStrength(strength.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-[#6B7280] hover:text-[#EF4444]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {strengths.length === 0 && (
              <div className="text-center py-8 text-[#6B7280]">
                No strengths yet. Click + to add one!
              </div>
            )}
          </CardContent>
        </Card>

        {/* Goals Section */}
        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader className="border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A18] to-[#F97316] rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <CardTitle>Your Goals</CardTitle>
              </div>
              <Button
                onClick={() => setShowGoalForm(!showGoalForm)}
                size="sm"
                className="bg-[#FF7A18] hover:bg-[#ff7a18]/90 text-white rounded-xl"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {showGoalForm && (
              <div className="mb-4 flex gap-2">
                <Input
                  placeholder="Add a new goal..."
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddGoal()}
                  className="bg-[#F5F7FA] rounded-xl border-0"
                />
                <Button
                  onClick={handleAddGoal}
                  className="bg-[#FF7A18] hover:bg-[#ff7a18]/90 text-white rounded-xl"
                >
                  Add
                </Button>
              </div>
            )}

            <div className="space-y-3">
              {goals.map((goal) => (
                <div
                  key={goal.id}
                  className="flex items-start gap-3 p-4 bg-[#FFF7ED] rounded-xl group hover:bg-[#FFEDD5] transition-colors"
                >
                  <div className="w-2 h-2 bg-[#FF7A18] rounded-full mt-2" />
                  <p className="flex-1 text-[#1F2937]">{goal.text}</p>
                  <button
                    onClick={() => handleRemoveGoal(goal.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-[#6B7280] hover:text-[#EF4444]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {goals.length === 0 && (
              <div className="text-center py-8 text-[#6B7280]">
                No goals yet. Click + to add one!
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Motivational Quote */}
      <Card className="rounded-2xl border-0 shadow-md mt-6 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white">
        <CardContent className="p-8 text-center">
          <p className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            "The mind is the athlete. The body is simply the means it uses."
          </p>
          <p className="text-white/70">— Sports Psychology Principle</p>
        </CardContent>
      </Card>
    </div>
  );
}
