import Headroom from "../../node_modules/headroom.js/dist/headroom";

const element = document.querySelector("body");
const options = {
    tolerance: {
        up: 5,
        down: 10
    },
}

const headroom = new Headroom(element, options);
headroom.init();