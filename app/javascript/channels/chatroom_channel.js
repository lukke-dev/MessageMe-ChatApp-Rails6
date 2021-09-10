import consumer from "./consumer";

consumer.subscriptions.create("ChatroomChannel", {
  connected() {},

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $("#message-container").append(data.mod_message);
    scroll_bottom();
  },
});
const scroll_bottom = function () {
  if ($("#messages").length > 0) {
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
  }
};
const submit_message = function () {
  $("#message_body").on("keydown", function (e) {
    if (e.keyCode == 13) {
      e.target.value = "";
    }
  });
};
