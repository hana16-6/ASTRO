import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavbarCom from "./component/navbar/NavbarCom";
import Home from "./component/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./component/signIn/SignIn";
import SignUp from "./component/signUp/SignUp";
import { Kanbanboard } from "./component/kanbanboard/kanban";
import { Priority } from "./component/priority/priority";
import { Notification } from "./component/notifiaction/notifiaction";
import { Quicknotepad } from "./component/quicknotepad/quicknotepad";
import { Chat } from "./component/chat/chat";
import { Viewboard } from "./component/viewboard/viewboard";
import { Checklist } from "./component/checklist/checklist";
import Footer from "./component/footer/Footer";
import ChatView from "./component/chatView/Chat.View";
import { Entrypage } from "./component/entryhomepage/entry";
import { Dashmain } from "./component/dashboardmain/dash";
import { Wrapper } from "./component/wrapper/wrapper";
import { Features } from "./component/MSfeatures/features";
import Goals from "./component/entryhomepage/goals/Goals";
import { GoalsPage } from "./component/goalsPage/GoalsPage";
import { QuicknotepadBoard } from "./component/quicknotepadBoard/quicknotepadBoard";
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import "react-toastify/dist/inject-style";
import "react-toastify/dist/ReactToastify.min.css";
import { Mention } from "./component/MentionPage/Mention";
import { Tableboard } from "./component/tableboard/tableboard";

function App() {
  setInterval(() => {
    toast.info("your teammate add comment", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.BOTTOM_LEFT,
      toastId: "welcome to Astro",

    });
  }, 500000
  )
  return (
    <>
      <Router>
        <div className="overflow-hidden">
          <NavbarCom />
          <ToastContainer />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={SignIn} path="/signIn" />
            <Route component={SignUp} path="/SignUp" />
            <Route component={Features} path="/Features" />
            <Route component={Kanbanboard} path="/kanbanboard" />
            <Route component={Priority} path="/priority" />
            <Route component={Notification} path="/Notification" />
            <Route component={Mention} path="/Mention" />
            <Route component={Quicknotepad} path="/quicknotepad" />
            <Route component={Chat} path="/Chat" />
            <Route component={Viewboard} path="/viewboard" />
            <Route component={Checklist} path="/checklist" />
            <Route component={ChatView} path="/ChatView" />
            <Route component={Entrypage} path="/Entrypage" />
            <Route component={Dashmain} path="/dashboard" />;
            <Route component={Wrapper} path="/wrapper" />
            <Route component={GoalsPage} path="/GoalsPage" />
            <Route component={Goals} path="/Goals" />
            <Route component={QuicknotepadBoard} path="/QuicknotepadBoard" />
            <Route component={Tableboard} path="/Tableboard" />

          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
