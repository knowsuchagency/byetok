import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { BarChart } from "lucide-react";
import SearchBar from "./SearchBar";
import UserList from "./UserList";

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
  const navigate = useNavigate();
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
      <div className="flex justify-between items-center">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <Button
          variant="outline"
          onClick={() =>
            navigate("/analytics", { state: { followers, following } })
          }
          className="gap-2"
        >
          <BarChart className="h-4 w-4" />
          View Analytics
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <UserList
            title="Following"
            users={filteredFollowing}
            type="following"
          />
        </div>
        <div className="space-y-4">
          <UserList
            title="Followers"
            users={filteredFollowers}
            type="followers"
          />
        </div>
      </div>
    </div>
  );
};

export default DataVisualizer;
