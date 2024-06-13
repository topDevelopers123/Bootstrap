// let downloadCount = 0;


// function formatNumber(number) {
//     if (number >= 2000) {
//         return (number / 1000).toFixed(1) + 'k';
//     }
//     return number;
// }

// function updateDisplay() {
//     document.getElementById('number').textContent = formatNumber(downloadCount);
// }


// function incrementDownloads() {
//     downloadCount++;
//     if(downloadCount===1000)
//     return 
//     updateDisplay();
// }

// setInterval(incrementDownloads, 1000);


let downloadCount = 0;
let intervalId; // Declare a variable to store the interval ID

function formatNumber(number) {
    if (number >= 500) {
        return (number / 10).toFixed(1) + 'k';
    }
    return number;
}

function updateDisplay() {
    document.getElementById('number').textContent = formatNumber(downloadCount);
}

function incrementDownloads() {
    downloadCount++;
    if (downloadCount === 600) {
        clearInterval(intervalId); // Clear the interval when downloadCount reaches 1000
        return;
    }
    updateDisplay();
}
function name(params) {
    console.log("object")
}

intervalId = setInterval(incrementDownloads, 10); // Store the interval ID
