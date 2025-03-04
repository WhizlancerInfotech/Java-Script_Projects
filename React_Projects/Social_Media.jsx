import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

export default function SocialDashboard() {
  const [stats, setStats] = useState({ followers: 0, likes: 0 });

  useEffect(() => {
    fetch("http://localhost:5000/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Social Media Dashboard</h1>

      <h2 className="text-xl font-semibold mt-4">Followers: {stats.followers}</h2>
      <h2 className="text-xl font-semibold">Likes: {stats.likes}</h2>

      <div className="mt-4">
        <Bar
          data={{
            labels: ["Followers", "Likes"],
            datasets: [
              {
                label: "Stats",
                data: [stats.followers, stats.likes],
                backgroundColor: ["#36A2EB", "#FF6384"],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
