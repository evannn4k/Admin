import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { faPlus, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

export default function Project() {
  const [projects, setProjects] = useState([]);

  const fetchProject = async () => {
    try {
      const res = await fetch("data/project.json");
      const result = await res.json();

      setProjects(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  console.log(projects);
  return (
    <div className="p-6 w-full">
      <div className="rounded-2xl border border-zinc-200 bg-brand-100 w-full">
        <div className="p-6 flex justify-between">
          <Select>
            <SelectTrigger className="w-full max-w-48">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faSliders} />
                <SelectValue placeholder="Filter" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filter</SelectLabel>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="level">Task Level</SelectItem>
                <SelectItem value="status">Task Status</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button asChild>
            <a href="/project/create">
              <FontAwesomeIcon icon={faPlus} /> Create Project
            </a>
          </Button>
        </div>
        <Table className="font-semibold">
          <TableHeader className="bg-brand-300">
            <TableRow>
              <TableHead className="text-center font-semibold text-brand-500">
                #
              </TableHead>
              <TableHead className="font-semibold text-brand-500">
                Porject Name
              </TableHead>
              <TableHead className="font-semibold text-brand-500">
                Start Date
              </TableHead>
              <TableHead className="font-semibold text-brand-500">
                Deadline
              </TableHead>
              <TableHead className="font-semibold text-brand-500">
                Project Director
              </TableHead>
              <TableHead className="font-semibold text-brand-500">
                Level
              </TableHead>
              <TableHead className="font-semibold text-brand-500">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project, i) => {
              return (
                <TableRow key={project.id}>
                  <TableCell className="text-center">{i + 1}</TableCell>
                  <TableCell className="py-4">{project.projectName}</TableCell>
                  <TableCell className="py-4">{project.startDate}</TableCell>
                  <TableCell className="py-4">{project.deadline}</TableCell>
                  <TableCell className="py-4">
                    {project.projectDirector}
                  </TableCell>
                  <TableCell className="py-4">
                    {project.level == "High" ? (
                      <Badge className="p-2 bg-brand-red rounded-sm">
                        {project.level}
                      </Badge>
                    ) : project.level == "Medium" ? (
                      <Badge className="p-2 bg-brand-yellow rounded-sm">
                        {project.level}
                      </Badge>
                    ) : (
                      <Badge className="p-2 bg-brand-blue rounded-sm">
                        {project.level}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="py-4">
                    {project.status == "Running" ? (
                      <Badge className="p-2 bg-brand-blue rounded-sm">
                        {project.status}
                      </Badge>
                    ) : project.status == "Maintenance" ? (
                      <Badge className="p-2 bg-brand-yellow rounded-sm">
                        {project.status}
                      </Badge>
                    ) : (
                      <Badge className="p-2 bg-brand-300 text-brand-600 rounded-sm">
                        {project.status}
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
