import { css } from "@emotion/css";

const styles = css``;

export const AddBookmark = () => (
  <form className={styles}>
    Name
    <br />
    <input type="text" />
    <br />
    URL
    <br />
    <input type="text" />
  </form>
);
