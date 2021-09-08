import { css } from "@emotion/css";
import { Modal } from "../Modal.js";
import { AddBookmark } from "./AddBookmark.js";

const styles = css`
  font-size: 16px;
  padding: 25px;
`;

export const BookmarkModal = ({
  handleDismissModal,
  handleEscapeModal,
  type,
}) => {
  return (
    <Modal
      {...{
        handleDismissModal,
        handleEscapeModal,
        title: `Add ${type === "bookmark" ? "Bookmark" : "Folder"}`,
        width: "520px",
        height: "450px",
        initialFocus: () =>
          document.querySelector("#bookmark-modal input#name"),
        shiftTabFocus: () =>
          document.querySelector("#bookmark-modal button.submit"),
      }}
    >
      <div className={styles} id="bookmark-modal">
        <AddBookmark {...{ type, handleDismissModal }} />
      </div>
    </Modal>
  );
};
