const btn = document.querySelector('.button');
btn.addEventListener('click', btnEvent);
function btnEvent(e){
    let random;
    let game1 = [2,7,8,3,6,4,1,9,5,5,1,3,9,7,8,2,4,6,9,6,4,5,1,2,7,3,8,7,5,6,4,9,1,8,2,3,8,3,1,2,5,7,4,6,9,4,2,9,6,8,3,5,7,1,3,8,2,1,4,9,6,5,7,6,9,7,8,2,5,3,1,4,1,4,5,7,3,6,9,8,2];
    let game2;
    btn.textContent = 'New Game';
    random = 1 ;//Math.floor(Math.random() * 2 + 1);
    if(random == 1){
        document.querySelector('.one_one').textContent = 2;
        document.querySelector('.one_one').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.one_six').textContent = 4;
        document.querySelector('.one_six').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.one_nine').textContent = 5;
        document.querySelector('.one_nine').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.two_two').textContent = 1;
        document.querySelector('.two_two').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.three_two').textContent = 6;
        document.querySelector('.three_two').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.three_three').textContent = 4;
        document.querySelector('.three_three').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.three_four').textContent = 5;
        document.querySelector('.three_four').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.three_seven').textContent = 7;
        document.querySelector('.three_seven').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.three_eight').textContent = 3;
        document.querySelector('.three_eight').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.four_three').textContent = 6;
        document.querySelector('.four_three').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.four_six').textContent = 1;
        document.querySelector('.four_six').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.five_one').textContent = 8;
        document.querySelector('.five_one').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.five_four').textContent = 2;
        document.querySelector('.five_four').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.five_nine').textContent = 9;
        document.querySelector('.five_nine').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.six_four').textContent = 6;
        document.querySelector('.six_four').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.six_seven').textContent = 5;
        document.querySelector('.six_seven').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.seven_two').textContent = 8;
        document.querySelector('.seven_two').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.seven_three').textContent = 2;
        document.querySelector('.seven_three').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.seven_five').textContent = 4;
        document.querySelector('.seven_five').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.seven_six').textContent = 9;
        document.querySelector('.seven_six').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.seven_seven').textContent = 6;
        document.querySelector('.seven_seven').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.seven_eight').textContent = 5;
        document.querySelector('.seven_eight').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.eight_eight').textContent = 1;
        document.querySelector('.eight_eight').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.nine_one').textContent = 1;
        document.querySelector('.nine_one').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.nine_four').textContent = 7;
        document.querySelector('.nine_four').style.backgroundColor = 'rgb(39,174,96)';
        document.querySelector('.nine_nine').textContent = 2;
        document.querySelector('.nine_nine').style.backgroundColor = 'rgb(39,174,96)';
    }
}


//NUMBER PAD FUNCTIONING
var num;
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');

one.addEventListener('click', numAssigner1);
function numAssigner1(e){ num = 1; one.style.backgroundColor='rgb(34,34,34)'; one.style.color='white';}

two.addEventListener('click', numAssigner2);
function numAssigner2(e){ num = 2; two.style.backgroundColor='rgb(34,34,34)'; two.style.color='white';}

three.addEventListener('click', numAssigner3);
function numAssigner3(e){ num = 3; three.style.backgroundColor='rgb(34,34,34)'; three.style.color='white';}

four.addEventListener('click', numAssigner4);
function numAssigner4(e){ num = 4; four.style.backgroundColor='rgb(34,34,34)'; four.style.color='white';}

five.addEventListener('click', numAssigner5);
function numAssigner5(e){ num = 5; five.style.backgroundColor='rgb(34,34,34)'; five.style.color='white';}

six.addEventListener('click', numAssigner6);
function numAssigner6(e){ num = 6; six.style.backgroundColor='rgb(34,34,34)'; six.style.color='white';}

seven.addEventListener('click', numAssigner7);
function numAssigner7(e){ num = 7; seven.style.backgroundColor='rgb(34,34,34)'; seven.style.color='white';}

eight.addEventListener('click', numAssigner8);
function numAssigner8(e){ num = 8; eight.style.backgroundColor='rgb(34,34,34)'; eight.style.color='white';}

nine.addEventListener('click', numAssigner9);
function numAssigner9(e){ num = 9; nine.style.backgroundColor='rgb(34,34,34)'; nine.style.color='white';}




