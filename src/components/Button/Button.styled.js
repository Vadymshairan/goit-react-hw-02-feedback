import styled from '@emotion/styled';

export const StyledButton = styled.button`
  margin: ${p => p.theme.space[2]}px;

  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  :active {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
