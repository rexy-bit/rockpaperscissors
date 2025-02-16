


const tdAnalyse = document.querySelector(".td-analyse");
const tdAsd = document.querySelector(".tp-asd");
const tpAsd = document.querySelector(".td-asd")
const tdAlgebre = document.querySelector(".td-algebre");
const tdSm = document.querySelector(".td-sm");
const tdElectro = document.querySelector(".td-electro");


const examAnalyse = document.querySelector(".exam-analyse");
const examAlgebre = document.querySelector(".exam-algebre");
const examAsd = document.querySelector(".exam-asd");
const examSm = document.querySelector(".exam-sm");
const examElectro = document.querySelector(".exam-electro");
const examAnglais = document.querySelector(".exam-anglais");
const examTermino = document.querySelector(".exam-termino");

const buttonCalculate = document.querySelector(".calcul-moy");

let moyenne = 0;

buttonCalculate.addEventListener("click", ()=>{
    calculMoy();
})

function calculMoy(){

    let analyseTd = tdAnalyse.value;
    let asdTd = tdAsd.value;
    let asdTp = tpAsd.value;
    let algebreTd = tdAlgebre.value;
    let smTd = tdSm.value;
    let electroTd = tdElectro.value;

    let analyseExam = examAnalyse.value;
    let algebreExam = examAlgebre.value;
    let asdExam = examAsd.value;
    let smExam = examSm.value;
    let electroExam = examElectro.value;
    let Nanglais = examAnglais.value;
    let Ntermino = examTermino.value;

    let Nanalyse = (analyseExam*0.6 + analyseTd*0.4)*4;
    let Nalgebre = (algebreExam*0.6 + algebreTd*0.4)*3;
    let Nasd = (asdExam*0.6 + asdTp*0.2 + asdTd*0.2)*4;
    let Nsm = (smExam*0.6 + smTd*0.4);
    let Nelectro = (electroExam*0.6 + electroTd*0.4)*2;

    moyenne = (Nalgebre + Nsm + Nelectro + Nanalyse + Nanglais + Ntermino + Nasd)/20;

    document.querySelector(".display-moy").innerHTML = `${moyenne}`;
    

}
