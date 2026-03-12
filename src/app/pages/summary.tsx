import { TrendingUp, Award, Flame, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const weeklyData = [
  { day: "Mon", sessions: 2 },
  { day: "Tue", sessions: 3 },
  { day: "Wed", sessions: 1 },
  { day: "Thu", sessions: 4 },
  { day: "Fri", sessions: 2 },
  { day: "Sat", sessions: 3 },
  { day: "Sun", sessions: 2 },
];

const progressData = [
  { week: "Week 1", sessions: 8 },
  { week: "Week 2", sessions: 12 },
  { week: "Week 3", sessions: 15 },
  { week: "Week 4", sessions: 17 },
];

const exerciseHistory = [
  { name: "Box Breathing", count: 12, lastDone: "Today" },
  { name: "2 Minute Relaxation", count: 8, lastDone: "Yesterday" },
  { name: "Focus Reset", count: 4, lastDone: "2 days ago" },
];

// Generate heatmap data for 30 days
const generateHeatmapData = () => {
  const data = [];
  for (let i = 0; i < 30; i++) {
    const intensity = Math.floor(Math.random() * 5); // 0-4 sessions per day
    data.push({ day: i, intensity });
  }
  return data;
};

const heatmapData = generateHeatmapData();

export function Summary() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Performance Summary
        </h1>
        <p className="text-[#6B7280] text-lg">
          Track your mental training progress and statistics
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-[#6B7280]">Total Sessions</CardTitle>
              <Award className="w-5 h-5 text-[#1E3A8A]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#1F2937]">24</div>
            <p className="text-sm text-[#34D399] mt-1">+8 this month</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-[#6B7280]">Current Streak</CardTitle>
              <Flame className="w-5 h-5 text-[#FF7A18]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#1F2937]">7 days</div>
            <p className="text-sm text-[#FF7A18] mt-1">Personal best!</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-[#6B7280]">This Week</CardTitle>
              <TrendingUp className="w-5 h-5 text-[#34D399]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#1F2937]">17</div>
            <p className="text-sm text-[#34D399] mt-1">Sessions completed</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-[#6B7280]">Avg. Duration</CardTitle>
              <Calendar className="w-5 h-5 text-[#8B5CF6]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#1F2937]">4.2 min</div>
            <p className="text-sm text-[#8B5CF6] mt-1">Per session</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Weekly Activity Chart */}
        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Sessions completed each day this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="day" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff', 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} 
                />
                <Bar dataKey="sessions" fill="#1E3A8A" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Progress Over Time */}
        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader>
            <CardTitle>Monthly Progress</CardTitle>
            <CardDescription>Your mental training journey over the past month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="week" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff', 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} 
                />
                <Line type="monotone" dataKey="sessions" stroke="#34D399" strokeWidth={3} dot={{ fill: '#34D399', r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Exercise History and Activity Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Exercise History */}
        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader>
            <CardTitle>Exercise History</CardTitle>
            <CardDescription>Your most practiced exercises</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {exerciseHistory.map((exercise, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#F5F7FA] rounded-xl">
                  <div className="flex-1">
                    <p className="font-medium text-[#1F2937]">{exercise.name}</p>
                    <p className="text-sm text-[#6B7280]">Last done: {exercise.lastDone}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#1E3A8A]">{exercise.count}</div>
                    <p className="text-xs text-[#6B7280]">times</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Heatmap */}
        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader>
            <CardTitle>30-Day Activity Heatmap</CardTitle>
            <CardDescription>Your daily training consistency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-10 gap-2">
              {heatmapData.map((item) => (
                <div
                  key={item.day}
                  className="aspect-square rounded"
                  style={{
                    backgroundColor:
                      item.intensity === 0
                        ? "#E5E7EB"
                        : item.intensity === 1
                        ? "#BFDBFE"
                        : item.intensity === 2
                        ? "#60A5FA"
                        : item.intensity === 3
                        ? "#2563EB"
                        : "#1E3A8A",
                  }}
                  title={`Day ${item.day + 1}: ${item.intensity} sessions`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between mt-4 text-xs text-[#6B7280]">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-4 h-4 bg-[#E5E7EB] rounded" />
                <div className="w-4 h-4 bg-[#BFDBFE] rounded" />
                <div className="w-4 h-4 bg-[#60A5FA] rounded" />
                <div className="w-4 h-4 bg-[#2563EB] rounded" />
                <div className="w-4 h-4 bg-[#1E3A8A] rounded" />
              </div>
              <span>More</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
