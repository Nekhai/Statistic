import dayjs from "dayjs";

export default function data() {
    const data = [];
    for (let num = 30; num >= 0; num--) {
        data.push({
            date: dayjs().subtract(num, "day").format("DD-MMMM"),
            value: 1 + Math.random()
        })
    }

    return data
}