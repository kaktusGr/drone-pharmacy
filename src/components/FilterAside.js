import { React, useState, useContext } from "react";
import { Context } from "../Context";

export default function FilterAside() {
    const context = useContext(Context);
    const [showMore, setShowMore] = useState({ display: 'none' });
    const [hideBtn, setHideBtn] = useState(false);

    return (
        <div className="filter-aside">
            <div>
                <h3>Medicines</h3>
                <button className="btn-underline">Clear All</button>
            </div>
            <p>{context.totalMed} results</p>

            <div className="filter-ul">
                <h4>weight</h4>
                <ul>
                    <li>
                        <input type="checkbox" />
                        <label>Under 50G</label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label>50G – 100G</label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label>100G – 150G</label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label>150G – 200G</label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label>200G – 250G</label>
                    </li>
                    <li style={showMore}>
                        <input type="checkbox" />
                        <label>250G – 300G</label>
                    </li>
                    <li style={showMore}>
                        <input type="checkbox" />
                        <label>Above 300G</label>
                    </li>
                </ul>
                <button className="btn-underline"
                    onClick={() => {
                        setShowMore(!hideBtn ? { display: 'block' } : { display: 'none' });
                        setHideBtn(!hideBtn);
                    }}>Show {hideBtn ? "Less" : "More"} Options</button>
            </div>
            <hr />

            <div className="filter-ul">
                <h4>availability</h4>
                <div className="toggle-container">
                    <input type="checkbox" id="availability" name="availability"
                        checked={context.availability}
                        onChange={(e) => context.toggleAvailable(e.target.checked)} />
                    <label htmlFor="availability">
                        <div className="toggle-ball"></div>
                    </label>
                </div>
            </div>
            <hr />

            <div className="filter-ul">
                <h4>brand</h4>
                <div className="custom-select">
                    <select disabled>
                        <option value="">Select brand</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