//MAIN FUNCTIONING
var cursor;
let one_one = document.querySelector('.one_one');
let one_two = document.querySelector('.one_two');
let one_three = document.querySelector('.one_three');
let one_four = document.querySelector('.one_four');
let one_five = document.querySelector('.one_five');
let one_six = document.querySelector('.one_six');
let one_seven = document.querySelector('.one_seven');
let one_eight = document.querySelector('.one_eight');
let one_nine = document.querySelector('.one_nine');
let two_one = document.querySelector('.two_one');
let two_two = document.querySelector('.two_two');
let two_three = document.querySelector('.two_three');
let two_four = document.querySelector('.two_four');
let two_five = document.querySelector('.two_five');
let two_six = document.querySelector('.two_six');
let two_seven = document.querySelector('.two_seven');
let two_eight = document.querySelector('.two_eight');
let two_nine = document.querySelector('.two_nine');
let three_one = document.querySelector('.three_one');
let three_two = document.querySelector('.three_two');
let three_three = document.querySelector('.three_three');
let three_four = document.querySelector('.three_four');
let three_five = document.querySelector('.three_five');
let three_six = document.querySelector('.three_six');
let three_seven = document.querySelector('.three_seven');
let three_eight = document.querySelector('.three_eight');
let three_nine = document.querySelector('.three_nine');
let four_one = document.querySelector('.four_one');
let four_two = document.querySelector('.four_two');
let four_three = document.querySelector('.four_three');
let four_four = document.querySelector('.four_four');
let four_five = document.querySelector('.four_five');
let four_six = document.querySelector('.four_six');
let four_seven = document.querySelector('.four_seven');
let four_eight = document.querySelector('.four_eight');
let four_nine = document.querySelector('.four_nine');
let five_one = document.querySelector('.five_one');
let five_two = document.querySelector('.five_two');
let five_three = document.querySelector('.five_three');
let five_four = document.querySelector('.five_four');
let five_five = document.querySelector('.five_five');
let five_six = document.querySelector('.five_six');
let five_seven = document.querySelector('.five_seven');
let five_eight = document.querySelector('.five_eight');
let five_nine = document.querySelector('.five_nine');
let six_one = document.querySelector('.six_one');
let six_two = document.querySelector('.six_two');
let six_three = document.querySelector('.six_three');
let six_four = document.querySelector('.six_four');
let six_five = document.querySelector('.six_five');
let six_six = document.querySelector('.six_six');
let six_seven = document.querySelector('.six_seven');
let six_eight = document.querySelector('.six_eight');
let six_nine = document.querySelector('.six_nine');
let seven_one = document.querySelector('.seven_one');
let seven_two = document.querySelector('.seven_two');
let seven_three = document.querySelector('.seven_three');
let seven_four = document.querySelector('.seven_four');
let seven_five = document.querySelector('.seven_five');
let seven_six = document.querySelector('.seven_six');
let seven_seven = document.querySelector('.seven_seven');
let seven_eight = document.querySelector('.seven_eight');
let seven_nine = document.querySelector('.seven_nine');
let eight_one = document.querySelector('.eight_one');
let eight_two = document.querySelector('.eight_two');
let eight_three = document.querySelector('.eight_three');
let eight_four = document.querySelector('.eight_four');
let eight_five = document.querySelector('.eight_five');
let eight_six = document.querySelector('.eight_six');
let eight_seven = document.querySelector('.eight_seven');
let eight_eight = document.querySelector('.eight_eight');
let eight_nine = document.querySelector('.eight_nine');
let nine_one = document.querySelector('.nine_one');
let nine_two = document.querySelector('.nine_two');
let nine_three = document.querySelector('.nine_three');
let nine_four = document.querySelector('.nine_four');
let nine_five = document.querySelector('.nine_five');
let nine_six = document.querySelector('.nine_six');
let nine_seven = document.querySelector('.nine_seven');
let nine_eight = document.querySelector('.nine_eight');
let nine_nine = document.querySelector('.nine_nine');

//one
one_one.addEventListener('click', mainAssigner1_1);
function mainAssigner1_1(e){one_one.textContent = num;}

one_two.addEventListener('click', mainAssigner1_2);
function mainAssigner1_2(e){one_two.textContent = num;}

one_three.addEventListener('click', mainAssigner1_3);
function mainAssigner1_3(e){one_three.textContent = num;}

one_four.addEventListener('click', mainAssigner1_4);
function mainAssigner1_4(e){one_four.textContent = num;}

one_five.addEventListener('click', mainAssigner1_5);
function mainAssigner1_5(e){one_five.textContent = num;}

one_six.addEventListener('click', mainAssigner1_6);
function mainAssigner1_6(e){one_six.textContent = num;}

one_seven.addEventListener('click', mainAssigner1_7);
function mainAssigner1_7(e){one_seven.textContent = num;}

one_eight.addEventListener('click', mainAssigner1_8);
function mainAssigner1_8(e){one_eight.textContent = num;}

