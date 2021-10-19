import { connect } from "react-redux";
import { actionCreatorAddMessage, actionCreatorCarrentText } from "../../../redax/State";
import Messages from "./Messages";



let mapStateToProps = (state) => {
  return {
    dataMessageUser : state.messagePage.dataMessageUser,
    dataMessageText : state.messagePage.dataMessageText,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onChangeClick : (text) => {
      dispatch(actionCreatorCarrentText(text))
    },
    addPost : () => {
      dispatch(actionCreatorAddMessage())
    }
  }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer ;