function choose(option) {
  const story = document.getElementById("story");
  const choices = document.getElementById("choices");

  if (option === "answer") {
    story.innerHTML = "The voice is broken, terrified: <br><br><i>'Ray... they found her. Evelyn's gone. You're the only one left.'</i><br><br>Your heart skips. The ghosts of your past tighten their grip. Do you face them?";
    choices.innerHTML = `
      <button onclick="choose('drive')">🚗 Drive into the storm</button>
      <button onclick="choose('calllog')">📱 Dig through her last call</button>
    `;
  } else if (option === "ignore") {
    story.innerHTML = "You let the phone die in the dark. Sleep claws at you. <br><br>But when morning comes, Evelyn is dead. A headline... and a scream inside your chest.<br><br>Something snaps. You grab your coat.";
    choices.innerHTML = `
      <button onclick="choose('visitScene')">🕵️ Visit the crime scene</button>
    `;
  } else if (option === "drive") {
    story.innerHTML = "Rain lashes the windshield. The mansion rises like a grave out of fog.<br><br>Inside, silence. A photo torn in half. A key still warm.<br><br>Someone was here... just before you.";
    choices.innerHTML = `
      <button onclick="choose('converge')">🔑 Follow the trail</button>
    `;
  } else if (option === "calllog") {
    story.innerHTML = "The number leads to a burner. One message: GPS ping — Blackwood Mansion.<br><br>This wasn't random. Evelyn knew she was a target.";
    choices.innerHTML = `
      <button onclick="choose('converge')">🛰️ Trace the signal</button>
    `;
  } else if (option === "visitScene") {
    story.innerHTML = "They’ve cleaned the scene... but missed the painting.<br><br>Behind it, Evelyn’s diary. One line is burned into the last page: <br><br><i>‘Ray. It’s the butler. Don’t trust anyone.’</i>";
    choices.innerHTML = `
      <button onclick="choose('converge')">🗝️ Open the final chapter</button>
    `;
  } else if (option === "converge") {
    story.innerHTML = "All paths lead here.<br><br>The key opens a cellar beneath the mansion. Inside: recordings, blackmail, a motive buried in blood.<br><br>The butler did it. Evelyn tried to stop him — and paid the price.";
    choices.innerHTML = `
      <button onclick="choose('escape')">🚁 Disappear with the truth</button>
      <button onclick="choose('arrest')">📢 Call it in. End it.</button>
    `;
  } else if (option === "escape") {
    story.innerHTML = "You vanish. The world spins, unknowing.<br><br>The file sits in your jacket. Truth in your pocket, blood on your hands.<br><br><b>The case is closed. But Ray Blackwood? Gone forever.</b>";
    choices.innerHTML = `<button onclick="restart()">🔁 Restart the story</button>`;
  } else if (option === "arrest") {
    story.innerHTML = "You step into the light. Sirens cut the dark.<br><br>The butler is taken. Evelyn is vindicated. You are a hero… but the cost?<br><br>Your peace is gone. And you finally put down your badge.";
    choices.innerHTML = `<button onclick="restart()">🔁 Restart the story</button>`;
  }
}

function restart() {
  document.getElementById("story").innerHTML =
    "A phone rings. Midnight. Unknown number.<br><br>Your hand hovers over the receiver. Evelyn’s name flashes on screen.<br><br>She vanished years ago…<br><br>Do you answer?";
  document.getElementById("choices").innerHTML = `
    <button onclick="choose('answer')">📞 Pick it up</button>
    <button onclick="choose('ignore')">❌ Let it ring</button>
  `;
}

