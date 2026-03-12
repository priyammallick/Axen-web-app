import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Play, Pause, Check } from "lucide-react";
import { Button } from "../components/ui/button";

const phases = ["Inhale", "Hold", "Exhale", "Hold"];
const phaseDuration = 4000; // 4 seconds per phase

export function ExerciseSession() {
  const { exerciseId } = useParams();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [cycles, setCycles] = useState(0);

  const currentPhase = phases[currentPhaseIndex];

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCurrentPhaseIndex((prev) => {
        const nextIndex = (prev + 1) % phases.length;
        if (nextIndex === 0) {
          setCycles((c) => c + 1);
        }
        return nextIndex;
      });
    }, phaseDuration);

    return () => clearInterval(timer);
  }, [isActive]);

  const handleComplete = () => {
    setIsActive(false);
    navigate("/app/exercises");
  };

  const getCircleScale = () => {
    switch (currentPhase) {
      case "Inhale":
        return 1.8;
      case "Exhale":
        return 0.8;
      default:
        return currentPhaseIndex === 1 ? 1.8 : 0.8;
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] flex flex-col items-center justify-center p-8">
      {/* Exercise Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {exerciseId === "box-breathing" && "Box Breathing"}
          {exerciseId === "relaxation" && "2 Minute Relaxation"}
          {exerciseId === "focus-reset" && "Focus Reset"}
        </h1>
        <p className="text-white/80">Cycle {cycles + 1}</p>
      </div>

      {/* Breathing Animation Circle */}
      <div className="relative w-80 h-80 flex items-center justify-center mb-12">
        <motion.div
          animate={{
            scale: isActive ? getCircleScale() : 1,
          }}
          transition={{
            duration: phaseDuration / 1000,
            ease: "easeInOut",
          }}
          className="w-40 h-40 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{
              scale: isActive ? getCircleScale() * 0.8 : 1,
            }}
            transition={{
              duration: phaseDuration / 1000,
              ease: "easeInOut",
            }}
            className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center"
          >
            <div className="w-24 h-24 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Phase Indicator */}
      <div className="text-center mb-12">
        <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {currentPhase}
        </div>
        <p className="text-white/60 text-lg">
          {isActive ? "Follow the rhythm" : "Press Start to begin"}
        </p>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-4">
        {!isActive ? (
          <Button
            onClick={() => setIsActive(true)}
            size="lg"
            className="bg-white text-[#1E3A8A] hover:bg-white/90 px-8 py-6 text-lg rounded-xl"
          >
            <Play className="w-5 h-5 mr-2" />
            Start
          </Button>
        ) : (
          <Button
            onClick={() => setIsActive(false)}
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-2 border-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl"
          >
            <Pause className="w-5 h-5 mr-2" />
            Pause
          </Button>
        )}
        
        <Button
          onClick={handleComplete}
          size="lg"
          className="bg-[#34D399] hover:bg-[#34d399]/90 text-white px-8 py-6 text-lg rounded-xl"
        >
          <Check className="w-5 h-5 mr-2" />
          Complete
        </Button>
      </div>

      {/* Instructions */}
      <div className="mt-12 text-center max-w-md">
        <p className="text-white/70 text-sm">
          Focus on the circle and breathe along with its expansion and contraction.
          Each phase lasts 4 seconds.
        </p>
      </div>
    </div>
  );
}
