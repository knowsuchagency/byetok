import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface User {
  Date: string;
  UserName: string;
}

type SortOption = "date-desc" | "date-asc" | "name-asc" | "name-desc";

const Following = () => {
  const location = useLocation();
  const following = location.state?.following || [];
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("date-desc");

  const filteredUsers = following.filter((user: User) =>
    user.UserName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    switch (sortBy) {
      case "date-desc":
        return new Date(b.Date).getTime() - new Date(a.Date).getTime();
      case "date-asc":
        return new Date(a.Date).getTime() - new Date(b.Date).getTime();
      case "name-asc":
        return a.UserName.localeCompare(b.UserName);
      case "name-desc":
        return b.UserName.localeCompare(a.UserName);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">Following</h1>
            <p className="text-muted-foreground max-w-2xl">
              {following.length} people you follow
            </p>
          </header>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-full sm:w-64">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-desc">Newest first</SelectItem>
              <SelectItem value="date-asc">Oldest first</SelectItem>
              <SelectItem value="name-asc">Name A-Z</SelectItem>
              <SelectItem value="name-desc">Name Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedUsers.map((user: User, index: number) => (
            <Link
              to={`/profile/${user.UserName}`}
              key={`${user.UserName}-${index}`}
              className="block"
            >
              <div className="p-4 rounded-lg bg-accent/50 backdrop-blur-sm hover:bg-accent/70 cursor-pointer transition-colors">
                <div className="font-medium">{user.UserName}</div>
                <div className="text-sm text-muted-foreground">
                  Following since {new Date(user.Date).toLocaleDateString()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Following;