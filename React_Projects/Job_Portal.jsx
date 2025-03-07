import { useEffect, useState } from "react";
import { db } from "./firebase"; // Firebase setup file
import { collection, getDocs } from "firebase/firestore";

export default function JobPortal() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "jobs")).then((snapshot) =>
      setJobs(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
  }, []);

  return (
    <div className="p-4">
      {jobs.map((job) => (
        <div key={job.id} className="border p-4">
          <h2 className="text-xl">{job.title}</h2>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}
