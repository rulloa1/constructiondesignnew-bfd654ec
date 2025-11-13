import { PortfolioGrid } from "@/components/PortfolioGrid";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PortfolioGrid onClose={() => navigate("/")} />
    </div>
  );
};

export default Portfolio;
