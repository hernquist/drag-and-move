import React, { Component } from "react";
import { Gesture } from "react-with-gesture";
import { Spring, animated, interpolate } from "react-spring";

import { DraggableCard, ScreenWrapper } from "UI";

export default class Screen extends Component {
  state = {
    top: 60,
    left: 74
  };

  adjustCardCoord = (xDelta, yDelta) => () => {
    this.setState(prevState => ({
      top: prevState.top + yDelta,
      left: prevState.left + xDelta
    }));
  };

  render() {
    const { top, left } = this.state;
    return (
      <ScreenWrapper>
        <Gesture>
          {({ down, x, y, xDelta, yDelta, xInitial, yInitial }) => {
            return (
              <DraggableCard
                onMouseUp={this.adjustCardCoord(xDelta, yDelta)}
                style={{
                  top: `${down ? yDelta + top : top}px`,
                  left: `${down ? xDelta + left : left}px`
                }}
              >
                <div>down: {down ? "true" : "false"}</div>
                <div>x: {x}</div>
                <div>y: {y}</div>
                <div>xDelta: {xDelta}</div>
                <div>yDelta: {yDelta}</div>
                <div>xInitial: {xInitial}</div>
                <div>yInitial: {yInitial}</div>
              </DraggableCard>
            );
          }}
        </Gesture>
      </ScreenWrapper>
    );
  }
}
