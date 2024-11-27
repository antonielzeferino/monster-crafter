const dragonLevel = 87;

function calculateLevel(type, skill) {
    const totalLength = type.length + skill.length;
    return Math.min(totalLength, 100);
}

function getProgressBarColor(difference) {
    if (difference <= 0) {
        return "#4caf50";
    } else if (difference <= 10) {
        return "#f4ea3a";
    } else {
        return "#e74c3c";
    }
}

function updateProgressBar(monsterLevel) {
  const progressBar = document.getElementById("progressBar");
  const difference = dragonLevel - monsterLevel;
  const dragonHealth = Math.max(difference, 0);
  const progress = (dragonHealth / dragonLevel) * 100;

  progressBar.style.width = `${Math.max(progress, 10)}%`;

  if (dragonHealth > 0) {
    progressBar.style.backgroundColor = getProgressBarColor(difference);
  } else {
    progressBar.style.backgroundColor = "transparent";
  }

  progressBar.textContent = `Vida do Dragão: ${dragonHealth} / ${dragonLevel}`;
}

function createMonster() {
    const name = document.getElementById("monsterName").value;
    const type = document.getElementById("monsterType").value;
    const skill = document.getElementById("monsterSkill").value;

    if (!name || !type || !skill) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const monsterLevel = calculateLevel(type, skill);
    updateProgressBar(monsterLevel);

    const resultDiv = document.getElementById("result");
    let resultMessage = `Seu monstro ${name} é um ${type} de nível ${monsterLevel} e possui as habilidades: ${skill}.<br>`;

    if (monsterLevel >= dragonLevel) {
        resultMessage += `🎉 Seu monstro derrotou o Dragão de nível ${dragonLevel}!`;
    } else {
        resultMessage += `💀 Seu monstro foi derrotado pelo Dragão de nível ${dragonLevel}.`;
    }

    resultDiv.innerHTML = resultMessage;
}
