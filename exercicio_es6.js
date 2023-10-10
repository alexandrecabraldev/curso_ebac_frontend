const student=[];

student.push({
    name: 'Mayk',
    score:8
})

student.push({
    name: 'Diego',
    score:10
})

student.push({
    name: 'Fulano',
    score:5
})

student.push({
    name: 'Jakson',
    score:4
})

function scoreBetterThanSix(){
    const studentBetterThanSix= student.filter((student)=>{
            return student.score>=6;
        }
    )

    return studentBetterThanSix;
}



console.log(scoreBetterThanSix())