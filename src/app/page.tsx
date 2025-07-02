import General from "@/components/Cards/General";
import { Card } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="text-xl">
      <div className="grid md:grid-cols-2">
        <General />
        <div className="grid grid-cols-2">
          <Card />
          <Card />
        </div>
      </div>
      <div className="grid">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
