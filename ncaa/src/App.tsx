import "./App.css";
import teamsData from "./CollegeBasketballTeams.json";

const HorizontalLine = () => (
  <hr
    style={{
      width: "100%",
      margin: "20px 0",
      border: "none",
      height: "1px",
      backgroundColor: "#ccc",
    }}
  />
);

function Welcome() {
  return <h1>College Basketball Teams</h1>;
}

//setting up the team card parameter
function TeamCard({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <div className="card">
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>
        Location: {city}, {state}
      </h3>
    </div>
  );
}

function TeamList() {
  return (
    <div className="card-container">
      {teamsData.teams.map((team) => (
        <TeamCard {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <HorizontalLine />
      <TeamList />
    </>
  );
}

export default App;
