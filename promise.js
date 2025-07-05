// 

let human = {
    canFly: false,
    canSwim: true,
    canRun: true,
    canWalk: true,
    canTalk: true,
    canThink: true,
    canCode: true,
}

let dog = {
    canFly: false,
    canSwim: true,  
    canRun: true,
    canWalk: true,
    canBark: true,
    canFetch: true,
    canPlay: true,
}

dog.__proto__ = human;
