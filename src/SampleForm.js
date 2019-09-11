/** @jsx jsx */

import { jsx, css } from "@emotion/core";

export const SampleForm = ({ className }) => (
    <form
        css={css`
            display: grid;
            grid-template-columns: max-content max-content;
            grid-gap: 0.5em;

            > * {
                grid-column: 1 / -1;
            }

            > label {
                display: contents;
            }
        `}
        className={className} 
        action="#" 
        method="GET" 
        onSubmit={ev => ev.preventDefault()}
    >
        <label>Nome <input type="text" required /></label>
        <button>Manda bala</button>
    </form>
)
