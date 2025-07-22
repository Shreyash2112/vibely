import Loader from "@/components/shared/Loader";
import PostForm from "@/components/shared/PostForm";
import { useGetPostById } from "@/config/react-query/services";
import { useParams } from "react-router-dom";

function EditPost() {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostById(id || "");

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center gap-2">
        <Loader />
        <p className="text-light-3">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/add-post.svg"
            alt="add-post"
            height={25}
            width={25}
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Edit post</h2>
        </div>

        <PostForm action="Update" post={post} />
      </div>
    </div>
  );
}

export default EditPost;
