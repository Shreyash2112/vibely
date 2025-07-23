import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/config/react-query/services";
import type { Models } from "appwrite";

function Saved() {
  const { data: currentUser } = useGetCurrentUser();

  const savedPosts = currentUser?.save?.map((savedPost: Models.Document) => {
    return {
      ...savedPost.post,
      creator: {
        imageUrl: currentUser.imageUrl,
      },
    };
  }).reverse();

  return (
    <div className="saved-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/assets/icons/save.svg"
          alt="save"
          width={36}
          height={36}
          className="invert-white"
        />
        <h3 className="h3-bold md:h2-bold text-left w-full">Saved Posts</h3>
      </div>
      {!currentUser ? (
        <Loader />
      ) : (
        <ul>
          {savedPosts.length === 0 ? (
            <p className="text-light-4">No posts available</p>
          ) : (
            <GridPostList posts={savedPosts} showStats={false} />
          )}
        </ul>
      )}
    </div>
  );
}

export default Saved;
