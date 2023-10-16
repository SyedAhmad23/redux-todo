import { useDispatch } from "react-redux";
import styled from "styled-components";
import { clearAllUsers } from "../store/slices/userSlices";
const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;
export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteUsers = () => {
    dispatch(clearAllUsers());
  };
  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={() => deleteUsers()}>
        clear users
      </button>
    </Wrapper>
  );
};
