import { useState } from "react";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import Stats from "./Stats";
import Timeline from "./Timeline";

interface DataVisualizerProps {
  data: {
    Activity: {
      "Follower List": {
        FansList: Array<{ Date: string; UserName: string }>;
      };
      "Following List": {
        Following: Array<{ Date: string; UserName: string }>;
      };
    };
  };
}

const DataVisualizer = ({ data }: DataVisualizerProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const followers = data.Activity["Follower List"].FansList;
  const following = data.Activity["Following List"].Following;

  const filteredFollowers = followers.filter((user) =>
    user.UserName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredFollowing = following.filter((user) =>
    user.UserName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Stats followers={followers} following={following} />
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      <Timeline followers={followers} following={following} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UserList title="Followers" users={filteredFollowers} />
        <UserList title="Following" users={filteredFollowing} />
      </div>
    </div>
  );
};

export default DataVisualizer;