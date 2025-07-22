import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useGetUsers } from "@/config/react-query/services";
import { toast } from "sonner";

function AllUsers() {
  const { data: users, isFetching, isError: isErrorUsers } = useGetUsers();

  if (isErrorUsers) {
    return toast.error("Something went wrong");
  }

  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left -full">All Users</h2>
        {isFetching && !users ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {users?.documents.map((user) => {
              return (
                <li key={user.$id} className="flex-1 min-w-[200px]w-full">
                  <UserCard user={user} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AllUsers;
