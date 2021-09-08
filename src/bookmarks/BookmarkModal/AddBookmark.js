import { css } from "@emotion/css";
import { input } from "../../styles/inputs.js";
import { defaultBtn, submitBtn } from "../../styles/buttons.js";

const styles = css`
  .fields {
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    row-gap: 20px;
    column-gap: 10px;
  }

  label {
    text-align: right;
  }

  input {
    width: 100%;
    ${input}
  }

  .buttons {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    column-gap: 10px;
  }

  button {
    ${defaultBtn}

    &.submit {
      ${submitBtn}
    }
  }
`;

export const AddBookmark = ({ type, handleDismissModal }) => (
  <div className={styles}>
    <div className="fields">
      <label>Name</label>
      <input type="text" id="name" />
      {type === "bookmark" && (
        <>
          <label>URL</label>
          <input type="text" id="url" />
        </>
      )}
    </div>
    <div className="buttons">
      <button onClick={handleDismissModal}>Cancel</button>
      <button className="submit">Save</button>
    </div>
  </div>
);
