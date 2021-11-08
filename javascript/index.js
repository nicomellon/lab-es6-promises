// Iteration 1 - using callbacks
const mashedPotatoOl = document.querySelector("#mashedPotatoes");
const mashedPotatoImg = document.querySelector("#mashedPotatoesImg");

getInstruction("mashedPotatoes", 0, (step0) => {
  const instructionLi = document.createElement("li");
  instructionLi.innerText = step0;
  mashedPotatoOl.appendChild(instructionLi);

  getInstruction("mashedPotatoes", 1, (step1) => {
    const instructionLi = document.createElement("li");
    instructionLi.innerText = step1;
    mashedPotatoOl.appendChild(instructionLi);

    getInstruction("mashedPotatoes", 2, (step2) => {
      const instructionLi = document.createElement("li");
      instructionLi.innerText = step2;
      mashedPotatoOl.appendChild(instructionLi);

      getInstruction("mashedPotatoes", 3, (step3) => {
        const instructionLi = document.createElement("li");
        instructionLi.innerText = step3;
        mashedPotatoOl.appendChild(instructionLi);

        getInstruction("mashedPotatoes", 4, (step4) => {
          const instructionLi = document.createElement("li");
          instructionLi.innerText = step4;
          mashedPotatoOl.appendChild(instructionLi);

          const readyLi = document.createElement("li");
          readyLi.innerText = "Mashed potatoes are ready!";
          mashedPotatoOl.appendChild(readyLi);

          mashedPotatoImg.removeAttribute("hidden");
        });
      });
    });
  });
});

// Iteration 2 - using promises
const steakOl = document.querySelector("#steak");
const steakImg = document.querySelector("#steakImg");

// function to build new li rows
const newInstructionLi = (innerText) => {
  const steakLi = document.createElement("li");
  steakLi.innerText = innerText;
  steakOl.appendChild(steakLi);
};

obtainInstruction("steak", 0)
  .then((instruction) => {
    newInstructionLi(instruction);
    return obtainInstruction("steak", 1);
  })
  .then((instruction) => {
    newInstructionLi(instruction);
    return obtainInstruction("steak", 2);
  })
  .then((instruction) => {
    newInstructionLi(instruction);
    return obtainInstruction("steak", 3);
  })
  .then((instruction) => {
    newInstructionLi(instruction);
    return obtainInstruction("steak", 4);
  })
  .then((instruction) => {
    newInstructionLi(instruction);
    return obtainInstruction("steak", 5);
  })
  .then((instruction) => {
    newInstructionLi(instruction);
    return obtainInstruction("steak", 6);
  })
  .then((instruction) => {
    newInstructionLi(instruction);
    return obtainInstruction("steak", 7);
  })
  .then((instruction) => {
    newInstructionLi(instruction);

    const enjoyLi = document.createElement("li");
    enjoyLi.innerText = "Steak is ready!";
    steakOl.appendChild(enjoyLi);

    steakImg.removeAttribute("hidden");
  });

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...
