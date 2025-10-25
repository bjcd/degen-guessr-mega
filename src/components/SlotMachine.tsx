import { Card } from "@/components/ui/card";
import { SlotReel } from "./SlotReel";
import degenHat from "@/assets/degen-logo.png";

interface SlotMachineProps {
  spinning: boolean;
  reels: string[];
  onSpinComplete?: () => void;
}

export const SlotMachine = ({ spinning, reels, onSpinComplete }: SlotMachineProps) => {
  let stopsCompleted = 0;

  const handleReelStop = () => {
    stopsCompleted++;
    if (stopsCompleted === 3 && onSpinComplete) {
      onSpinComplete();
    }
  };

  return (
    <Card className="glass-card gradient-border relative overflow-hidden">
      {/* Decorative lights around the frame */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-2 flex justify-around px-4 py-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={`top-${i}`}
              className="w-3 h-3 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 flex justify-around px-4 py-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={`bottom-${i}`}
              className="w-3 h-3 rounded-full bg-secondary animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center py-6 px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src={degenHat} alt="Degen Hat" className="w-10 h-10 object-contain" />
          <h2 className="text-4xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-glow">
            DEGEN SLOTS
          </h2>
          <img src={degenHat} alt="Degen Hat" className="w-10 h-10 object-contain scale-x-[-1]" />
        </div>
        <p className="text-xs text-muted-foreground font-semibold tracking-wider">
          THREE HATS = JACKPOT
        </p>
      </div>

      {/* Slot Reels */}
      <div className="relative z-10 mx-6 mb-8">
        <div className="bg-gradient-to-br from-background via-[hsl(270_50%_10%)] to-background rounded-3xl p-6 border-4 border-primary/40 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-3 gap-4">
            {reels.map((reel, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl border-4 border-accent/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden"
              >
                <SlotReel
                  spinning={spinning}
                  finalIcon={reel}
                  delay={index * 400}
                  onStop={handleReelStop}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Jackpot Display */}
      <div className="relative z-10 text-center pb-6 px-4">
        <div className="inline-block bg-gradient-to-r from-background via-[hsl(270_50%_5%)] to-background px-8 py-3 rounded-2xl border-2 border-primary/40">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-glow tracking-wider">
              JACKPOT
            </span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-secondary/60 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
