import { Outlet, Link, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <div>
        <Link to="1">
          <h1>User 1</h1>
        </Link>

        <Link to="2">
          <h1>User 2</h1>
        </Link>
        <Link to="3">
          <h1>User 3</h1>
        </Link>
        <div>
          <button onClick={() => setSearchParams({ filter: "active" })}>
            Active Users
          </button>
          <button onClick={() => setSearchParams()}>Reset Filter</button>
        </div>
        {showActiveUsers ? (
          <h2>Showing Active Users</h2>
        ) : (
          <h2>Showing all users</h2>
        )}
      </div>
      <Outlet />
    </>
  );
};