one_nine.addEventListener('click', mainAssigner1_9);
function mainAssigner1_9(e){one_nine.textContent = num;}

//two
two_one.addEventListener('click', mainAssigner2_1);
function mainAssigner2_1(e){two_one.textContent = num;}

two_two.addEventListener('click', mainAssigner2_2);
function mainAssigner2_2(e){two_two.textContent = num;}

two_three.addEventListener('click', mainAssigner2_3);
function mainAssigner2_3(e){two_three.textContent = num;}

two_four.addEventListener('click', mainAssigner2_4);
function mainAssigner2_4(e){two_four.textContent = num;}

two_five.addEventListener('click', mainAssigner2_5);
function mainAssigner2_5(e){two_five.textContent = num;}

two_six.addEventListener('click', mainAssigner2_6);
function mainAssigner2_6(e){two_six.textContent = num;}

two_seven.addEventListener('click', mainAssigner2_7);
function mainAssigner2_7(e){two_seven.textContent = num;}

two_eight.addEventListener('click', mainAssigner2_8);
function mainAssigner2_8(e){two_eight.textContent = num;}

two_nine.addEventListener('click', mainAssigner2_9);
function mainAssigner2_9(e){two_nine.textContent = num;}

//three
three_one.addEventListener('click', mainAssigner3_1);
function mainAssigner3_1(e){three_one.textContent = num;}

three_two.addEventListener('click', mainAssigner3_2);
function mainAssigner3_2(e){three_two.textContent = num;}

three_three.addEventListener('click', mainAssigner3_3);
function mainAssigner3_3(e){three_three.textContent = num;}

three_four.addEventListener('click', mainAssigner3_4);
function mainAssigner3_4(e){three_four.textContent = num;}

three_five.addEventListener('click', mainAssigner3_5);
function mainAssigner3_5(e){three_five.textContent = num;}

three_six.addEventListener('click', mainAssigner3_6);
function mainAssigner3_6(e){three_six.textContent = num;}

three_seven.addEventListener('click', mainAssigner3_7);
function mainAssigner3_7(e){three_seven.textContent = num;}

three_eight.addEventListener('click', mainAssigner3_8);
function mainAssigner3_8(e){three_eight.textContent = num;}

three_nine.addEventListener('click', mainAssigner3_9);
function mainAssigner3_9(e){three_nine.textContent = num;}

//four
four_one.addEventListener('click', mainAssigner4_1);
function mainAssigner4_1(e){four_one.textContent = num;}

four_two.addEventListener('click', mainAssigner4_2);
function mainAssigner4_2(e){four_two.textContent = num;}

four_three.addEventListener('click', mainAssigner4_3);
function mainAssigner4_3(e){four_three.textContent = num;}

four_four.addEventListener('click', mainAssigner4_4);
function mainAssigner4_4(e){four_four.textContent = num;}

four_five.addEventListener('click', mainAssigner4_5);
function mainAssigner4_5(e){four_five.textContent = num;}

four_six.addEventListener('click', mainAssigner4_6);
function mainAssigner4_6(e){four_six.textContent = num;}

four_seven.addEventListener('click', mainAssigner4_7);
function mainAssigner4_7(e){four_seven.textContent = num;}

four_eight.addEventListener('click', mainAssigner4_8);
function mainAssigner4_8(e){four_eight.textContent = num;}

four_nine.addEventListener('click', mainAssigner4_9);
function mainAssigner4_9(e){four_nine.textContent = num;}

//five
five_one.addEventListener('click', mainAssigner5_1);
function mainAssigner5_1(e){five_one.textContent = num;}

five_two.addEventListener('click', mainAssigner5_2);
function mainAssigner5_2(e){five_two.textContent = num;}

five_three.addEventListener('click', mainAssigner5_3);
function mainAssigner5_3(e){five_three.textContent = num;}

five_four.addEventListener('click', mainAssigner5_4);
function mainAssigner5_4(e){five_four.textContent = num;}

five_five.addEventListener('click', mainAssigner5_5);
function mainAssigner5_5(e){five_five.textContent = num;}

five_six.addEventListener('click', mainAssigner5_6);
function mainAssigner5_6(e){five_six.textContent = num;}

five_seven.addEventListener('click', mainAssigner5_7);
function mainAssigner5_7(e){five_seven.textContent = num;}

five_eight.addEventListener('click', mainAssigner5_8);
function mainAssigner5_8(e){five_eight.textContent = num;}

five_nine.addEventListener('click', mainAssigner5_9);
function mainAssigner5_9(e){five_nine.textContent = num;}

//six
six_one.addEventListener('click', mainAssigner6_1);
function mainAssigner6_1(e){six_one.textContent = num;}

