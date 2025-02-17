function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}
console.log(getQueryParam("id"));
