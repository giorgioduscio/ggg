export function bandCard(array) {
    return `
        ${array.map(el=>{
            return `<tr><td>${el.name}</td> <td>${el.role}</td></tr>`
        }).join('')}
    `;
}