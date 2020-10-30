let names = ["Martin", "Jana", "Peter", "Fifi", "Vasi", "Lili"];

names.forEach(name => {if (name === "Martin") {
    $("ul").append(`<li><strong>${name}</strong></li>`)
    }else {
        $("ul").append(`<li>${name}</li>`)
    };
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$("body").append(`<h1>${additionalBlock.title}</h1>`,
`<p>${additionalBlock.text}</p>`);