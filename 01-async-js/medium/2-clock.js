// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateClock() {
    return new Promise((resolve) => {
        setInterval(() => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const amPm = now.getHours() >= 12 ? 'PM' : 'AM';

            const time24 = `${hours}:${minutes}:${seconds}`;
            const time12 = `${hours % 12 || 12}:${minutes}:${seconds} ${amPm}`;
            console.log(time24);
            console.log(time12);
        }, 1000);
    });

}
updateClock();