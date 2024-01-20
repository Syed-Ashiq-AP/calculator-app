let ct = 'theme-1'

let math='0'

function set_theme(theme){
    document.getElementsByTagName('body')[0].classList.toggle(ct);
    document.getElementsByTagName('body')[0].classList.toggle(theme);
    ct = theme;
}

function insert_math(s){
    if(s == 'x'){
        s='*'
    }
    if(math ==0){
        math = '';
    }
    math +=s;
    document.getElementById('math').innerHTML = math;
}

function evt(){
    math = eval(math).toString();
    document.getElementById('math').innerHTML = math;
}

function reset(){
    math='0'
    document.getElementById('math').innerHTML = math;
}

function del_math(){
    math = math.slice(0,-1);
    document.getElementById('math').innerHTML = math;
}