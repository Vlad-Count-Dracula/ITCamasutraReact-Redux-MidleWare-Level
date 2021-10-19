import { connect } from "react-redux";
import { actionCreatorAddPost, actionCreatorCarrentMessage } from "../../../redax/reduseProfilePage";
import MyPosts from "./MyPosts";



let mapStateToProps = (state) => {
  return {
    postDataMessage : state.profilePage.postDataMessage,
  }
}

let mapAddPostToProps = (dispatch) => {
  return {
    addPost : () => {
        dispatch(actionCreatorAddPost())
    },

    onPostClick : (text) => {
      dispatch(actionCreatorCarrentMessage(text))
    },
  }
};


const MyPostsContainer = connect(mapStateToProps, mapAddPostToProps)(MyPosts);

export default MyPostsContainer;