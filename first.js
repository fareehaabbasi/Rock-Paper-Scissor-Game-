const gameContainer = document.querySelector(".container");
userResult = document.querySelector(".user-result img");
cpuResult = document.querySelector(".cpu-result img");
result = document.querySelector(".result");
optionImages = document.querySelectorAll(".opt-img");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...."

    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
        gameContainer.classList.remove("start");
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      let randoNumber = Math.floor(Math.random() * 3);
      let cpuImages = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];
      cpuResult.src = cpuImages[randoNumber];
      let ComputerValue = ["R", "P", "S"][randoNumber];
      let YouValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "You",
        RS: "You",
        PP: "Draw",
        PR: "You",
        PS: "Computer",
        SS: "Draw",
        SR: "You",
        SP: "Computer",
      };

      let outcomesValue = outcomes[YouValue + ComputerValue];

      result.textContent =
        YouValue === ComputerValue ? "Match Draw" : `${outcomesValue} Won!!`;
    }, 2500);
  });
});
