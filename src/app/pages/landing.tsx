import { Link } from "react-router";
import { Dumbbell, Brain, Target } from "lucide-react";
import { Button } from "../components/ui/button";

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-2xl mb-6">
            <Brain className="w-14 h-14 text-[#1E3A8A]" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            AXEN
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-2xl text-white/90 mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
          Train Your Mind Like Your Body
        </p>

        {/* Illustration Icons */}
        <div className="flex justify-center gap-12 mb-16">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-3">
              <Brain className="w-10 h-10 text-[#34D399]" />
            </div>
            <p className="text-white/80 text-sm">Mental Focus</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-3">
              <Target className="w-10 h-10 text-[#FF7A18]" />
            </div>
            <p className="text-white/80 text-sm">Goal Setting</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-3">
              <Dumbbell className="w-10 h-10 text-[#34D399]" />
            </div>
            <p className="text-white/80 text-sm">Performance</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Link to="/login">
            <Button 
              size="lg" 
              className="bg-white text-[#1E3A8A] hover:bg-white/90 px-12 py-6 text-lg rounded-xl shadow-xl"
            >
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-12 py-6 text-lg rounded-xl"
            >
              Register
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-16 text-white/60 text-sm">
          Join thousands of athletes improving their mental game
        </p>
      </div>
    </div>
  );
}
