import AddOrder from "../pages/AddOrder";
import OrdersList from "../pages/OrdersList";
import EditingOrder from "../pages/EditingOrder";
import StopLists from "../pages/StopLists";
import CashRegister from "../pages/CashRegister";
import SettingsTerminal from "../pages/SettingsTerminal";
import Redirect from "./Redirect";

const routes = [
    {
        path: "/",
        id: 0,
        index: true,
        element: <Redirect link="/order-list" title="Retail Pad"/>
    },
    {
        path: "order-list",
        id: 1,
        element: <OrdersList title="Список заказов"/>
    },
    {
        path: "add-order",
        id: 2,
        element: <AddOrder title="Добавить заказ"/>
    },
    {
        path: "editing-order",
        id: 3,
        element: <EditingOrder title ="Редактировать заказ"/>
    },
    {
        path: "settings-terminal",
        id: 4,
        element: <SettingsTerminal title= "Настройка Терминала"/>
    },
    {
        path: "cash-register",
        id: 5,
        element: <CashRegister title ="ККТ"/>
    },
    {
        path: "stop-lists",
        id: 6,
        element: <StopLists title="Стоп Листы"/>
    },
    { 
        path: "*", 
        id: 7,
        element: <Redirect link="/order-list" title="Retail Pad"/>,
    },
]

export default routes;