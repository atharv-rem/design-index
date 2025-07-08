import arrow from "../assets/square-arrow-right-01-stroke-rounded 1.svg";

function Side_nav_arrow(props) {
    return (
        <img {...props} src={arrow} alt="arrow icon" className="w-[25px] h-[25px] p-[4px] ml-(--left-margin)" />
    );
}
export default Side_nav_arrow;