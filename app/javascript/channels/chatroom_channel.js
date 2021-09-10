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
    $("#message_body").on("keyup", function (e) {
      if (e.keyCode == 13) {
        e.target.value = "";
      }
    });
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
  }
};
