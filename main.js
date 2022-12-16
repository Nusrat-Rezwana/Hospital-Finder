localStorage.setItem("name", "Nusrat");
localStorage.removeItem("name");

sessionStorage.setItem("name", "John");
sessionStorage.setItem("name", "Nusrat");

document.cookie = "name=Rezwana; expires" + new Date(29, 0, 1).toUTCString();

console.log(document.cookie);
