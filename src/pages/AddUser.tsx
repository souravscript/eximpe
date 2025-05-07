import { useState } from "react";

type CreatedUser = {
    name: string;
    job: string;
    id: string;
  };
  
const AddUser = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [createdUser, setCreatedUser] = useState<CreatedUser | null>(null);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setCreatedUser(null);

    try {
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1"
        },
        body: JSON.stringify({ name, job }),
      });

      const data = await response.json();
      setSuccessMessage("User added successfully!");
      setCreatedUser(data);
      setName("");
      setJob("");
    } catch (error) {
      console.error("Error adding user", error);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">Add User</h2>

      <form onSubmit={handleSubmit} className="w-full p-8 border rounded-md">
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name:</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Job Title:</label>
          <input
            type="text"
            value={job}
            required
            onChange={(e) => setJob(e.target.value)}
            className="w-full border px-3 py-2 rounded-md focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {successMessage && createdUser && (
        <div className="mt-6 p-4 border rounded-md w-full max-w-md bg-green-100 text-green-700">
          <p className="font-semibold mb-2">{successMessage}</p>
          <p><strong>Name:</strong> {createdUser.name}</p>
          <p><strong>Job:</strong> {createdUser.job}</p>
        </div>
      )}
    </div>
  );
};

export default AddUser;
