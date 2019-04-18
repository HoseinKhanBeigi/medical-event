/* @flow */

import React, { PureComponent } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

type Props = {};

type State = {
  data: Array<String>
};

var trigger = [
  ["hi", "hey", "hello"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name"
  ],
  ["i love you"],
  ["happy", "good"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
  ["bye", "good bye", "goodbye", "see you later"]
];
var reply = [
  ["Hi", "Hey", "Hello"],
  ["Fine", "Pretty well", "Fantastic"],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guest?",
    "I don't know actually"
  ],
  ["I am 1 day old"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["Kani Veri", "My God"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["I will", "What about?"],
  [
    "Tell me a story",
    "Tell me a joke",
    "Tell me about yourself",
    "You are welcome"
  ],
  ["Bye", "Goodbye", "See you later"]
];

var alternative = ["Haha...", "Eh..."];

class ChatBots extends PureComponent<State, Props> {
  state = {};

  componentDidMount() {
    document.querySelector(".in").addEventListener("keypress", e => {
      var key = e.which || e.keyCode;
      if (key === 13) {
        //Enter button
        var input = document.getElementById("input").value;
        document.getElementById("user").innerHTML = input;
        this.output(input);
      }
    });
  }

  output = input => {
    try {
      var product = input + "=" + eval(input);
    } catch (e) {
      var text = input.toLowerCase().replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and
      text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");
      if (this.compare(trigger, reply, text)) {
        var product = this.compare(trigger, reply, text);
      } else {
        var product =
          alternative[Math.floor(Math.random() * alternative.length)];
      }
    }
    document.getElementById("chatbot").innerHTML = product;
    this.speak(product);
    document.getElementById("input").value = "";
  };

  compare = (arr, array, string) => {
    var item;
    for (var x = 0; x < arr.length; x++) {
      for (var y = 0; y < array.length; y++) {
        if (arr[x][y] == string) {
          var items = array[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  };

  speak = string => {
    var utterance = new SpeechSynthesisUtterance();
    utterance.voice = speechSynthesis.getVoices().filter(function(voice) {
      return voice.name == "Agnes";
    })[0];
    utterance.text = string;
    utterance.lang = "en-US";
    utterance.volume = 1; //0-1 interval
    utterance.rate = 1;
    utterance.pitch = 2; //0-2 interval
    speechSynthesis.speak(utterance);
  };

  render() {
    return (
      <div className="mainOrginal">
        <div id="main">
          <div>
            user: <span id="user" />
          </div>
          <div>
            chatbot: <span id="chatbot" />
          </div>
          <div>
            <input
              id="input"
              className="in"
              type="text"
              placeholder="say anything..."
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withRouter)(ChatBots);
