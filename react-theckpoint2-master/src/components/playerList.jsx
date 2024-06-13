import players from "../players";
import Player from "./player";

function getPlayer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      {players.map((p) => {
        return (
          <Player
            key={p.id}
            name={p.name}
            age={p.age}
            jerseyNumber={p.jerseyNumber}
            nationality={p.nationality}
            image={p.image}
            team={p.team}
          />
        );
      })}
    </div>
  );
}

export default getPlayer;
