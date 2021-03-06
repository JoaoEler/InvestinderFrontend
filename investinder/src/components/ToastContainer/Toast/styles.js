import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import { shade } from 'polished';

const toastTypeVariations = {
  info: css`
    background: ${shade(0.2, '#b0a2ee')};
    color: #dfdfdf;
    strong {
      color: #dfdfdf;
    }
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
    strong {
      color: #2e656a;
    }
  `,
  error: css`
    background: #fddede;
    color: #c53030;
    strong {
      color: #c53030;
    }
  `,
};

export const Container = styled(animated.div)`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px, 12px, 0, 0;
  }

  div {
    flex: 1;

    strong {
      margin-left: 10px;
    }

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
