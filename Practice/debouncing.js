function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function search(value) {
    console.log("Searching for:", value);
}

const debouncedSearch = debounce(search, 500);