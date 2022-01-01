const d = new Date();

const cards = [
    {
        id: '1',
        title: 'Header',
        date: d.toLocaleString(),
        taskdate: "",
        priority: "HIGH ",
        typecard: "#FA8072 ",
        srtday: d.getDate(),
        endday: "",
        srtMnth: d.getMonth(),
        endMnth: "",
        srtyear: d.getFullYear(),
        endyear: ""
    },
    {
        id: '2',
        title: 'Why us',
        date: d.toLocaleString(),
        taskdate: "",
        priority: "LOW ",
        typecard: "#B0E0E6 ",
        srtday: d.getDate(),
        endday: "",
        srtMnth: d.getMonth(),
        endMnth: "",
        srtyear: d.getFullYear(),
        endyear: ""

    },
    {
        id: '3',
        title: 'Footer',
        date: d.toLocaleString(),
        taskdate: "",
        priority: "HIGH ",
        typecard: "#FA8072 ",
        srtday: d.getDate(),
        endday: "",
        srtMnth: d.getMonth(),
        endMnth: "",
        srtyear: d.getFullYear(),
        endyear: "",
    },
]
const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'todo',
            cards,
        },
        'list-2': {
            id: 'list-2',
            title: 'doing',
            cards: [],
        },

    },

    listIds: ['list-1', 'list-2'],

}

export const unit = {
    cards,
    data
}
