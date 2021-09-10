import consumer from "./consumer";

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log("cheguei aki");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $("#message-container").append(data.mod_message);
  },
});