six_two.addEventListener('click', mainAssigner6_2);
function mainAssigner6_2(e){six_two.textContent = num;}

six_three.addEventListener('click', mainAssigner6_3);
function mainAssigner6_3(e){six_three.textContent = num;}

six_four.addEventListener('click', mainAssigner6_4);
function mainAssigner6_4(e){six_four.textContent = num;}

six_five.addEventListener('click', mainAssigner6_5);
function mainAssigner6_5(e){six_five.textContent = num;}

six_six.addEventListener('click', mainAssigner6_6);
function mainAssigner6_6(e){six_six.textContent = num;}

six_seven.addEventListener('click', mainAssigner6_7);
function mainAssigner6_7(e){six_seven.textContent = num;}

six_eight.addEventListener('click', mainAssigner6_8);
function mainAssigner6_8(e){six_eight.textContent = num;}

six_nine.addEventListener('click', mainAssigner6_9);
function mainAssigner6_9(e){six_nine.textContent = num;}

//seven
seven_one.addEventListener('click', mainAssigner7_1);
function mainAssigner7_1(e){seven_one.textContent = num;}

seven_two.addEventListener('click', mainAssigner7_2);
function mainAssigner7_2(e){seven_two.textContent = num;}

seven_three.addEventListener('click', mainAssigner7_3);
function mainAssigner7_3(e){seven_three.textContent = num;}

seven_four.addEventListener('click', mainAssigner7_4);
function mainAssigner7_4(e){seven_four.textContent = num;}

seven_five.addEventListener('click', mainAssigner7_5);
function mainAssigner7_5(e){seven_five.textContent = num;}

seven_six.addEventListener('click', mainAssigner7_6);
function mainAssigner7_6(e){seven_six.textContent = num;}

seven_seven.addEventListener('click', mainAssigner7_7);
function mainAssigner7_7(e){seven_seven.textContent = num;}

seven_eight.addEventListener('click', mainAssigner7_8);
function mainAssigner7_8(e){seven_eight.textContent = num;}

seven_nine.addEventListener('click', mainAssigner7_9);
function mainAssigner7_9(e){seven_nine.textContent = num;}

//eight
eight_one.addEventListener('click', mainAssigner8_1);
function mainAssigner8_1(e){eight_one.textContent = num;}

eight_two.addEventListener('click', mainAssigner8_2);
function mainAssigner8_2(e){eight_two.textContent = num;}

eight_three.addEventListener('click', mainAssigner8_3);
function mainAssigner8_3(e){eight_three.textContent = num;}

eight_four.addEventListener('click', mainAssigner8_4);
function mainAssigner8_4(e){eight_four.textContent = num;}

eight_five.addEventListener('click', mainAssigner8_5);
function mainAssigner8_5(e){eight_five.textContent = num;}

eight_six.addEventListener('click', mainAssigner8_6);
function mainAssigner8_6(e){eight_six.textContent = num;}

eight_seven.addEventListener('click', mainAssigner8_7);
function mainAssigner8_7(e){eight_seven.textContent = num;}

eight_eight.addEventListener('click', mainAssigner8_8);
function mainAssigner8_8(e){eight_eight.textContent = num;}

eight_nine.addEventListener('click', mainAssigner8_9);
function mainAssigner8_9(e){eight_nine.textContent = num;}

//nine
nine_one.addEventListener('click', mainAssigner9_1);
function mainAssigner9_1(e){nine_one.textContent = num;}

nine_two.addEventListener('click', mainAssigner9_2);
function mainAssigner9_2(e){nine_two.textContent = num;}

nine_three.addEventListener('click', mainAssigner9_3);
function mainAssigner9_3(e){nine_three.textContent = num;}

nine_four.addEventListener('click', mainAssigner9_4);
function mainAssigner9_4(e){nine_four.textContent = num;}

nine_five.addEventListener('click', mainAssigner9_5);
function mainAssigner9_5(e){nine_five.textContent = num;}

nine_six.addEventListener('click', mainAssigner9_6);
function mainAssigner9_6(e){nine_six.textContent = num;}

nine_seven.addEventListener('click', mainAssigner9_7);
function mainAssigner9_7(e){nine_seven.textContent = num;}

nine_eight.addEventListener('click', mainAssigner9_8);
function mainAssigner9_8(e){nine_eight.textContent = num;}

nine_nine.addEventListener('click', mainAssigner9_9);
function mainAssigner9_9(e){nine_nine.textContent = num;}




//CHECK BUTTON FUNCTIONING
let check = document.querySelector('.buttonCheck');
//check.addEventListener('mouseover', checker);
//function checker(e){
//    check.link = 'solution.html';
//    
//}


















