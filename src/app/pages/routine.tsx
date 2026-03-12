import { useState } from "react";
import { Plus, Trash2, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";

interface Activity {
  id: string;
  name: string;
  time: string;
  done: boolean;
}

const initialActivities: Activity[] = [
  { id: "1", name: "Morning visualization", time: "07:00", done: true },
  { id: "2", name: "Pre-training breathing", time: "09:30", done: true },
  { id: "3", name: "Post-training reflection", time: "12:00", done: false },
  { id: "4", name: "Evening gratitude practice", time: "20:00", done: false },
];

export function Routine() {
  const [activities, setActivities] = useState<Activity[]>(initialActivities);
  const [newActivityName, setNewActivityName] = useState("");
  const [newActivityTime, setNewActivityTime] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddActivity = () => {
    if (!newActivityName || !newActivityTime) return;

    const newActivity: Activity = {
      id: Date.now().toString(),
      name: newActivityName,
      time: newActivityTime,
      done: false,
    };

    setActivities([...activities, newActivity]);
    setNewActivityName("");
    setNewActivityTime("");
    setShowAddForm(false);
  };

  const handleToggleDone = (id: string) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, done: !activity.done } : activity
      )
    );
  };

  const handleDeleteActivity = (id: string) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const completedCount = activities.filter((a) => a.done).length;

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Daily Routine
        </h1>
        <p className="text-[#6B7280] text-lg">
          Build and track your mental training routine
        </p>
      </div>

      {/* Progress Card */}
      <Card className="rounded-2xl border-0 shadow-md mb-6 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white">
        <CardHeader>
          <CardTitle className="text-white">Today's Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="text-5xl font-bold">{completedCount}/{activities.length}</div>
            <div>
              <p className="text-white/90">Activities completed</p>
              <p className="text-white/70 text-sm">Keep up the great work!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Routine Table */}
      <Card className="rounded-2xl border-0 shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Your Activities</CardTitle>
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-[#34D399] hover:bg-[#34d399]/90 text-white rounded-xl"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Activity
          </Button>
        </CardHeader>
        <CardContent>
          {/* Add Activity Form */}
          {showAddForm && (
            <div className="mb-6 p-4 bg-[#F5F7FA] rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="Activity name"
                  value={newActivityName}
                  onChange={(e) => setNewActivityName(e.target.value)}
                  className="bg-white rounded-xl"
                />
                <Input
                  type="time"
                  value={newActivityTime}
                  onChange={(e) => setNewActivityTime(e.target.value)}
                  className="bg-white rounded-xl"
                />
                <Button
                  onClick={handleAddActivity}
                  className="bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 rounded-xl"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </div>
            </div>
          )}

          {/* Activities List */}
          <div className="space-y-3">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-4 p-4 bg-[#F5F7FA] rounded-xl hover:bg-[#E5E7EB] transition-colors"
              >
                <Checkbox
                  checked={activity.done}
                  onCheckedChange={() => handleToggleDone(activity.id)}
                  className="w-5 h-5"
                />
                <div className="flex-1">
                  <p className={`font-medium ${activity.done ? "line-through text-[#9CA3AF]" : "text-[#1F2937]"}`}>
                    {activity.name}
                  </p>
                </div>
                <div className="text-sm text-[#6B7280] font-medium min-w-[60px]">
                  {activity.time}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteActivity(activity.id)}
                  className="text-[#EF4444] hover:text-[#EF4444] hover:bg-red-50 rounded-xl"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          {activities.length === 0 && (
            <div className="text-center py-12 text-[#6B7280]">
              No activities yet. Click "Add Activity" to get started!
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
