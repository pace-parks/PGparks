export function DateFormat(date) {
    let month = date.getMonth() + 1; 
    let day = date.getDate();
    let year = date.getFullYear();
    
    // Ensure two digits for month and day
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    
    return `${month}/${day}/${year}`;
}