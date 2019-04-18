/* @flow */

import React, { PureComponent } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

type Props = {
  history: Object,
  addTodo: Function,
  todos: Number
};

type State = {
  data: Array<String>,
  onMous: Boolean,
  value: String,
  images: Array
};

class CartImage extends PureComponent<State, Props> {
  state = { images: [1, 2, 3, 2, 1, 2, 3, 2] };

  handke = index => {
    const thumbnailSlideList = document.querySelectorAll(".thumbnail-slide");

    thumbnailSlideList.forEach(elemet => {
      elemet.classList.remove("thumbnail-slide-active");
    });

    thumbnailSlideList[index].classList.add("thumbnail-slide-active");
  };

  render() {
    return (
      <div className="inner">
        <div className="flex-container">
          {this.state.images.map((el, j) => (
            <div
              className="thumbnail-slide"
              onClick={e => {
                this.handke(j);
              }}
            >
              {j}
              <div />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default compose(withRouter)(CartImage);
