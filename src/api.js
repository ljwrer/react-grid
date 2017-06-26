/**
 * Created by Ray on 2017/6/25.
 */
import Mock from "mockjs";
const columnx1 = {
    "key": "name",
    "title": "姓名",
    "type": "input"
};
const columnx2 = {
    "key": "status",
    "title": "状态",
    "type": "input",
    "map": {
        "normal": "正常",
        "over": "过载",
        "under": "欠载",
        "empty": "空载"
    }
};
let columns1 = Mock.mock({
    "array|30": [
        {
            "key": "@word",
            "title": "@cword(2,5)",
            "type": "input"
        }
    ]
}).array;
let columns2 = Mock.mock({
    "array|20": [
        {
            "key": "@word",
            "title": "@cword(2,5)",
            "type": "select",
            "map": {
                "normal": "正常",
                "over": "过载",
                "under": "欠载",
                "empty": "空载"
            }
        }
    ]
}).array;
const columns = columns1.concat(columns2);
const data = Array.apply(null, Array(50)).map(() => columns.reduce((prev, col) => {
    if (col.type === 'select') {
        prev[col.key] = Mock.mock({
            "array|1": [
                "normal",
                "over",
                "under",
                "empty"
            ]
        }).array
    } else {
        prev[col.key] = Mock.mock('@cword(2,5)')
    }
    return prev
},{}));
export default () => Promise.resolve({columns, data});
