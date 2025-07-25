import type { Models } from "appwrite";
import { Link } from "react-router-dom";

type UserCardProps = {
  user: Models.Document;
};

function UserCard({ user }: UserCardProps) {
  return (
    <Link to={`/profile/${user.$id}`} className="user-card">
      <img
        src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="user"
        className="rounded-full w-14 h-14 object-cover"
      />

      <div className="flex-center flex-col gap-1">
        <p className="base-medium text-light-1 text-center line-clamp-1">
          {user.name}
        </p>

        <p className="small-regular text-light-3  text-center line-clamp-1">
          @{user.username}
        </p>
      </div>
    </Link>
  );
}

export default UserCard;
