const cmdInput = document.getElementById("terminal-cmd");

cmdInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = cmdInput.value.trim().toLowerCase();

    if (command !== "") {
      handleCommand(command);
    }
    cmdInput.value = "";
  }
});

function handleCommand(cmd) {
  if (cmd === "help") {
    alert(
      "Available Simulated Executables:\n--> help: Displays commands\n--> clear: Reload environment\n--> contact: Open email to link",
    );
  } else if (cmd === "clear") {
    location.reload();
  } else if (cmd === "contact") {
    window.location.href = "mailto:";
  } else {
    alert(`bash: command not found: ${cmd}`);
  }
}
