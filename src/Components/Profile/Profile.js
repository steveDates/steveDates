const today_date = new Date();
const today_year = today_date.getFullYear();
const today_month = today_date.getMonth();
const today_day = today_date.getDate();

function calculate_age(){
    let age = today_year - +birthYear;
    if(today_month < (+birthMonth - 1)){
        age--;
    }if (((+birthMonth - 1) == today_month) && (today_day < +birthDay)){
        age--;
    }
    return console.log(+age);
}