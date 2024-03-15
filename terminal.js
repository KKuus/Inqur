import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type: "checkbox",
            name: "World",
            message: "Pick a world",
            choices: ["Ruined City", "Cultist Base", "Urdak", "Earth"]
        },
        {
            type: "confirm",
            name: "Luck",
            message: "Do you think you are lucky enough to survive?"
        },
        {
            type: "editor",
            name: "fail",
            message: "Write your stats down."
        },
        {
            type: "expand",
            name: "Weapon",
            message: 'Which weapon are you pulling out?',
            default: 'b',
            choices: [
                {
                    key: 'b',
                    name: 'BFG-9000',
                    value: 'Attack',
                },
                {
                    key: 'c',
                    name: 'Chainsaw',
                    value: 'Chainsaw',
                },
                {
                    key: 'y',
                    name: 'Heavycannon',
                    value: 'Heavy cannon',
                },
                {
                    key: 's',
                    name: 'Supershotgun',
                    value: 'Super Shotgun',
                },
            ],
        },
        {
            type: "input",
            name: "Yell",
            message: "Yell something!!"
        },
        {
            type: 'list',
            name: 'Helper',
            message: 'You found bunch of demons, which one are you attacking first?',
            choices: ['Cacodemon', 'Imp', 'Icon of Sin', 'Hell Knight']
        },
        {
            type: "number",
            name: "bullets",
            message: "How many bullets do you need to kill it?"
        },
        {
            type: "password",
            name: "code",
            message: "You need a code to open this door.",

        },
        {
            type: "rawlist",
            name: "Vega",
            message: "VEGA won't shut up, what do you do!",
            choices: ["RIP AND TEAR", "listen to him", "Do the opposite of what he says.."]
        },
    ])
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });