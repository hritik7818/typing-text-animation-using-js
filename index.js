let str = ["amazon.com", "flipkart.com", "facebook.com", "instagram.com", "cricbuzz.com",];
let newStr = "";
let i = 0;
let j = 0;
setInterval(() => {
    newStr += str[i][j];
    j++;
    document.getElementsByTagName("input")[0].setAttribute("placeholder", newStr + "\u258C");
    if (j == str[i].length) {
        i++;
        j = 0;
        newStr = "";
        if (i == str.length) {
            i = 0;
        }
    }
}, 200);