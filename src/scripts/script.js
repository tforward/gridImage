"use strict";

import css_ from "../css/styles.css";

import { EventDelegator, getTargetId } from "./olooEvent";

const randomColor = require("randomcolor");

const myApp = Object.create(null);

myApp.initApplication = function init() {
  const eventSandbox = EventDelegator();
  eventSandbox.initEvent("eventSandbox", "mouseover", { tags: ["DIV"] });
  eventSandbox.addEvent(eventController);

  const eventSandbox2 = EventDelegator();
  eventSandbox2.initEvent("eventSandbox", "mouseout", { tags: ["DIV"] });
  eventSandbox2.addEvent(eventController);

  const eventSandbox3 = EventDelegator();
  eventSandbox3.initEvent("eventSandbox", "click", { tags: ["DIV"] });
  eventSandbox3.addEvent(eventController);

  myApp.elems = Object.create(null);

  function eventController(args, e) {
    // Only Passes events of with tagNames defined in the array
    const id = getTargetId(e, args.tags);
    const min = 1;
    const max = 25;
    const num = getRandomNumber(min, max);
    const obj2 = myApp.elems[num];

    if (id !== undefined) {
      const obj = myApp.elems[id];
      if (e.type === "mouseover") {
        obj.getRandomColour();
        obj2.getRandomColour();
      } else if (e.type === "mouseout") {
        obj.getRandomHue();
        obj2.getRandomHue();
      } else if (e.type === "click") {
        obj.getRandomColour();
        for (let i = 0; i < max; i += 1) {
          const num3 = getRandomNumber(min, max);
          const obj3 = myApp.elems[num3];
          timeout(3, obj3.getRandomColour());
          setTimeout(() => {
            obj3.getRandomColour();
          }, 1500);
        }
      }
    }
  }

  myApp.main();
};

myApp.main = function main() {
  divCreator();
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function divCreator() {
  divMaker(25);

  function divMaker(num) {
    let num1 = num;
    const grid = document.getElementById("eventSandbox");
    num1 += 1;
    let i = 1;
    const tones = randomColor({ hue: "random", luminosity: "light", count: num1 });

    for (; i < num1; i += 1) {
      const div = DivBlockDelegator();
      div.create("DIV", i);
      div.elem.className = "item";
      // div.elem.textContent = i;
      div.elem.style.backgroundColor = tones[i];
      grid.appendChild(div.elem);
      myApp.elems[div.id] = div;
    }
  }
}

function timeout(num, func, i = 0, delay = 500) {
  let n = i;
  n += 1;
  func();
  if (n < num) setTimeout(timeout, delay, num, func, n);
}

timeout(3, hello);

function DivBlockDelegator() {
  const divBlock = Object.create(ElemDelegator());

  divBlock.getRandomColour = function getRandomColour() {
    const colour = randomColor({ hue: "random", luminosity: "light" });
    this.elem.style.backgroundColor = colour;
  };
  divBlock.getRandomHue = function getRandomHue() {
    const rgb = getRGBNums(this.elem.style.backgroundColor);
    const colour = rgb2Hex(rgb[1], rgb[2], rgb[3]);
    this.elem.style.backgroundColor = randomColor({ hue: colour, luminosity: "light" });
  };
  return divBlock;
}

function ElemDelegator() {
  // This is the base Delegator "Class" for a element
  const Element = Object.create(null);
  // Use create for creating new elements
  Element.create = function create(type, elemId) {
    this.elem = document.createElement(type);
    this.elem.id = elemId;
    this.id = elemId;
  };
  // Use init for working with existing elements
  Element.init = function init(elemId) {
    this.id = elemId;
    this.elem = document.getElementById(this.id);
  };
  return Element;
}

// ======================================================================
// Utilities
// ======================================================================

function timeout(num, func, i = 0, delay = 500) {
  let n = i;
  n += 1;
  func();
  if (n < num) setTimeout(timeout, delay, num, func, n);
}

function getRGBNums(string) {
  let rgb = string;
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return rgb;
}

function componentToHex(v) {
  let c = v;
  if (typeof v === "string") {
    c = parseInt(c, 10);
  }
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

function rgb2Hex(r, g, b) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

// ======================================================================
// Handler when the DOM is fully loaded
document.onreadystatechange = function onreadystatechange() {
  if (document.readyState === "complete") {
    myApp.initApplication();
  } else {
    // Do something during loading (optional)
  }
};
// ======================================================================
