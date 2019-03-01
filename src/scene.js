export class Scene {
  #tweenables;

  /**
   * @param {...Tweenable} tweenables
   */
  constructor(...tweenables) {
    this.#tweenables = tweenables;
  }

  /**
   * @return {Array.<Tweenable>} A copy of the internal Tweenables array.
   */
  get tweenables() {
    return [...this.#tweenables];
  }

  ///**
  // * @param {Tweenable} tweenable
  // * @return {Tweenable}
  // */
  //addTweenable(tweenable) {}

  ///**
  // * @param {Tweenable} tweenable
  // * @return {Tweenable}
  // */
  //removeTweenable(tweenable) {}

  ///**
  // * @return {boolean}
  // */
  //isPlaying() {}

  ///**
  // * @return {Scene}
  // */
  //play() {}

  ///**
  // * @return {Scene}
  // */
  //pause() {}

  ///**
  // * @return {Scene}
  // */
  //resume() {}

  ///**
  // * @param {boolean} [gotoEnd]
  // * @return {Scene}
  // */
  //stop(gotoEnd) {}

  ///**
  // * @param {number} millisecond
  // * @return {Scene}
  // */
  //seek(millisecond) {}
}
