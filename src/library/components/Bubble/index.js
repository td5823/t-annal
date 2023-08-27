import { jsx as _jsx } from "react/jsx-runtime";
const BubbleBackground = () => {
    const bubbleCount = 50;
    return (_jsx("div", { className: "bubble-container", children: [...Array(bubbleCount)].map((_, index) => (_jsx("div", { className: "bubble" }, index))) }));
};
export default BubbleBackground;
