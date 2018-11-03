import styled, { css } from 'styled-components';

export const IconButton = styled.button`
  min-height: 2.75rem;
  min-width: 2.75rem;
  margin-left: auto;
  border: none;
  border-left: 0.25rem solid hsl(var(--hue), 50%, 10%);
  padding: 0;
  background: hsl(var(--hue), 50%, 30%);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 900;
`;

export const border = '0.25rem solid hsl(var(--hue), 50%, 10%)';

export const BorderBox = styled.div`
  display: flex;
  border: ${border};
`;

export const hideVisually = css`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  whitespace: nowrap;
  width: 1px;
`;

export const VisuallyHidden = styled.span({}, hideVisually);

export const PageContainer = styled.div`
  max-width: 38rem;
  margin: 0 auto;
  padding: 1.5rem 1.5rem 3.75rem 1.5rem;
`;

export const Header = styled.header`
  padding: 1rem;
  background-color: hsl(var(--hue), 50%, 30%);
  color: #fff;
  @media (min-width: 40em) {
    padding: 1rem 2rem;
  }
`;
