import "../App.css";
import AppRoutes from "./Routes";

const App = () => {
    return (
        <main role="main" className="outer-container">
            <div className="inner-container">
                <div className="inner-container">
                    <AppRoutes />
                </div>
            </div>
        </main>
    );
};

export default App;
