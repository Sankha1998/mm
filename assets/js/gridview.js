
new gridjs.Grid({
    columns:["Date","Task Name", "Points"],
    fixedHeader: true,
    height: '400px',
    resizable: true,
    search:true,
    pagination: {
        enabled: true,
        limit: 5
    },
    language: {
        'search': {
        'placeholder': '🔍 Search.....'
        },
        'pagination': {
        'previous': '<',
        'next': '>',
        'showing': '',
        'results': () => 'Records'
        }
    },
    data: [
        ["10/02/2022","Task 1", 100],
        ["20/03/2022","Task 2A", 88],
        ["07/04/2022","Task 2B", 87.5],
        ["10/05/2022","Task 3",71],
        ["15/05/2022","Task 4",52]
    ]

}).render(document.getElementById("taskhistory5"));






new gridjs.Grid({

    columns:["Rank","Name", "Points"],
    fixedHeader: true,
    height: '400px',
    pagination: {
        enabled: true,
        limit: 3
    },
    language: {
        'search': {
        'placeholder': '🔍 Search.....'
        },
        'pagination': {
        'previous': '<--',
        'next': '-->',
        'showing': 'Displaying',
        'results': () => 'Records'
        }
    },
    search: true,
    resizable: true,
    sort:true,
    data: [
        [1,"John", 100],
        [2,"Mark", 88],
        [3,"Eoin", 87.5],
        [4,"Sarah",71],
        [5,"Afshin",52]
                    ]

}).render(document.getElementById("leaderboard"));