import React from "react";
// import styled from "styled-components";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Button } from "@zendeskgarden/react-buttons";

// const StyledRow = styled(Row)`
//   margin-top: ${(p) => p.theme.space.md};
// `;

const DetailButton = (props) => (
  <>
    <Row>
      <Col textAlign="center">
        <Button onClick={props.handleClick} isStretched>Update - Play by Play</Button>
      </Col>
    </Row>
    {/* <StyledRow>
       <Col textAlign="center">
         <Button isPrimary isStretched>
           Listen
         </Button>
       </Col>
     </StyledRow> */}
  </>
);

export default DetailButton;
