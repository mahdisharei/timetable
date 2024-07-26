const timeTable = [
    {
        hour: 6,
        minutes: 33
    },
    {
        hour: 6,
        minutes: 48
    },
    {
        hour: 7,
        minutes: 15
    },
    {
        hour: 7,
        minutes: 38
    },
    {
        hour: 8,
        minutes: 3
    },
    {
        hour: 8,
        minutes: 33
    },
    {
        hour: 8,
        minutes: 59
    },
    {
        hour: 9,
        minutes: 16
    },
    {
        hour: 9,
        minutes: 39
    },
    {
        hour: 10,
        minutes: 12
    },
    {
        hour: 10,
        minutes: 28
    },
    {
        hour: 10,
        minutes: 52
    },
    {
        hour: 11,
        minutes: 29
    },
    {
        hour: 11,
        minutes: 40
    },
    {
        hour: 12,
        minutes: 13
    },
    {
        hour: 12,
        minutes: 42
    },
    {
        hour: 13,
        minutes: 3
    },
    {
        hour: 13,
        minutes: 48
    },
    {
        hour: 14,
        minutes: 14
    },
    {
        hour: 14,
        minutes: 50
    },
    {
        hour: 15,
        minutes: 33
    },
    {
        hour: 16,
        minutes: 3
    },
    {
        hour: 16,
        minutes: 48
    },
    {
        hour: 17,
        minutes: 23
    },
    {
        hour: 17,
        minutes: 48
    },
    {
        hour: 18,
        minutes: 24
    },
    {
        hour: 18,
        minutes: 58
    },
    {
        hour: 19,
        minutes: 22
    },
    {
        hour: 19,
        minutes: 51
    },
    {
        hour: 20,
        minutes: 33
    },
    {
        hour: 21,
        minutes: 1
    }
]
const now = new Date()

const remainingTimeTable1 = timeTable.filter(i => i.hour === now.getHours() && i.minutes > now.getMinutes())

const remainingTimeTable2 = timeTable.filter(i => i.hour > now.getHours())

const remainingTimeTable = remainingTimeTable1.concat(remainingTimeTable2)
console.log(remainingTimeTable)

if (remainingTimeTable.length !== 0) {
    if (remainingTimeTable[0].hour === now.getHours()) {
        document.getElementById('display').innerText = remainingTimeTable[0].minutes - now.getMinutes() + ' minutes'
    }else {
        document.getElementById('display').innerText = ((remainingTimeTable[0].hour - now.getHours())*60) - now.getMinutes() + remainingTimeTable[0].minutes + ' minutes'
    }
}else {
    document.getElementById('display').innerText = ((24 - now.getHours())*60)-(now.getMinutes()) + 393 + ' minutes'
}






