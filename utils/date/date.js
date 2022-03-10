let months = ["Janury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const getFormattedDate = date => {
    let dateInfo = date.split("-");

    let year = dateInfo[0];
    let month = dateInfo[1];
    let day = dateInfo[2];

    return day + " " + (months[month-1]).slice(0, 3) + ", " + year;
}