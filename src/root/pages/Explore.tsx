import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import SearchResults from "@/components/shared/SearchResults";
import { Input } from "@/components/ui/input";
import {
  useGetInfinitePosts,
  useSearchPosts,
} from "@/config/react-query/services";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

function Explore() {
  const [searchValue, setSearchValue] = useState("");

  const debouncedValue = useDebounce(searchValue, 500);

  const { data: searchedPosts, isFetching: isSearching } =
    useSearchPosts(debouncedValue);

  const { data: posts, fetchNextPage, hasNextPage } = useGetInfinitePosts();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !searchValue) fetchNextPage();
  }, [inView, searchValue]);

  if (!posts) {
    return (
      <div className="flex-center gap-2 w-full h-full">
        <Loader />
        <p className="text-light-3 flex">Loading...</p>
      </div>
    );
  }

  const shouldShowSearchResult = searchValue !== "";
  const shouldShowPosts =
    !shouldShowSearchResult &&
    posts.pages.every((item) => item && item.documents.length == 0);

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">Search Posts</h2>
        <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
          <img
            src="/assets/icons/search.svg"
            alt="search"
            width={24}
            height={24}
          />
          <Input
            type="text"
            placeholder="Search"
            className="explore-search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold">
          {searchedPosts ? <>Search Results</> : <>Popular Today</>}
        </h3>

        <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
          <p className="small-medium md:base-medium text-light-2">All</p>
          <img
            src="/assets/icons/filter.svg"
            alt="filter"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-9 w-full max-w-5xl">
        {shouldShowSearchResult && searchedPosts ? (
          <SearchResults
            isSearching={isSearching}
            searchedPosts={searchedPosts}
          />
        ) : shouldShowPosts ? (
          <p className="text-light-4 mt-10 text-center w-full">End of Posts</p>
        ) : (
          posts.pages.map((item, index) => {
            if (!item) {
              return null;
            }
            return (
              <GridPostList key={`page-${index}`} posts={item.documents} />
            );
          })
        )}
      </div>
      {hasNextPage && !searchValue && (
        <div ref={ref} className="mt-10">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default Explore;
