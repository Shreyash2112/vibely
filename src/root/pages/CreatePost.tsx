import PostForm from "@/components/shared/PostForm";

function CreatePost() {
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
          <h2 className="h3-bold md:h2-bold text-left w-full">Create post</h2>
        </div>

        <PostForm action="Create" />
      </div>
    </div>
  );
}

export default CreatePost;
