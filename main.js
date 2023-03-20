let x, cross, circle;
let divisibility = 0;
let win_array;
let result = true;
let abc = ['a','b','c'];
win_array = [['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3'],
    ['a1','b1','c1'],['a2','b2','c2'],['a3','b3','c3'],['a1','b2','c3'],['c1','b2','a3']];
cross_array = [];
circle_array = [];
random_mess = ['good luck','have fun','wow','nice','fine','fair','lolo','pop','bang','boom','yoo','not bad','...'];


function Disable(){
    abc.forEach(el => {
        for(let j = 1;j<4;j++){
            document.getElementById(el + j).disabled = true;
        }
    })
}


function buttonclicked(x){
    console.log(x);
    if(divisibility % 2 === 0) {
        document.getElementById(x + '_img').src = 'cross.png';
        cross_array.push(x);
    }else {
        document.getElementById(x + '_img').src = 'circle.png';
        circle_array.push(x);
    }


    document.getElementById(x).disabled = true;
        cross_array.sort();
        circle_array.sort();

                win_array.forEach(i => {
                    let cro = 0, cir = 0;
                    i.forEach(j => {
                        if(cross_array.includes(j)){
                            cro++;
                        }
                        if(cro===3){
                            console.log('crosswon');
                            document.getElementById('h1').innerHTML = 'red won'
                            result = false;
                            Disable();
                            return 0;
                        }
                        if(circle_array.includes(j)){
                            cir++;
                        }
                        if(cir===3){
                            result = false;
                            console.log('circlewon');
                            document.getElementById('h1').innerHTML = 'green won'
                            Disable();
                            return 0;
                        }


                    })



                })
                if(result){
                    document.getElementById('h1').innerHTML = random_mess[Math.floor(Math.random() * 13)]
                }
                if (divisibility === 8 && result) {
                    console.log('draw')
                    document.getElementById('h1').innerHTML = 'draw'
                }
    divisibility ++;
}