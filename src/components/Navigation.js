import React from 'react';
import '../components/Search.css';
export default function Navigation(props) {
    return (
        <nav>
            <select id="selector" className="search" name="sorter">
                <option value="autosort">Default</option>
                <option value="datesort">Sort by date</option>
                <option value="titlesort">Sort by title</option>
                <option value="lengthsort">Sort by revisions</option>
            </select>
        </nav>
    )
}