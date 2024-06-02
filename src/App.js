/*函数式组件*/
import Citi from "./component/citi/Citi";
import NikeCompany from "./component/nike/Nike";

/*入口的app.js,里面包含多个不同的组件*/
export default function App() {
    return (
        <div>
            <Citi/>
            <NikeCompany/>
        </div>);
}