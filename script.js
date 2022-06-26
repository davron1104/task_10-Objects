"use strict";
// Место для первой задачи

// showExperience(personalPlanPeter) => '1 month';
    const personalPlanPeter = {
        name: "Peter",
        age: "29",
        skills: {
            languages: ['ru', 'eng'],
            programmingLangs: {
                js: '20%',
                php: '10%'
            },
            exp: '1 month'
        },
    
    };



function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills; 
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}
showProgrammingLangs(personalPlanPeter);

