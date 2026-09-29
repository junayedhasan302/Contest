// JUNAYED HASAN
type TicketResult = {
    queue: string[];
    served: string[];
};

function simulateTicketQueue(commands: string[]): TicketResult {
    const queue: string[] = [];
    const served: string[] = [];

    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];

        if (command.startsWith("join ")) {
            const name = command.slice(5);
            if (!queue.includes(name)) {
                queue.push(name);
            }
        }

        else if (command.startsWith("leave ")) {
            const name = command.slice(6);
            const index = queue.indexOf(name);
            if (index !== -1) {
                queue.splice(index, 1);
            }
        }

        else if (command === "serve") {
            if (queue.length > 0) {
                const person = queue.shift();
                if (person !== undefined) {
                    served.push(person);
                }
            }
        }
    }

    return {
        queue,
        served
    };
}


// Test Case 1
console.log(
    simulateTicketQueue([
        "join Rafi",
        "join Sara",
        "serve",
        "join Alex",
        "leave Sara",
        "serve"
    ])
);
// { queue: [], served: ["Rafi", "Alex"] }


// Test Case 2
console.log(
    simulateTicketQueue([
        "serve",
        "join Bob",
        "join Bob",
        "leave Alice",
        "join Alice",
        "serve"
    ])
);
// { queue: ["Alice"], served: ["Bob"] }