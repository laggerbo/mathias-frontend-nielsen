import type { Idea } from "../types";

interface IdeasTabProps {
  ideas: Idea[];
  setIdeas: React.Dispatch<React.SetStateAction<Idea[]>>;
}

export function IdeasTab({ ideas, setIdeas }: IdeasTabProps) {
  const toggleTried = (id: string) => {
    setIdeas((prev) => prev.map((i) => (i.id === id ? { ...i, tried: !i.tried } : i)));
  };
  return (
    <div>
      <h2 className="section-title">Project ideas</h2>
      <p className="section-desc">
        Small, scrappy things worth building with an AI pair programmer at your side — leaning into your Hue lights,
        your Sonos, Spotify, and game nights. Pick whatever sounds fun tonight, mark it once you've given it a real
        go.
      </p>
      <div className="idea-grid">
        {ideas.map((idea) => (
          <div key={idea.id} className={"idea-card" + (idea.tried ? " done" : "")}>
            <div className="idea-top">
              <span className="idea-title">{idea.title}</span>
              <span className={"diff " + idea.diff}>{idea.diff}</span>
            </div>
            <p className="idea-desc">{idea.desc}</p>
            <button className={"idea-toggle" + (idea.tried ? " on" : "")} onClick={() => toggleTried(idea.id)}>
              {idea.tried ? "✓ Tried it" : "Mark as tried"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
