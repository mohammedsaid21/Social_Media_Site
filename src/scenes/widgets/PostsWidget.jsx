import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";
import ServiceHelperUtil from "services/ServiceHelperUtil";

const PostsWidget = ({ userId, isProfile = false }) => {
  const PROJECT_BASE_REST_API_URL = ServiceHelperUtil.getBaseURL();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    try {

      const response = await fetch(`${PROJECT_BASE_REST_API_URL}/posts`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      dispatch(setPosts({ posts: data }));

    } catch (e) {
      console.log("Server Problem ", e)
    }
  };

  const getUserPosts = async () => {
    try {
      const response = await fetch(
        `${PROJECT_BASE_REST_API_URL}/posts/${userId}/posts`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      dispatch(setPosts({ posts: data }));
    } catch (e) {
      console.log("Server Problem ", e)
    }
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts?.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
          createdAt
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
            createdAt={createdAt}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
