import { useEffect, useState } from "react";
import { getApplications } from "../services/applicationsSharepoint";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function fetchApplications() {
      const data = await getApplications();

      setApplications(data);
    }

    fetchApplications();
  }, []);

  return (
    <div>
      <h1 className="mb-4">
        Submitted Applications
      </h1>

      {applications.length === 0 && (
        <p>No applications yet.</p>
      )}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Position</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app.ID}>
              <td>{app.Title}</td>

              <td>{app.Email}</td>

              <td>{app.Phone}</td>

              <td>{app.Position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applications;