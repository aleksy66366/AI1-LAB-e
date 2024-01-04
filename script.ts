let currentStyle = 'styles1.css';
const stylesDict: Record<string, string> = {
    'Styl 1': 'styles1.css',
    'Styl 2': 'styles2.css'
};

export function changeStyle(styleName: string) {
    const link = document.getElementById('dynamic-style');
    if (link) {
        console.log("Zmieniany styl na:", styleName);
        const stylePath = stylesDict[styleName];
        console.log("Ścieżka do nowego stylu:", stylePath);
        link.setAttribute("href", stylesDict[styleName]);

    } else {
        console.error("Nie znaleziono elementu <link>");
    }
}

function generateStyleLinks() {
    const nav = document.querySelector('nav');
    if (nav) {
        for (const styleName in stylesDict) {
            const button = document.createElement('button');
            button.innerText = styleName;
            button.onclick = () => changeStyle(styleName);
            nav.appendChild(button);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        console.log("Adding listener to button:", button);
        button.addEventListener('click', () => {
            const styleName = button.getAttribute('data-style');
            if (styleName) {
                console.log("Button clicked, changing style to:", styleName);
                changeStyle(styleName);
            }
        });
    });
});