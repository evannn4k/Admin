import { useEffect, useState } from "react";
import Filter from "@/components/Dashboard/Filter";
import Card from "@/components/Dashboard/Card";
import SideCard from "@/components/Dashboard/SideCard";
import ChartDashboard from "@/components/Dashboard/ChartDashboard";

export default function Dashboard() {
  const [employes, setEmployes] = useState([]);
  const [filter, setFilter] = useState("ready");
  const [loading, setLoading] = useState(false);

  const fetchEmploye = async () => {
    setLoading(true);
    try {
      const res = await fetch("data/employe.json");
      const result = await res.json();

      setEmployes(result);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmploye();
  }, []);

  const render =
    filter != "Complete"
      ? employes.filter((item) => item.availability == filter)
      : employes.filter((item) => item.status == filter);

  return (
    <>
      <div className="p-6 w-full">
        <div className="grid md:grid-cols-5 grid-cols-1 gap-4">
          <div className="col-span-1 md:col-span-3 bg-brand-100 p-4 rounded-2xl border border-zinc-200">
            <div className="flex flex-col gap-4">
              <Filter filter={filter} setFilter={setFilter} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {render.map((employe, i) => {
                  return (
                    <Card employe={employe} i={i} filter={filter} key={i} />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col gap-4">
              <SideCard />
              <ChartDashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
