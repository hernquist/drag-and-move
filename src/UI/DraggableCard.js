import styled from "styled-components";
import { elevation, colors } from "Utilities";

const DraggableCard = styled.div`
  position: absolute;

  background: ${colors.purple};
  border-radius: 5px;
  max-width: 160px;
  width: 150px;
  height: 200px;
  margin: 0 auto;
  color: white;
  ${elevation[4]};
  &:hover {
    ${elevation[5]};
  }
`;

export default DraggableCard;
