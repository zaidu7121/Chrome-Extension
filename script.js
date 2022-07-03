
window.onload=()=>{
const jokes = document.querySelector('.jokes');
const nextBtn = document.querySelector('.btn');

const createJokes = () => {
    setHeader = {
        headers: {
            Accept: 'application/json',
        },
    };
    fetch('http://icanhazdadjoke.com/', setHeader)
        .then((res) => res.json())
        .then((data) => (jokes.innerText = data.joke))
        .catch((error) => console.log(error));
};

nextBtn.addEventListener('click', createJokes);
}
