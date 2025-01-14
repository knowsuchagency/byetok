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
      <Timeline followers={followers} following={following} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column - Followers */}
        <div className="space-y-4">
          <UserList title="Followers" users={filteredFollowers} />
        </div>

        {/* Right column - Search, Following, Stats */}
        <div className="space-y-8">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <UserList title="Following" users={filteredFollowing} />
          <Stats followers={followers} following={following} />
        </div>
      </div>
    </div>
  );
};

export default DataVisualizer;