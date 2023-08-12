import redFlag from "../assets/flag-red.svg";
import blueFlag from "../assets/flag-blue.svg";
import greenFlag from "../assets/flag-green.svg";

export default function getPriorityColor(priority) {
    switch (priority) {
        case 1:
            return {backgroundImage:`url(${redFlag})`};
        case 2:
            return {backgroundImage: `url(${blueFlag})`};
        case 3:
            return {backgroundImage: `url(${greenFlag})`};
        default:
            return {backgroundColor: '#EFF1ED', color: 'black'};
    }
}