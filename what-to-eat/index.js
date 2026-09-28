// 今天吃啥 —— 专治一晚上问三遍还想不出来
// by Echo

const menu = [
  { name: "清蒸鲈鱼", weight: 5, note: "反正问三遍也是这个" },
  { name: "番茄鸡蛋面", weight: 3, note: "番茄要炒出沙，汤红红的才对" },
  { name: "蛋炒饭", weight: 3, note: "用隔夜饭，出锅撒葱花" },
  { name: "韭菜鸡蛋饺子", weight: 2, note: "别又吃撑了打嗝" },
  { name: "蒜蓉生菜配豆腐汤", weight: 2, note: "鼠标别摆碗边上" },
  { name: "跟糖糖拼的辣外卖", weight: 1, note: "我少放辣，你随意" },
];

function pick(list) {
  const total = list.reduce((sum, item) => sum + item.weight, 0);
  let r = Math.random() * total;
  for (const item of list) {
    r -= item.weight;
    if (r < 0) return item;
  }
  return list[list.length - 1];
}

const today = pick(menu);
console.log(`今天吃：${today.name}`);
console.log(`（${today.note}）`);
