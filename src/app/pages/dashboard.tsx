import { Link } from "react-router";
import { Dumbbell, Calendar, Target, MessageSquare, TrendingUp, Award, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function Dashboard() {
  return (
    <div className="p-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Welcome back, Athlete! 👋
        </h1>
        <p className="text-[#6B7280] text-lg">
          Ready to train your mind today?
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-[#6B7280]">Sessions Completed</CardTitle>
              <Award className="w-5 h-5 text-[#34D399]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#1F2937]">24</div>
            <p className="text-sm text-[#34D399] mt-1">+3 this week</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-[#6B7280]">Exercises</CardTitle>
              <TrendingUp className="w-5 h-5 text-[#1E3A8A]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#1F2937]">12</div>
            <p className="text-sm text-[#1E3A8A] mt-1">Available exercises</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-[#6B7280]">Day Streak</CardTitle>
              <Flame className="w-5 h-5 text-[#FF7A18]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#1F2937]">7</div>
            <p className="text-sm text-[#FF7A18] mt-1">Keep it up!</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access Section */}
      <div>
        <h2 className="text-2xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Quick Access
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Start Exercise Card */}
          <Link to="/app/exercises">
            <Card className="rounded-2xl border-0 shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Start Exercise</h3>
                <p className="text-white/80 text-sm">Begin a mental training session</p>
              </CardContent>
            </Card>
          </Link>

          {/* Build Routine Card */}
          <Link to="/app/routine">
            <Card className="rounded-2xl border-0 shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-gradient-to-br from-[#34D399] to-[#10B981] text-white h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Build Routine</h3>
                <p className="text-white/80 text-sm">Create your daily mental routine</p>
              </CardContent>
            </Card>
          </Link>

          {/* Motivation Card */}
          <Link to="/app/motivation">
            <Card className="rounded-2xl border-0 shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-gradient-to-br from-[#FF7A18] to-[#F97316] text-white h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Motivation</h3>
                <p className="text-white/80 text-sm">Track goals and strengths</p>
              </CardContent>
            </Card>
          </Link>

          {/* AI Coach Card */}
          <Link to="/app/ai-coach">
            <Card className="rounded-2xl border-0 shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Coach</h3>
                <p className="text-white/80 text-sm">Get personalized guidance</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
