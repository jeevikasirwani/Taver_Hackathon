import DatePicker from "react-datepicker";
import { useState } from "react"
import "react-datepicker/dist/react-datepicker.css";

function PickDate({ updateStartDateInParent, updateEndDateInParent }) {
    let cachedStartDate = localStorage.getItem('startDate');
    let cachedEndDate = localStorage.getItem('endDate');
    const [startDate, setStartDate] = useState(cachedStartDate === null ? new Date() : new Date(cachedStartDate));
    const [endDate, setEndDate] = useState(cachedEndDate === null ? new Date() : new Date(cachedEndDate));

    // Display spotify token 
    return (
        <div>
            <div>
                StartDate: <DatePicker selected={startDate} onChange={(date) => { setStartDate(date); window.localStorage.setItem("startDate", date); updateStartDateInParent(date); }} />
            </div>
            <div>
                EndDate: <DatePicker selected={endDate} onChange={(date) => { setEndDate(date); window.localStorage.setItem("endDate", date); updateEndDateInParent(date); }} />
            </div>
        </div>
    );
}

export default PickDate;

