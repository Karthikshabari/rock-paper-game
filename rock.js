let value='';
let score={
    win:0,
    loss:0,
    draw:0
};

function val(str){
    value=str;
    find();
}

function reset(){
    score.win=0;
    score.loss= 0;
    score.draw=0;
    document.querySelector('.score').innerHTML = `
    <div>
        <p>Win: ${score.win}</p>
        <p>Loss: ${score.loss}</p>
        <p>Draw: ${score.draw}</p>
    </div>`;
}
function find(str){
    let temp=Math.random();
    //assumsing 0-0.33 rock
    //0.34-0.66 paper
    //0.67-0.99 sci
    let win=0;
    let loss=0;
    let draw=0;
    let ans='';
    if(str==='paper'){
        if(temp<0.34){
            ans='won';
            win++;
        }
        else if(temp>=0.34 && temp<=0.66){
            ans='draw';
            draw++;
        }
        else {ans='lost'; loss++;}
    }else if(str==='rock'){
        if(temp<0.34){
            ans='draw';
            draw++;
        }
        else if(temp>=0.34 && temp<=0.66){
            ans='lost';
            loss++;
        }
        else {ans='win'; win++;}
    }
    else{
        if(temp<0.34){
            ans='won';
            win++;
        }
        else if(temp>=0.34 && temp<=0.66){
            ans='lost';
            loss++;
        }
        else {ans='draw'; draw++};
    }
    score.win=score.win+win;
    score.loss= score.loss+loss;
    score.draw= score.draw+draw;
    // document.querySelector('.score').innerHTML=ans;
    document.querySelector('.score').innerHTML = `
    <div>
        <p>Win: ${score.win}</p>
        <p>Loss: ${score.loss}</p>
        <p>Draw: ${score.draw}</p>
    </div>`;
}
