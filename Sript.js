function setScenario(type) {

  let title = document.getElementById("title");
  let text = document.getElementById("text");

  if (type === "baseline") {
    title.innerText = "Baseline Scenario";
    text.innerText = "Steady AI adoption, moderate productivity growth.";
  }

  if (type === "upside") {
    title.innerText = "Upside Scenario";
    text.innerText = "Fast AI diffusion, strong productivity gains, broad wage growth.";
  }

  if (type === "downside") {
    title.innerText = "Downside Scenario";
    text.innerText = "Uneven adoption, higher inequality, concentrated gains.";
  }
}
