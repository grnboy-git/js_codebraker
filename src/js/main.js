var title;
var rules;
var answerNum;
var inputNum;
var defaultCardNum;
var defaultCardRange;
var countHit;
var countBlow;
var answerNum;
var inputNum;

function init() {
    this.title = "Code Braker!!";
    this.rules = "▼ゲームの遊び方\n";

    this.answerNum;
    this.inputNum;

    this.defaultCardNum = 3;
    this.defaultCardRange = 6;

    this.countHit = 0;
    this.countBlow = 0;

}

function standby() {
    this.answerNum = this.defaultCardNum;
    this.inputNum = this.defaultCardNum;
    setAnswerNum ();    
}

function standby(default) {
    this.defaultCardNum = defaultCardNum;
    this.answerNum = defaultCardNum;
    this.inputNum = defaultCardNum;
    setAnswerNum ();
}

function setAnswerNum() {
    if (this.answerNum.length != this.defaultCardNum){
        this.answerNum = this.defaultCardNum;
        this.inputNum = this.defaultCardNum;
    }
    
    for (i = 0; i <= 2; i++) {
        var num = Math.floor(Math.random()*this.defaultCardRange+1);
        for (j = i-1; i >= 0; j--) {
            while (this.answerNum[j]==this.num) {
                this.num = Math.floor(Math.random()*this.defaultCardRange+1);    
            }
        }
        this.answerNum[i] = num;
    }
} 

function inputCardNum(index, answerNum) {
    if (index > -1 && index < this.defaultCardRange+1) {
        if (answerNum > 0 && index < this.defaultCardNum) {
            this.inputNum[index] = answerNum;
        } else {
            // exception投げる
        }
    } else {
        // exception投げる
    }
}

function inputCardNum(index, string) {
    var answerNum;
    answerNum = Number(string);
    inputCardNum(index, answerNum);
}

function judgeAnswer() {
    this.countHit = 0;
    this.countBlow = 0;

    for (i = 0; i <= answerNum.length - 1; i++) {
        if (answerNum[i] == inputNum[i]) {
            this.countHit++;
        } else {
            for (var j=0; j<=this.answerNum.length-1; j++) {
                if (this.answerNum[i] == this.inputNum[j]) {
                    this.countBlow++;
                }
            }
        }
    }
    if (this.countHit != defaultCardNum) {
        return false;
    }
    return true;
}

function getTitle(){
    return this.title;
}

function getRule(){
    return this.rules;
}

function getDefaultCardNum(){
    return this.defaultCardNum;
}

function getDefaultCardRange(){
    return this.defaultCardRange;
}

function getHit(){
    return this.countHit;
}

function getBlow(){
    return this.countBlow;
}

function getAnswer(){
    return this.answerNum;
}

function getInput(){
    return this.inputNum;
}

function setTitle(title){
    this.title = title;
}

function setRule(rule){
    this.rules = rule;
}

function setInput(input){
    for (var i=0; i<=input.length-1; i++){
        this.inputCardNum(i, input[i]);
    }
}

