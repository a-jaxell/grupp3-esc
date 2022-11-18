export async function asyncCall() {
    const arr = [];
    const res = await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");
    const data = await res.json();
    data.challenges.forEach((challenge) => {
        arr.push(challenge);
    });
    return arr;
}
// Uncaught SyntaxError: export 
//   declarations may only appear at top level of a module